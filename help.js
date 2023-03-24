var monoSpace = "```";

exports.listmenu = (
  sender,
  namenya,
  premnya,
  limitnya,
  usernya,
  romnya,
  tanggal,
  jam,
  no
) => {
  return `
 𝗨𝗦𝗘𝗥 𝗜𝗡𝗙𝗢
 ● ID : @${sender.split("@")[0]}
 ● Nama : ${namenya}
 ● Premium : ${premnya}
 ● Limit : ${limitnya}

 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
 ● Library : Baileys-MD
 ● Time : ${jam} WIB
 ● Date : ${tanggal}
 ● Terdaftar : ${usernya}
 ● Room Chat : ${romnya}
 `;
};

exports.rulesBot = () => {
  return `*──「 RULES-BOT 」──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengejek bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah paham rulesnya
Ketik *#menu* untuk memulai bot`;
};

exports.donasiBot = (cekName, ucapanWaktu) => {
  return `──「 *MENU DONATE* 」──

Hi *${cekName}* ${ucapanWaktu} 👋🏻

*Payment Ovo*
Number: 08126915328
A/N: AHLUL MUKHRAMIN

*Payment Dana*
Number: 08126915328
A/N: AHLUL MUKHRAMIN

${monoSpace}Terimakasih untuk kamu yang sudah donasi untuk perkembangan bot ini ^_^${monoSpace}

──「 *THX FOR YOU* 」──`;
};

exports.infoOwner = () => {
  return `──「 *INFO OWNER* 」──

 *Data Profil*
 • *Nama:* Ahlul Mukhramin
 • *Umur:* 21 tahun
 • *Hoby:* Ngoding
 • *Askot:* Aceh

 *Sosial Media*
 • *Whatsapp:* 08126915328
 • *Youtube:* Ahmuq
 • *Github:* ahlulmukh
 `;
};

