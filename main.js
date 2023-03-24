process.on("uncaughtException", console.error);
("use strict");
const {
  default: makeWASocket,
  DisconnectReason,
  useMultiFileAuthState,
  makeInMemoryStore,
  downloadContentFromMessage,
  jidDecode,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  fetchLatestBaileysVersion,
} = require("@adiwajshing/baileys");
const fs = require("fs");
const chalk = require("chalk");
const logg = require("pino");
const clui = require("clui");
const { Spinner } = clui;
const { serialize, fetchJson, getBuffer } = require("./function/func_Server");
const { nocache, uncache } = require("./function/Chache_Data.js");
const { welcome_JSON } = require("./function/Data_Location.js");
const {
  auto_BlockCaller,
} = require("./function/Data_Server_Bot/Call_AutoBlock.js");
const {
  status_Connection,
} = require("./function/Data_Server_Bot/Status_Connect.js");
const { Memory_Store } = require("./function/Data_Server_Bot/Memory_Store.js");
const {
  groupResponse_Welcome,
  groupResponse_Remove,
  groupResponse_Promote,
  groupResponse_Demote,
} = require("./function/group_Respon.js");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
} = require("./function/Exif_Write");
const { updateGroup } = require("./function/update_Group");

let setting = JSON.parse(fs.readFileSync("./config.json"));

const status = new Spinner(chalk.cyan(` Booting WhatsApp Bot`));
const starting = new Spinner(chalk.cyan(` Preparing After Connect`));
const reconnect = new Spinner(chalk.redBright(` Reconnecting WhatsApp Bot`));

const connectToWhatsApp = async () => {
  const { state, saveCreds } = await useMultiFileAuthState(
    `./${setting.sessionName}`
  );

  const { version, isLatest } = await fetchLatestBaileysVersion();

  const conn = makeWASocket({
    version,
    logger: pino({ level: "silent" }),
    printQRInTerminal: true,
    patchMessageBeforeSending: (message) => {
      const requiresPatch = !!(
        message.buttonsMessage ||
        message.templateMessage ||
        message.listMessage
      );
      if (requiresPatch) {
        message = {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadataVersion: 2,
                deviceListMetadata: {},
              },
              ...message,
            },
          },
        };
      }
      return message;
    },
    browser: ["abot Multi Device", "Safari", "1.0.0"],
    auth: state,
  });

  Memory_Store.bind(conn.ev);

  conn.ev.on("messages.upsert", async (m) => {
    var msg = m.messages[0];
    if (!m.messages) return;
    if (msg.key && msg.key.remoteJid == "status@broadcast") return;
    msg = serialize(conn, msg);
    msg.isBaileys =
      msg.key.id.startsWith("BAE5") || msg.key.id.startsWith("3EB0");
    require("./conn")(conn, msg, m, setting, Memory_Store);
  });

  conn.reply = (from, content, msg) =>
    conn.sendMessage(from, { text: content }, { quoted: msg });

  conn.ws.on("CB:call", async (json) => {
    auto_BlockCaller(json);
  });

  conn.ev.on("connection.update", (update) => {
    status_Connection(conn, update, connectToWhatsApp);
  });

  conn.ev.on("group-participants.update", async (update) => {
    const isWelcome = welcome_JSON;
    if (!isWelcome.includes(update.id)) return;
    groupResponse_Demote(conn, update);
    groupResponse_Promote(conn, update);
    groupResponse_Welcome(conn, update);
    groupResponse_Remove(conn, update);
    console.log(update);
  });

  conn.ev.on("group-update", async (anu) => {
    updateGroup(conn, anu, MessageType);
  });

  conn.sendImage = async (jid, path, caption = "", quoted = "", options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await conn.sendMessage(
      jid,
      { image: buffer, caption: caption, ...options },
      { quoted }
    );
  };

  conn.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (
        (decode.user && decode.server && decode.user + "@" + decode.server) ||
        jid
      );
    } else return jid;
  };

  conn.downloadAndSaveMediaMessage = async (msg, type_file, path_file) => {
    if (type_file === "image") {
      var stream = await downloadContentFromMessage(
        msg.message.imageMessage ||
          msg.message.extendedTextMessage?.contextInfo.quotedMessage
            .imageMessage,
        "image"
      );
      let buffer = Buffer.from([]);
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
      }
      fs.writeFileSync(path_file, buffer);
      return path_file;
    } else if (type_file === "video") {
      var stream = await downloadContentFromMessage(
        msg.message.videoMessage ||
          msg.message.extendedTextMessage?.contextInfo.quotedMessage
            .videoMessage,
        "video"
      );
      let buffer = Buffer.from([]);
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
      }
      fs.writeFileSync(path_file, buffer);
      return path_file;
    } else if (type_file === "sticker") {
      var stream = await downloadContentFromMessage(
        msg.message.stickerMessage ||
          msg.message.extendedTextMessage?.contextInfo.quotedMessage
            .stickerMessage,
        "sticker"
      );
      let buffer = Buffer.from([]);
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
      }
      fs.writeFileSync(path_file, buffer);
      return path_file;
    } else if (type_file === "audio") {
      var stream = await downloadContentFromMessage(
        msg.message.audioMessage ||
          msg.message.extendedTextMessage?.contextInfo.quotedMessage
            .audioMessage,
        "audio"
      );
      let buffer = Buffer.from([]);
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
      }
      fs.writeFileSync(path_file, buffer);
      return path_file;
    }
  };
  conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifImg(buff, options);
    } else {
      buffer = await imageToWebp(buff);
    }
    await conn
      .sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
      .then((response) => {
        fs.unlinkSync(buffer);
        return response;
      });
  };

  conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifVid(buff, options);
    } else {
      buffer = await videoToWebp(buff);
    }
    await conn
      .sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
      .then((response) => {
        fs.unlinkSync(buffer);
        return response;
      });
  };
  return conn;
};
connectToWhatsApp();

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
