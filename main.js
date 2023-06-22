require("./config/setting");
const {
  default: makeWASocket,
  AnyMessageContent,
  useMultiFileAuthState,
  makeCacheableSignalKeyStore,
  delay,
  DisconnectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  MessageType,
  MessageOptions,
  Mimetype,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  jidNormalizedUser,
  proto,
} = require("baileys");
const pino = require("pino");
const { Boom } = require("@hapi/boom");
const fs = require("fs");
const chalk = require("chalk");
const figlet = require("figlet");
const FileType = require("file-type");
const path = require("path");
const PhoneNumber = require("awesome-phonenumber");
const { color, bgcolor, mycolor } = require("./function/lib/color");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
} = require("./function/lib/exif");
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
} = require("./function/lib/functions");
const store = makeInMemoryStore({
  logger: pino().child({ level: "silent", stream: "store" }),
});

global.db = JSON.parse(fs.readFileSync("./function/database/database.json"));
global.db.data = {
  users: {},
  chats: {},
  sticker: {},
  database: {},
  game: {},
  settings: {},
  others: {},
  ...(global.db.data || {}),
};

async function startabot() {
  const { state, saveCreds } = await useMultiFileAuthState(global.sessionName);
  let { version, isLatest } = await fetchLatestBaileysVersion();
  const { say } = require("cfonts");
  say("ABOT", { font: "shade", align: "left", gradient: ["blue", "magenta"] });
  await say("Abot", {
    font: "console",
    align: "left",
    gradient: ["magenta", "red"],
  });

  const abot = makeWASocket({
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
    browser: ["Bayu", "Chrome", "3.0.0"],
    auth: state,
    version,
  });

  store.bind(abot.ev);

  abot.ev.on("messages.upsert", async (chatUpdate) => {
    try {
      for (let mek of chatUpdate.messages) {
        if (!mek.message) return;
        mek.message =
          Object.keys(mek.message)[0] === "ephemeralMessage"
            ? mek.message.ephemeralMessage.message
            : mek.message;
        if (mek.key && mek.key.remoteJid == "status@broadcast") return;
        if (!abot.public && !mek.key.fromMe && chatUpdate.type === "notify")
          return;
        if (mek.key.id && mek.key.id.length === 16) return;
        if (mek.key.id.startsWith("3EB0") && mek.key.id.length === 12) return;
        var m = smsg(abot, mek, store);
        require("./function/case")(abot, m, chatUpdate, store);
      }
    } catch (err) {
      console.log(err);
    }
  });

  abot.ev.process(async (events) => {
    if (events["messages.upsert"]) {
      const upsert = events["messages.upsert"];
      //console.log(JSON.stringify(upsert, '', 2))
      for (let msg of upsert.messages) {
        if (msg.key.remoteJid === "status@broadcast") {
          //console.log(JSON.stringify(upsert, '', 2))
          if (msg.message?.protocolMessage) return;
          console.log(
            `Lihat status ${msg.pushName} ${msg.key.participant.split("@")[0]}`
          );
          await abot.readMessages([msg.key]);
          await delay(1000);
          return await abot.readMessages([msg.key]);
        }
      }
    }

    if (events["creds.update"]) {
      await saveCreds();
    }
  });

  abot.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (
        (decode.user && decode.server && decode.user + "@" + decode.server) ||
        jid
      );
    } else return jid;
  };

  abot.ev.on("contacts.update", (update) => {
    for (let contact of update) {
      let id = abot.decodeJid(contact.id);
      if (store && store.contacts)
        store.contacts[id] = { id, name: contact.notify };
    }
  });
  abot.reply = (from, content, msg) =>
    abot.sendMessage(from, { text: content }, { quoted: msg });
  abot.getName = (jid, withoutContact = false) => {
    id = abot.decodeJid(jid);
    withoutContact = abot.withoutContact || withoutContact;
    let v;
    if (id.endsWith("@g.us"))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = abot.groupMetadata(id) || {};
        resolve(
          v.name ||
            v.subject ||
            PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber(
              "international"
            )
        );
      });
    else
      v =
        id === "0@s.whatsapp.net"
          ? {
              id,
              name: "WhatsApp",
            }
          : id === abot.decodeJid(abot.user.id)
          ? abot.user
          : store.contacts[id] || {};
    return (
      (withoutContact ? "" : v.name) ||
      v.subject ||
      v.verifiedName ||
      PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber(
        "international"
      )
    );
  };

  abot.ev.on("group-participants.update", async (room) => {
    console.log(room);
    try {
      let metadata = await await abot.groupMetadata(room.id);
      let member = room.participants[0];

      const reSize = async (buffer, ukur1, ukur2) => {
        return new Promise(async (resolve, reject) => {
          let jimp = require("jimp");
          var baper = await jimp.read(buffer);
          var ab = await baper
            .resize(ukur1, ukur2)
            .getBufferAsync(jimp.MIME_JPEG);
          resolve(ab);
        });
      };

      try {
        var pic = await getBuffer(
          await abot.profilePictureUrl(member, "image")
        );
      } catch {
        var pic = await getBuffer(
          await abot.profilePictureUrl(room.id, "image")
        );
      }
      //templete
      let butwel = [
        { buttonId: "list", buttonText: { displayText: "WELCOME" }, type: 1 },
      ];
      let butleav = [
        {
          buttonId: "donasi",
          buttonText: { displayText: "Bye Beban👋" },
          type: 1,
        },
      ];
      let butselamat = [
        { buttonId: "", buttonText: { displayText: "SELAMAT" }, type: 1 },
      ];
      let butsebar = [
        { buttonId: "", buttonText: { displayText: "SABAR" }, type: 1 },
      ];
      let nyoutube = "//";
      let filsj = [
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/pdf",
      ];
      let filsk = filsj[Math.floor(Math.random() * filsj.length)];
      let groupMetadata = metadata;
      let username = `@${member.split("@")[0]}`;
      let txwel = `Halo Kak ${username}\n*Selamat Datang Di Grup*\n*${metadata.subject}\n*Semoga Betah DiGroup\n*Deskripsi : ${metadata.desc}`;
      if (room.action == "add") {
        abot.sendMessage(room.id, {
          caption: txwel,
          location: { jpegThumbnail: await reSize(pic, 250, 250) },
          buttons: butwel,
          footer: nyoutube,
          mentions: [member],
        });
      } else if (room.action == "remove") {
        let txlev = `Selamat Tinggal Kak @${
          member.split("@")[0]
        }\n*Semoga Tenang Di Alam Sana*\n*Balik Lagi Gua Sumpahin Mandul Lu*\n_~Admin_`;
        abot.sendMessage(room.id, {
          caption: txlev,
          location: { jpegThumbnail: await reSize(pic, 250, 250) },
          buttons: butleav,
          footer: nyoutube,
          mentions: [member],
        });
      }
    } catch (err) {
      console.log(err);
    }
  });

  abot.sendContact = async (jid, kon, quoted = "", opts = {}) => {
    let list = [];
    for (let i of kon) {
      list.push({
        displayName: await abot.getName(i + "@s.whatsapp.net"),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await abot.getName(
          i + "@s.whatsapp.net"
        )}\nFN:${await abot.getName(
          i + "@s.whatsapp.net"
        )}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:${email}\nitem2.X-ABLabel:Email\nitem3.URL:${myyt}\nitem3.X-ABLabel:YouTube\nitem4.ADR:;;${region};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`,
      });
    }
    abot.sendMessage(
      jid,
      {
        contacts: { displayName: `${list.length} Kontak`, contacts: list },
        ...opts,
      },
      { quoted }
    );
  };

  abot.setStatus = (status) => {
    abot.query({
      tag: "iq",
      attrs: {
        to: "@s.whatsapp.net",
        type: "set",
        xmlns: "status",
      },
      content: [
        {
          tag: "status",
          attrs: {},
          content: Buffer.from(status, "utf-8"),
        },
      ],
    });
    return status;
  };

  abot.public = true;

  abot.serializeM = (m) => smsg(abot, m, store);

  abot.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "close") {
      lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut
        ? startabot()
        : "";
    } else if (connection === "open") {
      abot.sendMessage("6282213150715@s.whatsapp.net", {
        text: `${JSON.stringify(update, undefined, 2)}`,
      });
    }
    console.log(update);
  });

  abot.send5ButGif = async (
    jid,
    text = "",
    footer = "",
    but = [],
    options = {}
  ) => {
    let message = await prepareWAMessageMedia(
      { video: thumb, gifPlayback: true },
      { upload: abot.waUploadToServer }
    );
    const template = generateWAMessageFromContent(
      m.chat,
      proto.Message.fromObject({
        templateMessage: {
          hydratedTemplate: {
            videoMessage: message.videoMessage,
            hydratedContentText: text,
            hydratedFooterText: footer,
            hydratedButtons: but,
          },
        },
      }),
      options
    );
    abot.relayMessage(jid, template.message, { messageId: template.key.id });
  };

  abot.send5ButImg = async (
    jid,
    text = "",
    footer = "",
    img,
    but = [],
    options = {}
  ) => {
    let message = await prepareWAMessageMedia(
      { image: img },
      { upload: abot.waUploadToServer }
    );
    var template = generateWAMessageFromContent(
      m.chat,
      proto.Message.fromObject({
        templateMessage: {
          hydratedTemplate: {
            imageMessage: message.imageMessage,
            hydratedContentText: text,
            hydratedFooterText: footer,
            hydratedButtons: but,
          },
        },
      }),
      options
    );
    abot.relayMessage(jid, template.message, { messageId: template.key.id });
  };

  abot.send5ButVid = async (
    jid,
    text = "",
    footer = "",
    vid,
    but = [],
    options = {}
  ) => {
    let message = await prepareWAMessageMedia(
      { video: vid },
      { upload: abot.waUploadToServer }
    );
    var template = generateWAMessageFromContent(
      m.chat,
      proto.Message.fromObject({
        templateMessage: {
          hydratedTemplate: {
            videoMessage: message.videoMessage,
            hydratedContentText: text,
            hydratedFooterText: footer,
            hydratedButtons: but,
          },
        },
      }),
      options
    );
    abot.relayMessage(jid, template.message, { messageId: template.key.id });
  };

  abot.send5ButLoc = async (
    jid,
    text = "",
    footer = "",
    img,
    but = [],
    options = {}
  ) => {
    var template = generateWAMessageFromContent(
      m.chat,
      proto.Message.fromObject({
        templateMessage: {
          hydratedTemplate: {
            hydratedContentText: text,
            locationMessage: {
              jpegThumbnail: img,
            },
            hydratedFooterText: footer,
            hydratedButtons: but,
          },
        },
      }),
      options
    );
    abot.relayMessage(jid, template.message, { messageId: template.key.id });
  };

  abot.parseMention = (text = "") => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
      (v) => v[1] + "@s.whatsapp.net"
    );
  };

  abot.sendText = (jid, text, quoted = "", options) =>
    abot.sendMessage(jid, { text: text, ...options }, { quoted });

  abot.sendImage = async (jid, path, caption = "", quoted = "", options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.?\/.?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await abot.sendMessage(
      jid,
      { image: buffer, caption: caption, ...options },
      { quoted }
    );
  };

  abot.sendVideo = async (
    jid,
    path,
    caption = "",
    quoted = "",
    gif = false,
    options
  ) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.?\/.?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await abot.sendMessage(
      jid,
      { video: buffer, caption: caption, gifPlayback: gif, ...options },
      { quoted }
    );
  };

  abot.sendAudio = async (jid, path, quoted = "", ptt = false, options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.?\/.?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await abot.sendMessage(
      jid,
      { audio: buffer, ptt: ptt, ...options },
      { quoted }
    );
  };

  abot.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
    abot.sendMessage(
      jid,
      {
        text: text,
        contextInfo: {
          mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(
            (v) => v[1] + "@s.whatsapp.net"
          ),
        },
        ...options,
      },
      { quoted }
    );

  abot.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.?\/.?;base64,/i.test(path)
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

    await abot.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };

  abot.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.?\/.?;base64,/i.test(path)
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

    await abot.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };

  abot.downloadAndSaveMediaMessage = async (
    message,
    filename,
    attachExtension = true
  ) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    trueFileName = attachExtension ? filename + "." + type.ext : filename;
    await fs.writeFileSync(trueFileName, buffer);
    return trueFileName;
  };

  abot.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    const stream = await downloadContentFromMessage(message, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    return buffer;
  };

  abot.copyNForward = async (
    jid,
    message,
    forceForward = false,
    options = {}
  ) => {
    let vtype;
    if (options.readViewOnce) {
      message.message =
        message.message &&
        message.message.ephemeralMessage &&
        message.message.ephemeralMessage.message
          ? message.message.ephemeralMessage.message
          : message.message || undefined;
      vtype = Object.keys(message.message.viewOnceMessage.message)[0];
      delete (message.message && message.message.ignore
        ? message.message.ignore
        : message.message || undefined);
      delete message.message.viewOnceMessage.message[vtype].viewOnce;
      message.message = {
        ...message.message.viewOnceMessage.message,
      };
    }
    let mtype = Object.keys(message.message)[0];
    let content = await generateForwardMessageContent(message, forceForward);
    let ctype = Object.keys(content)[0];
    let context = {};
    if (mtype != "conversation") context = message.message[mtype].contextInfo;
    content[ctype].contextInfo = {
      ...context,
      ...content[ctype].contextInfo,
    };
    const waMessage = await generateWAMessageFromContent(
      jid,
      content,
      options
        ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo
              ? {
                  contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo,
                  },
                }
              : {}),
          }
        : {}
    );
    await abot.relayMessage(jid, waMessage.message, {
      messageId: waMessage.key.id,
    });
    return waMessage;
  };

  abot.cMod = (jid, copy, text = "", sender = abot.user.id, options = {}) => {
    let mtype = Object.keys(copy.message)[0];
    let isEphemeral = mtype === "ephemeralMessage";
    if (isEphemeral) {
      mtype = Object.keys(copy.message.ephemeralMessage.message)[0];
    }
    let msg = isEphemeral
      ? copy.message.ephemeralMessage.message
      : copy.message;
    let content = msg[mtype];
    if (typeof content === "string") msg[mtype] = text || content;
    else if (content.caption) content.caption = text || content.caption;
    else if (content.text) content.text = text || content.text;
    if (typeof content !== "string")
      msg[mtype] = {
        ...content,
        ...options,
      };
    if (copy.key.participant)
      sender = copy.key.participant = sender || copy.key.participant;
    else if (copy.key.participant)
      sender = copy.key.participant = sender || copy.key.participant;
    if (copy.key.remoteJid.includes("@s.whatsapp.net"))
      sender = sender || copy.key.remoteJid;
    else if (copy.key.remoteJid.includes("@broadcast"))
      sender = sender || copy.key.remoteJid;
    copy.key.remoteJid = jid;
    copy.key.fromMe = sender === abot.user.id;
    return proto.WebMessageInfo.fromObject(copy);
  };

  abot.getFile = async (PATH, save) => {
    let res;
    let data = Buffer.isBuffer(PATH)
      ? PATH
      : /^data:.?\/.?;base64,/i.test(PATH)
      ? Buffer.from(PATH.split`,`[1], "base64")
      : /^https?:\/\//.test(PATH)
      ? await (res = await getBuffer(PATH))
      : fs.existsSync(PATH)
      ? ((filename = PATH), fs.readFileSync(PATH))
      : typeof PATH === "string"
      ? PATH
      : Buffer.alloc(0);
    let type = (await FileType.fromBuffer(data)) || {
      mime: "application/octet-stream",
      ext: ".bin",
    };
    filename = path.join(
      __filename,
      "./src/" + new Date() * 1 + "." + type.ext
    );
    if (data && save) fs.promises.writeFile(filename, data);
    return {
      res,
      filename,
      size: await getSizeMedia(data),
      ...type,
      data,
    };
  };
  return abot;
}

startabot();

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`));
  delete require.cache[file];
  require(file);
});