exports.allmenu = (prefix, ad) => {
  return `
┌──⭓ *MAIN MENU*
│
│⭔ ${prefix}menu
│⭔ ${prefix}iklan
│⭔ ${prefix}rules
│⭔ ${prefix}owner
│⭔ ${prefix}script
│⭔ ${prefix}infobot
│⭔ ${prefix}donasi
│⭔ ${prefix}donate
│⭔ ${prefix}jadibot
│⭔ ${prefix}listjadibot
│⭔ ${prefix}sewabot
│⭔ ${prefix}groupbot
│⭔ ${prefix}ownerinfo
│⭔ ${prefix}infoowner
│
└───────⭓

┌──⭓ *ChatGPT OpenAI*
│
│⭔ ${prefix}ai teksnya
│⭔ ${prefix}ai-img teksnya
│
└───────⭓

┌──⭓ *USER MENU*
│
│⭔ ${prefix}verify
│⭔ ${prefix}report
│⭔ ${prefix}request
│⭔ ${prefix}menfess
│⭔ ${prefix}buatroom
│⭔ ${prefix}secretchat
│⭔ ${prefix}cekprem
│⭔ ${prefix}daftarprem
│⭔ ${prefix}changename
│
└───────⭓

┌──⭓ *OWNER MENU*
│
│⭔ ${prefix}error
│⭔ ${prefix}clearerr
│⭔ ${prefix}hapusticker
│⭔ ${prefix}listgc
│⭔ ${prefix}listpc  
│⭔ ${prefix}siaran
│⭔ ${prefix}session
│⭔ ${prefix}resetdb
│⭔ ${prefix}runtime
│⭔ ${prefix}setexif
│⭔ ${prefix}setwm
│⭔ ${prefix}setfooter
│⭔ ${prefix}setppbot
│⭔ ${prefix}addprem
│⭔ ${prefix}delprem
│⭔ ${prefix}bc
│⭔ ${prefix}bctext
│⭔ ${prefix}bcvideo
│⭔ ${prefix}bcaudio
│⭔ ${prefix}bcimage
│⭔ ${prefix}broadcast
│
└───────⭓

┌──⭓ *STORE MENU*
│
│⭔ ${prefix}kali 1 2
│⭔ ${prefix}bagi 1 2
│⭔ ${prefix}kurang 1 2
│⭔ ${prefix}tambah 1 2
│⭔ ${prefix}dellist key
│⭔ ${prefix}addlist key@response
│⭔ ${prefix}update key@response
│⭔ ${prefix}done <reply orderan>
│⭔ ${prefix}proses <reply orderan>
│⭔ ${prefix}list <only group>
│⭔ ${prefix}shop <only group>
│
└───────⭓

┌──⭓ *GROUP MENU*
│
│⭔ ${prefix}delete
│⭔ ${prefix}revoke
│⭔ ${prefix}tagall
│⭔ ${prefix}hidetag
│⭔ ${prefix}setdesc
│⭔ ${prefix}linkgrup
│⭔ ${prefix}infogroup
│⭔ ${prefix}setppgrup
│⭔ ${prefix}setnamegrup
│⭔ ${prefix}group open
│⭔ ${prefix}group close
│⭔ ${prefix}antilink on
│⭔ ${prefix}antilink off
│⭔ ${prefix}welcome on
│⭔ ${prefix}welcome off
│⭔ ${prefix}tiktokauto on
│⭔ ${prefix}tiktokauto off
│⭔ ${prefix}kick @tag
│⭔ ${prefix}demote @tag
│⭔ ${prefix}promote @tag
│
└───────⭓


┌──⭓ *DOWNLOADER MENU*
│
│⭔ ${prefix}tiktok
│⭔ ${prefix}ytmp3
│⭔ ${prefix}playmp3
│⭔ ${prefix}ytmp4
│⭔ ${prefix}igdl
│⭔ ${prefix}playmp4
│⭔ ${prefix}pinterest
│⭔ ${prefix}gitclone
│⭔ ${prefix}wikimedia
│⭔ ${prefix}soundcloud
│⭔ ${prefix}google
│⭔ ${prefix}infogempa
│
└───────⭓

┌──⭓ *BUG VIP*
│
│⭔ ${prefix}sendbug 628xxx
│⭔ ${prefix}philips 628xxx
│⭔ ${prefix}philips2 628xxx
│⭔ ${prefix}philips3 628xxx
│⭔ ${prefix}santet @tag
│⭔ ${prefix}santet2 @tag
│⭔ ${prefix}santet3 @tag
│⭔ ${prefix}virtex 628xxx
│⭔ ${prefix}virtex2 628xxx
│⭔ ${prefix}virtex3 628xxx
│⭔ ${prefix}bug1 628xxx
│⭔ ${prefix}bug2 628xxx
│⭔ ${prefix}bug3 628xxx
│⭔ ${prefix}bug4 628xxx
│⭔ ${prefix}bug5 628xxx
│
└───────⭓
  
┌──⭓ *CONVERT MENU*
│
│⭔ ${prefix}tts
│⭔ ${prefix}ttp
│⭔ ${prefix}ttp2
│⭔ ${prefix}attp
│⭔ ${prefix}attp2
│⭔ ${prefix}tourl
│⭔ ${prefix}upload
│⭔ ${prefix}toimg
│⭔ ${prefix}toimage
│⭔ ${prefix}tomp3
│⭔ ${prefix}toaudio
│⭔ ${prefix}tomp4
│⭔ ${prefix}tovideo
│⭔ ${prefix}emojimix
│⭔ ${prefix}emojmix
│⭔ ${prefix}emojinua
│⭔ ${prefix}mixemoji
│⭔ ${prefix}stiker
│⭔ ${prefix}sticker
│⭔ ${prefix}sgif
│⭔ ${prefix}stikergif
│⭔ ${prefix}stickergif
│⭔ ${prefix}swm
│⭔ ${prefix}stikerwm
│⭔ ${prefix}stickerwm
│⭔ ${prefix}smeme
│⭔ ${prefix}memestiker
│⭔ ${prefix}stikermeme
│⭔ ${prefix}stickermeme
│⭔ ${prefix}takesticker
│⭔ ${prefix}emojinua2
│⭔ ${prefix}mixemoji2
│⭔ ${prefix}emojmix2
│⭔ ${prefix}emojimix2
│
└───────⭓


┌──⭓ *LOGO MAKER*
│
│⭔ ${prefix}digital
│⭔ ${prefix}quoteser
│⭔ ${prefix}quobucin
│
└───────⭓
 
┌──⭓ *ANONYMOUS MENU*
│
│⭔ ${prefix}buatroom 628xxx
│⭔ ${prefix}room <only owner>
│⭔ ${prefix}stopchat <only room>
│⭔ ${prefix}menfess 628xx|bot|hai
│
└───────⭓
  

┌──⭓ *RANDOM MENU*
│
│⭔ ${prefix}cecan
│⭔ ${prefix}cogan
│⭔ ${prefix}mobil
│⭔ ${prefix}islamic
│⭔ ${prefix}darkjokes
│⭔ ${prefix}boneka
│⭔ ${prefix}wallhp
│⭔ ${prefix}tatasurya
│⭔ ${prefix}programing
│
└───────⭓
 
┌──⭓ *PRIMBON MENU*
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}tafsirmimpi
│⭔ ${prefix}pasangan
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}ramalancinta
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}ramalanjodohbali
│⭔ ${prefix}cocoknama
│⭔ ${prefix}kecocokannama
│⭔ ${prefix}cocokpasangan
│⭔ ${prefix}kecocokanpasangan
│
└───────⭓
 
┌──⭓ *ASUPAN GACHA*
│
│⭔ ${prefix}rika
│⭔ ${prefix}bocil
│⭔ ${prefix}ukhty
│⭔ ${prefix}santuy
│
└───────⭓


┌──⭓ *INFORMATION MENU*
│
│⭔ ${prefix}gempa
│⭔ ${prefix}jadwaltv
│⭔ ${prefix}gempanow
│⭔ ${prefix}bioskopnow
│⭔ ${prefix}latintoaksara
│⭔ ${prefix}aksaratolatin
│
└───────⭓


┌──⭓ *FUN MENU*
│ 
│⭔ ${prefix}goblokcek 
│⭔ ${prefix}jelekcek 
│⭔ ${prefix}gaycek
│⭔ ${prefix}lesbicek
│⭔ ${prefix}gantengcek 
│⭔ ${prefix}cantikcek
│⭔ ${prefix}begocek 
│⭔ ${prefix}suhucek
│⭔ ${prefix}pintercek
│⭔ ${prefix}jagocek
│⭔ ${prefix}nolepcek
│⭔ ${prefix}babicek
│⭔ ${prefix}bebancek
│⭔ ${prefix}baikcek
│⭔ ${prefix}jahatcek
│⭔ ${prefix}anjingcek
│⭔ ${prefix}haramcek
│⭔ ${prefix}pakboycek
│⭔ ${prefix}pakgirlcek
│⭔ ${prefix}sangecek 
│⭔ ${prefix}bapercek
│⭔ ${prefix}fakboycek
│⭔ ${prefix}alimcek
│⭔ ${prefix}suhucek
│⭔ ${prefix}fakgirlcek
│⭔ ${prefix}kerencek
│⭔ ${prefix}wibucek
│
└───────⭓
 
┌──⭓ *WALLPAPER MENU*
│ 
│⭔ ${prefix}milf
│⭔ ${prefix}loli
│⭔ ${prefix}wallml
│⭔ ${prefix}husbu
│⭔ ${prefix}cosplay
│⭔ ${prefix}ppcouple
│⭔ ${prefix}wallpaperislami
│⭔ ${prefix}wallpaperinori
│⭔ ${prefix}wallpaperanime
│⭔ ${prefix}wallpapergamer
│⭔ ${prefix}wallpapermeme
│⭔ ${prefix}wallpaperprogamer
│⭔ ${prefix}wallpaperteknologi
│⭔ ${prefix}wallpapercyber
│
└───────⭓
 
┌──⭓ *ANIME MENU*
│  
│⭔ ${prefix}cry
│⭔ ${prefix}hug
│⭔ ${prefix}pat
│⭔ ${prefix}bully
│⭔ ${prefix}lick
│⭔ ${prefix}kiss
│⭔ ${prefix}awoo
│⭔ ${prefix}waifu
│⭔ ${prefix}shinobu
│⭔ ${prefix}cuddle
│⭔ ${prefix}megumin
│⭔ ${prefix}slap
│⭔ ${prefix}neko
│⭔ ${prefix}wink
│⭔ ${prefix}dance
│⭔ ${prefix}poke
│⭔ ${prefix}glomp
│⭔ ${prefix}bite
│⭔ ${prefix}nom
│⭔ ${prefix}handhold
│⭔ ${prefix}highfive
│⭔ ${prefix}wave
│⭔ ${prefix}smug
│⭔ ${prefix}smile
│⭔ ${prefix}bonk
│
└───────⭓
 
┌──⭓ *CERPEN MENU*
│  
│⭔ ${prefix}cerpen-sejarah
│⭔ ${prefix}cerpen-sedih
│⭔ ${prefix}cerpen-sastra
│⭔ ${prefix}cerpen-romantis
│⭔ ${prefix}cerpen-rohani
│⭔ ${prefix}cerpen-rindu
│⭔ ${prefix}cerpen-remaja
│⭔ ${prefix}cerpen-ramadhan
│⭔ ${prefix}cerpen-petualangan
│⭔ ${prefix}cerpen-persahabatan
│⭔ ${prefix}cerpen-perpisahan
│⭔ ${prefix}cerpen-perjuangan
│⭔ ${prefix}cerpen-penyesalan
│⭔ ${prefix}cerpen-pengorbanan
│⭔ ${prefix}cerpen-pengalaman
│⭔ ${prefix}cerpen-pendidikan
│⭔ ${prefix}cerpen-penantian
│⭔ ${prefix}cerpen-patahhati
│⭔ ${prefix}cerpen-olahraga
│⭔ ${prefix}cerpen-nasionalisme
│⭔ ${prefix}cerpen-nasihat
│⭔ ${prefix}cerpen-motivasi
│⭔ ${prefix}cerpen-misteri
│⭔ ${prefix}cerpen-mengharukan
│⭔ ${prefix}cerpen-malaysia
│⭔ ${prefix}cerpen-liburan
│⭔ ${prefix}cerpen-kristen
│⭔ ${prefix}cerpen-korea
│⭔ ${prefix}cerpen-kisahnyata
│⭔ ${prefix}cerpen-keluarga
│⭔ ${prefix}cerpen-kehidupan
│⭔ ${prefix}cerpen-jepang
│⭔ ${prefix}cerpen-inspiratif
│⭔ ${prefix}cerpen-gokil
│⭔ ${prefix}cerpen-galau
│⭔ ${prefix}cerpen-cintasejati
│⭔ ${prefix}cerpen-cintasegitiga
│⭔ ${prefix}cerpen-cintasedih
│⭔ ${prefix}cerpen-cintaromantis
│⭔ ${prefix}cerpen-cintapertama
│⭔ ${prefix}cerpen-cintaislami
│⭔ ${prefix}cerpen-cinta
│⭔ ${prefix}cerpen-budaya
│⭔ ${prefix}cerpen-bahasasunda
│⭔ ${prefix}cerpen-bahasajawa
│⭔ ${prefix}cerpen-bahasainggris
│⭔ ${prefix}cerpen-bahasadaerah
│⭔ ${prefix}cerpen-anak
│
└───────⭓


┌──⭓ *TEXT PRO MENU*
│ 
│⭔ ${prefix}metallic text
│⭔ ${prefix}naruto text
│⭔ ${prefix}butterfly text
│⭔ ${prefix}flaming text
│
└───────⭓`;
};

exports.mainmenu = (prefix, ad) => {
  return `
┌──⭓ *MAIN MENU*
│
│⭔ ${prefix}menu
│⭔ ${prefix}iklan
│⭔ ${prefix}rules
│⭔ ${prefix}owner
│⭔ ${prefix}script
│⭔ ${prefix}infobot
│⭔ ${prefix}donasi
│⭔ ${prefix}donate
│⭔ ${prefix}jadibot
│⭔ ${prefix}listjadibot
│⭔ ${prefix}sewabot
│⭔ ${prefix}groupbot
│⭔ ${prefix}ownerinfo
│⭔ ${prefix}infoowner
│
└───────⭓`;
};
exports.usermenu = (prefix, ad) => {
  return `
┌──⭓ *USER MENU*
│
│⭔ ${prefix}verify
│⭔ ${prefix}report
│⭔ ${prefix}request
│⭔ ${prefix}menfess
│⭔ ${prefix}buatroom
│⭔ ${prefix}secretchat
│⭔ ${prefix}cekprem
│⭔ ${prefix}daftarprem
│⭔ ${prefix}changename
│
└───────⭓`;
};
exports.ownermenu = (prefix) => {
  return `
  ┌──⭓ *OWNER MENU*
│
│⭔ ${prefix}error
│⭔ ${prefix}clearerr
│⭔ ${prefix}siaran
│⭔ ${prefix}session
│⭔ ${prefix}resetdb
│⭔ ${prefix}runtime
│⭔ ${prefix}setexif
│⭔ ${prefix}setwm
│⭔ ${prefix}setfooter
│⭔ ${prefix}setppbot
│⭔ ${prefix}addprem
│⭔ ${prefix}delprem
│⭔ ${prefix}bc
│⭔ ${prefix}listgc
│⭔ ${prefix}listpc
│⭔ ${prefix}bctext
│⭔ ${prefix}bcvideo
│⭔ ${prefix}bcaudio
│⭔ ${prefix}bcimage
│⭔ ${prefix}broadcast
│
└───────⭓`;
};
exports.storemenu = (prefix, ad) => {
  return `┌──⭓ *STORE MENU*
│
│⭔ ${prefix}kali 1 2
│⭔ ${prefix}bagi 1 2
│⭔ ${prefix}kurang 1 2
│⭔ ${prefix}tambah 1 2
│⭔ ${prefix}dellist key
│⭔ ${prefix}addlist key@response
│⭔ ${prefix}update key@response
│⭔ ${prefix}done <reply orderan>
│⭔ ${prefix}proses <reply orderan>
│⭔ ${prefix}list <only group>
│⭔ ${prefix}shop <only group>
│
└───────⭓`;
};
exports.groupmenu = (prefix, ad) => {
  return `┌──⭓ *GROUP MENU*
│
│⭔ ${prefix}delete
│⭔ ${prefix}revoke
│⭔ ${prefix}tagall
│⭔ ${prefix}hidetag
│⭔ ${prefix}setdesc
│⭔ ${prefix}linkgrup
│⭔ ${prefix}infogroup
│⭔ ${prefix}setppgrup
│⭔ ${prefix}setnamegrup
│⭔ ${prefix}group open
│⭔ ${prefix}group close
│⭔ ${prefix}antilink on
│⭔ ${prefix}antilink off
│⭔ ${prefix}welcome on
│⭔ ${prefix}welcome off
│⭔ ${prefix}tiktokauto on
│⭔ ${prefix}tiktokauto off
│⭔ ${prefix}kick @tag
│⭔ ${prefix}demote @tag
│⭔ ${prefix}promote @tag
│
└───────⭓`;
};
exports.downloadermenu = (prefix, ad) => {
  return `
  ┌──⭓ *DOWNLOADER & SEARCH MENU*
  │
  │⭔ ${prefix}tiktok
  │⭔ ${prefix}ytmp3
  │⭔ ${prefix}playmp3
  │⭔ ${prefix}ytmp4
  │⭔ ${prefix}playmp4
  │⭔ ${prefix}igdl
  │⭔ ${prefix}pinterest
  │⭔ ${prefix}gitclone
  │⭔ ${prefix}wikimedia
  │⭔ ${prefix}soundcloud
  │⭔ ${prefix}google
  │
  └───────⭓`;
};
exports.bugvipmenu = (prefix, ad) => {
  return `┌──⭓ *BUG VIP*
  │
  │⭔ ${prefix}sendbug 628xxx
  │⭔ ${prefix}philips 628xxx
  │⭔ ${prefix}philips2 628xxx
  │⭔ ${prefix}philips3 628xxx
  │⭔ ${prefix}santet @tag
  │⭔ ${prefix}santet2 @tag
  │⭔ ${prefix}santet3 @tag
  │⭔ ${prefix}virtex 628xxx
  │⭔ ${prefix}virtex2 628xxx
  │⭔ ${prefix}virtex3 628xxx
  │⭔ ${prefix}bug1 628xxx
  │⭔ ${prefix}bug2 628xxx
  │⭔ ${prefix}bug3 628xxx
  │⭔ ${prefix}bug4 628xxx
  │⭔ ${prefix}bug5 628xxx
  │
  └───────⭓`;
};
exports.convertmenu = (prefix, ad) => {
  return `┌──⭓ *CONVERT MENU*
  │
  │⭔ ${prefix}tts
  │⭔ ${prefix}ttp
  │⭔ ${prefix}ttp2
  │⭔ ${prefix}attp
  │⭔ ${prefix}attp2
  │⭔ ${prefix}tourl
  │⭔ ${prefix}upload
  │⭔ ${prefix}toimg
  │⭔ ${prefix}toimage
  │⭔ ${prefix}tomp3
  │⭔ ${prefix}toaudio
  │⭔ ${prefix}tomp4
  │⭔ ${prefix}tovideo
  │⭔ ${prefix}emojimix
  │⭔ ${prefix}emojmix
  │⭔ ${prefix}emojinua
  │⭔ ${prefix}mixemoji
  │⭔ ${prefix}stiker
  │⭔ ${prefix}sticker
  │⭔ ${prefix}sgif
  │⭔ ${prefix}stikergif
  │⭔ ${prefix}stickergif
  │⭔ ${prefix}swm
  │⭔ ${prefix}stikerwm
  │⭔ ${prefix}stickerwm
  │⭔ ${prefix}smeme
  │⭔ ${prefix}memestiker
  │⭔ ${prefix}stikermeme
  │⭔ ${prefix}stickermeme
  │⭔ ${prefix}takesticker
  │⭔ ${prefix}emojinua2
  │⭔ ${prefix}mixemoji2
  │⭔ ${prefix}emojmix2
  │⭔ ${prefix}emojimix2
  │
  └───────⭓`;
};

exports.logomakermenu = (prefix, ad) => {
  return `
  ┌──⭓ *LOGO MAKER*
│
│⭔ ${prefix}digital
│⭔ ${prefix}quoteser
│⭔ ${prefix}quobucin
│
└───────⭓`;
};
exports.anonymousemenu = (prefix, ad) => {
  return `
  ┌──⭓ *ANONYMOUS MENU*
  │
  │⭔ ${prefix}buatroom 628xxx
  │⭔ ${prefix}room <only owner>
  │⭔ ${prefix}stopchat <only room>
  │⭔ ${prefix}menfess 628xx|bot|hai
  │
  └───────⭓`;
};

exports.randomenu = (prefix, ad) => {
  return `
┌──⭓ *RANDOM MENU*
│
│⭔ ${prefix}cecan
│⭔ ${prefix}cogan
│⭔ ${prefix}mobil
│⭔ ${prefix}islamic
│⭔ ${prefix}darkjokes
│⭔ ${prefix}boneka
│⭔ ${prefix}wallhp
│⭔ ${prefix}tatasurya
│⭔ ${prefix}programing
│
└───────⭓`;
};
exports.primbonmenu = (prefix, ad) => {
  return `
┌──⭓ *PRIMBON MENU*
│
│⭔ ${prefix}nomorhoki
│⭔ ${prefix}artimimpi
│⭔ ${prefix}artinama
│⭔ ${prefix}sifatusaha
│⭔ ${prefix}tafsirmimpi
│⭔ ${prefix}pasangan
│⭔ ${prefix}suamiistri
│⭔ ${prefix}ramalcinta
│⭔ ${prefix}ramalancinta
│⭔ ${prefix}ramaljodohbali
│⭔ ${prefix}ramalanjodohbali
│⭔ ${prefix}cocoknama
│⭔ ${prefix}kecocokannama
│⭔ ${prefix}cocokpasangan
│⭔ ${prefix}kecocokanpasangan
│
└───────⭓`;
};
exports.asupangachamenu = (prefix, ad) => {
  return `
  ┌──⭓ *ASUPAN GACHA*
│
│⭔ ${prefix}rika
│⭔ ${prefix}bocil
│⭔ ${prefix}ukhty
│⭔ ${prefix}santuy
│
└───────⭓`;
};
exports.informationmenu = (prefix, ad) => {
  return `┌──⭓ *INFORMATION MENU*
  │
  │⭔ ${prefix}gempa
  │⭔ ${prefix}infogempa
  │⭔ ${prefix}jadwaltv
  │⭔ ${prefix}gempanow
  │⭔ ${prefix}bioskopnow
  │⭔ ${prefix}latintoaksara
  │⭔ ${prefix}aksaratolatin
  │
  └───────⭓`;
};

exports.funmenu = (prefix, ad) => {
  return `┌──⭓ *FUN MENU*
  │ 
  │⭔ ${prefix}goblokcek 
  │⭔ ${prefix}jelekcek 
  │⭔ ${prefix}gaycek
  │⭔ ${prefix}lesbicek
  │⭔ ${prefix}gantengcek 
  │⭔ ${prefix}cantikcek
  │⭔ ${prefix}begocek 
  │⭔ ${prefix}suhucek
  │⭔ ${prefix}pintercek
  │⭔ ${prefix}jagocek
  │⭔ ${prefix}nolepcek
  │⭔ ${prefix}babicek
  │⭔ ${prefix}bebancek
  │⭔ ${prefix}baikcek
  │⭔ ${prefix}jahatcek
  │⭔ ${prefix}anjingcek
  │⭔ ${prefix}haramcek
  │⭔ ${prefix}pakboycek
  │⭔ ${prefix}pakgirlcek
  │⭔ ${prefix}sangecek 
  │⭔ ${prefix}bapercek
  │⭔ ${prefix}fakboycek
  │⭔ ${prefix}alimcek
  │⭔ ${prefix}suhucek
  │⭔ ${prefix}fakgirlcek
  │⭔ ${prefix}kerencek
  │⭔ ${prefix}wibucek
  │
  └───────⭓`;
};
exports.walpapermenu = (prefix, ad) => {
  return `┌──⭓ *WALLPAPER MENU*
│ 
│⭔ ${prefix}milf
│⭔ ${prefix}loli
│⭔ ${prefix}wallml
│⭔ ${prefix}husbu
│⭔ ${prefix}cosplay
│⭔ ${prefix}ppcouple
│⭔ ${prefix}wallpaperislami
│⭔ ${prefix}wallpaperinori
│⭔ ${prefix}wallpaperanime
│⭔ ${prefix}wallpapergamer
│⭔ ${prefix}wallpapermeme
│⭔ ${prefix}wallpaperprogamer
│⭔ ${prefix}wallpaperteknologi
│⭔ ${prefix}wallpapercyber
│
└───────⭓`;
};
exports.animemenu = (prefix, ad) => {
  return `┌──⭓ *ANIME MENU*
│  
│⭔ ${prefix}cry
│⭔ ${prefix}hug
│⭔ ${prefix}pat
│⭔ ${prefix}bully
│⭔ ${prefix}lick
│⭔ ${prefix}kiss
│⭔ ${prefix}awoo
│⭔ ${prefix}waifu
│⭔ ${prefix}shinobu
│⭔ ${prefix}cuddle
│⭔ ${prefix}megumin
│⭔ ${prefix}slap
│⭔ ${prefix}neko
│⭔ ${prefix}wink
│⭔ ${prefix}dance
│⭔ ${prefix}poke
│⭔ ${prefix}glomp
│⭔ ${prefix}bite
│⭔ ${prefix}nom
│⭔ ${prefix}handhold
│⭔ ${prefix}highfive
│⭔ ${prefix}wave
│⭔ ${prefix}smug
│⭔ ${prefix}smile
│⭔ ${prefix}bonk
│
└───────⭓`;
};
exports.cerpenmenu = (prefix, ad) => {
  return `┌──⭓ *CERPEN MENU*
  │  
  │⭔ ${prefix}cerpen-sejarah
  │⭔ ${prefix}cerpen-sedih
  │⭔ ${prefix}cerpen-sastra
  │⭔ ${prefix}cerpen-romantis
  │⭔ ${prefix}cerpen-rohani
  │⭔ ${prefix}cerpen-rindu
  │⭔ ${prefix}cerpen-remaja
  │⭔ ${prefix}cerpen-ramadhan
  │⭔ ${prefix}cerpen-petualangan
  │⭔ ${prefix}cerpen-persahabatan
  │⭔ ${prefix}cerpen-perpisahan
  │⭔ ${prefix}cerpen-perjuangan
  │⭔ ${prefix}cerpen-penyesalan
  │⭔ ${prefix}cerpen-pengorbanan
  │⭔ ${prefix}cerpen-pengalaman
  │⭔ ${prefix}cerpen-pendidikan
  │⭔ ${prefix}cerpen-penantian
  │⭔ ${prefix}cerpen-patahhati
  │⭔ ${prefix}cerpen-olahraga
  │⭔ ${prefix}cerpen-nasionalisme
  │⭔ ${prefix}cerpen-nasihat
  │⭔ ${prefix}cerpen-motivasi
  │⭔ ${prefix}cerpen-misteri
  │⭔ ${prefix}cerpen-mengharukan
  │⭔ ${prefix}cerpen-malaysia
  │⭔ ${prefix}cerpen-liburan
  │⭔ ${prefix}cerpen-kristen
  │⭔ ${prefix}cerpen-korea
  │⭔ ${prefix}cerpen-kisahnyata
  │⭔ ${prefix}cerpen-keluarga
  │⭔ ${prefix}cerpen-kehidupan
  │⭔ ${prefix}cerpen-jepang
  │⭔ ${prefix}cerpen-inspiratif
  │⭔ ${prefix}cerpen-gokil
  │⭔ ${prefix}cerpen-galau
  │⭔ ${prefix}cerpen-cintasejati
  │⭔ ${prefix}cerpen-cintasegitiga
  │⭔ ${prefix}cerpen-cintasedih
  │⭔ ${prefix}cerpen-cintaromantis
  │⭔ ${prefix}cerpen-cintapertama
  │⭔ ${prefix}cerpen-cintaislami
  │⭔ ${prefix}cerpen-cinta
  │⭔ ${prefix}cerpen-budaya
  │⭔ ${prefix}cerpen-bahasasunda
  │⭔ ${prefix}cerpen-bahasajawa
  │⭔ ${prefix}cerpen-bahasainggris
  │⭔ ${prefix}cerpen-bahasadaerah
  │⭔ ${prefix}cerpen-anak
  │
  └───────⭓`;
};
exports.textpromenu = (prefix, ad) => {
  return `┌──⭓ *TEXT PRO MENU*
  │ 
  │⭔ ${prefix}metallic text
  │⭔ ${prefix}naruto text
  │⭔ ${prefix}butterfly text
  │⭔ ${prefix}flaming text
  │
  └───────⭓`;
};
exports.chatgpt = (prefix, ad) => {
  return `
  ┌──⭓ *ChatGPT OpenAI*
  │
  │⭔ ${prefix}ai teksnya
  │
  └───────⭓`;
};
