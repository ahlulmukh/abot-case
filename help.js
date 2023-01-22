// disini atur aja kak menu bot nya
// jangan lupa hapus fitur yg ga penting

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
│⭔ ${prefix}fitnah
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

┌──⭓ *AUTODECT MENU*
│
│⭔ ${prefix}sadcat
│⭔ ${prefix}translate
│⭔ ${prefix}stalkff
│⭔ ${prefix}stalknpm
│⭔ ${prefix}stalkgithub
│⭔ ${prefix}balikhuruf
│⭔ ${prefix}balikangka
│⭔ ${prefix}besarkecil
│⭔ ${prefix}bilangangka
│
└───────⭓


┌──⭓ *DOWNLOADER MENU*
│
│⭔ ${prefix}tiktok
│⭔ ${prefix}ytmp3
│⭔ ${prefix}ytmp4
│⭔ ${prefix}pinterest
│⭔ ${prefix}playmp3
│⭔ ${prefix}playmp4
│⭔ ${prefix}gitclone
│⭔ ${prefix}mediafire
│⭔ ${prefix}wikimedia
│⭔ ${prefix}soundcloud
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
 
┌──⭓ *TOLLS MENU*
│
│⭔ ${prefix}spamcall
│⭔ ${prefix}translate
│⭔ ${prefix}ssweb-pc
│⭔ ${prefix}ssweb-hp
│⭔ ${prefix}bitly_short
│⭔ ${prefix}cuttly_short
│⭔ ${prefix}tinyurl_short
│⭔ ${prefix}base32
│⭔ ${prefix}base64
│⭔ ${prefix}debase32
│⭔ ${prefix}debase64
│
└───────⭓
  
┌──⭓ *RANDOM CEK*
│
│⭔ ${prefix}cekjelek
│⭔ ${prefix}cekcantik
│⭔ ${prefix}cekganteng
│⭔ ${prefix}ceksad
│⭔ ${prefix}cekharam
│⭔ ${prefix}cekhalal
│⭔ ${prefix}cekbego
│⭔ ${prefix}cekanjing
│⭔ ${prefix}cekbiadab
│⭔ ${prefix}cekramah
│⭔ ${prefix}ceksatir
│⭔ ${prefix}cekmanis
│⭔ ${prefix}cekpahit
│⭔ ${prefix}cekhitam
│⭔ ${prefix}cekrasis
│⭔ ${prefix}cekbaik
│⭔ ${prefix}cekjahat
│⭔ ${prefix}cekkaya
│⭔ ${prefix}cekmiskin
│⭔ ${prefix}cekpintar
│⭔ ${prefix}cekbodoh
│⭔ ${prefix}cekimut
│⭔ ${prefix}cekkocak
│⭔ ${prefix}cekkadang
│
└───────⭓


┌──⭓ *SERTIFIKAT MENU*
│
│⭔ ${prefix}toloserti <nama>
│⭔ ${prefix}badgirlserti <nama>
│⭔ ${prefix}goodgirlserti <nama>
│⭔ ${prefix}fuckgirlserti <nama>
│⭔ ${prefix}bucinserti <nama>
│
└───────⭓
  
┌──⭓ *LOGO MAKER*
│
│⭔ ${prefix}joker
│⭔ ${prefix}digital
│⭔ ${prefix}nulis
│⭔ ${prefix}nulis2
│⭔ ${prefix}quoteser
│⭔ ${prefix}quobucin
│⭔ ${prefix}rem
│⭔ ${prefix}girlneko
│⭔ ${prefix}sadboy
│⭔ ${prefix}kaneki
│⭔ ${prefix}lolimaker
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
 
┌──⭓ *SOSMED SHOP*
│
│⭔ ${prefix}pricelist <layanan>
│⭔ ${prefix}order <cara order>
│⭔ ${prefix}like jumlah|target
│⭔ ${prefix}view jumlah|target
│⭔ ${prefix}follower jumlah|username
│⭔ ${prefix}cekstatus <idtrx>
│⭔ ${prefix}komisi <owner only>
│⭔ ${prefix}tarikkomisi <owner only>
│
└───────⭓
  
┌──⭓ *VOKAL MENU*
│
│⭔ ${prefix}hilih <text>
│⭔ ${prefix}halah <text>
│⭔ ${prefix}huluh <text>
│⭔ ${prefix}heleh <text>
│⭔ ${prefix}holoh <text>
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
│⭔ ${prefix}ramaljodoh
│⭔ ${prefix}ramalanjodoh
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
│⭔ ${prefix}hijaber
│
└───────⭓
 
┌──⭓ *AUDIO CHANGER*
│
│⭔ ${prefix}fat
│⭔ ${prefix}fast
│⭔ ${prefix}slow
│⭔ ${prefix}bass
│⭔ ${prefix}deep
│⭔ ${prefix}tupai
│⭔ ${prefix}robot
│⭔ ${prefix}blown
│⭔ ${prefix}smooth
│⭔ ${prefix}earrape
│⭔ ${prefix}reverse
│⭔ ${prefix}nightcore
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
 
┌──⭓ *RANDOM STICKER*
│
│⭔ ${prefix}dadu
│⭔ ${prefix}anjing
│⭔ ${prefix}patrick
│⭔ ${prefix}bucinstick
│⭔ ${prefix}gawrgura
│⭔ ${prefix}amongus
│
└───────⭓
 
┌──⭓ *AUDIO MENU*
│
│⭔ ${prefix}audio${ad++}
│⭔ ${prefix}audio${ad++}
│⭔ ${prefix}audio${ad++}
│⭔ ${prefix}audio${ad++}
│⭔ ${prefix}audio${ad++}
│⭔ ${prefix}audio${ad++}
│⭔ ${prefix}audio${ad++}
│⭔ ${prefix}audio${ad++}
│⭔ ${prefix}audio${ad++}
│⭔ ${prefix}audio${ad++}
│⭔ ${prefix}audio${ad++}
│⭔ ${prefix}audio${ad++}
│⭔ ${prefix}audio${ad++}
│⭔ ${prefix}audio${ad++}
│⭔ ${prefix}audio${ad++}
│⭔ ${prefix}audio${ad++}
│⭔ ${prefix}audio${ad++}
│⭔ ${prefix}audio${ad++}
│⭔ ${prefix}audio${ad++}
│⭔ ${prefix}audio${ad++}
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
│⭔ ${prefix}waifu
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
 
┌──⭓ *NFSW MENU*
│   
│⭔ ${prefix}yuri
│⭔ ${prefix}ero
│⭔ ${prefix}foot
│⭔ ${prefix}ass
│⭔ ${prefix}cuckold
│⭔ ${prefix}cum
│⭔ ${prefix}hentai
│⭔ ${prefix}gangbang
│⭔ ${prefix}femdom
│⭔ ${prefix}ahegao
│⭔ ${prefix}glasses
│⭔ ${prefix}jahy
│⭔ ${prefix}orgy
│⭔ ${prefix}pussy
│⭔ ${prefix}thighs
│⭔ ${prefix}panties
│⭔ ${prefix}thighs
│⭔ ${prefix}masturbation
│⭔ ${prefix}chiisaihentai
│⭔ ${prefix}trap
│⭔ ${prefix}blowjob
│⭔ ${prefix}yaoi
│⭔ ${prefix}ecchi
│⭔ ${prefix}hentai
│⭔ ${prefix}ahegao
│⭔ ${prefix}hololewd
│⭔ ${prefix}sideoppai
│⭔ ${prefix}animefeets
│⭔ ${prefix}animebooty
│⭔ ${prefix}animethighss
│⭔ ${prefix}hentaiparadise
│⭔ ${prefix}animearmpits
│⭔ ${prefix}hentaifemdom
│⭔ ${prefix}lewdanimegirls
│⭔ ${prefix}biganimetiddies
│⭔ ${prefix}animebellybutton
│⭔ ${prefix}hentai4everyone
│
└───────⭓
 
┌──⭓ *SOUND MENU*
│   
│⭔ ${prefix}sound1
│⭔ ${prefix}sound2
│⭔ ${prefix}sound3
│⭔ ${prefix}sound4
│⭔ ${prefix}sound5
│⭔ ${prefix}sound6
│⭔ ${prefix}sound7
│⭔ ${prefix}sound8
│⭔ ${prefix}sound9
│⭔ ${prefix}sound10
│⭔ ${prefix}sound11
│⭔ ${prefix}sound12
│⭔ ${prefix}sound13
│⭔ ${prefix}sound14
│⭔ ${prefix}sound15
│⭔ ${prefix}sound16
│⭔ ${prefix}sound17
│⭔ ${prefix}sound18
│⭔ ${prefix}sound19
│⭔ ${prefix}sound20
│⭔ ${prefix}sound21
│⭔ ${prefix}sound22
│⭔ ${prefix}sound23
│⭔ ${prefix}sound24
│⭔ ${prefix}sound25
│⭔ ${prefix}sound26
│⭔ ${prefix}sound27
│⭔ ${prefix}sound28
│⭔ ${prefix}sound29
│⭔ ${prefix}sound30
│⭔ ${prefix}sound31
│⭔ ${prefix}sound32
│⭔ ${prefix}sound33
│⭔ ${prefix}sound34
│⭔ ${prefix}sound35
│⭔ ${prefix}sound36
│⭔ ${prefix}sound37
│⭔ ${prefix}sound38
│⭔ ${prefix}sound39
│⭔ ${prefix}sound40
│⭔ ${prefix}sound41
│⭔ ${prefix}sound42
│⭔ ${prefix}sound43
│⭔ ${prefix}sound44
│⭔ ${prefix}sound45
│⭔ ${prefix}sound46
│⭔ ${prefix}sound47
│⭔ ${prefix}sound48
│⭔ ${prefix}sound49
│⭔ ${prefix}sound50
│⭔ ${prefix}sound51
│⭔ ${prefix}sound52
│⭔ ${prefix}sound53
│⭔ ${prefix}sound54
│⭔ ${prefix}sound55
│⭔ ${prefix}sound56
│⭔ ${prefix}sound57
│⭔ ${prefix}sound58
│⭔ ${prefix}sound59
│⭔ ${prefix}sound60
│⭔ ${prefix}sound61
│⭔ ${prefix}sound62
│⭔ ${prefix}sound63
│⭔ ${prefix}sound64
│⭔ ${prefix}sound65
│⭔ ${prefix}sound66
│⭔ ${prefix}sound67
│⭔ ${prefix}sound68
│⭔ ${prefix}sound69
│⭔ ${prefix}sound70
│⭔ ${prefix}sound71
│⭔ ${prefix}sound72
│⭔ ${prefix}sound73
│⭔ ${prefix}sound74
│
└───────⭓
 
┌──⭓ *TEXT PRO MENU*
│ 
│⭔ ${prefix}metallic text
│⭔ ${prefix}naruto text
│⭔ ${prefix}butterfly text
│⭔ ${prefix}flaming text
│⭔ ${prefix}shadow text
│⭔ ${prefix}cup text
│⭔ ${prefix}cup1 text
│⭔ ${prefix}romance text
│⭔ ${prefix}smoke text
│⭔ ${prefix}burnpaper text
│⭔ ${prefix}lovemessage text
│⭔ ${prefix}undergrass text
│⭔ ${prefix}love text
│⭔ ${prefix}coffe text
│⭔ ${prefix}woodheart text
│⭔ ${prefix}woodenboard text
│⭔ ${prefix}summer3d text
│⭔ ${prefix}wolfmetal text
│⭔ ${prefix}nature3d text
│⭔ ${prefix}underwater text
│⭔ ${prefix}goldenrose text
│⭔ ${prefix}summernature text
│⭔ ${prefix}letterleaves text
│⭔ ${prefix}glowingneon text
│⭔ ${prefix}fallleaves text
│⭔ ${prefix}flamming text
│⭔ ${prefix}harrypotter text
│⭔ ${prefix}carvedwood text
│⭔ ${prefix}tiktok text1 text2
│⭔ ${prefix}arcade8bit text1 text2
│⭔ ${prefix}battlefield4 text1 text2
│⭔ ${prefix}pubg text1 text2
│
└───────⭓
 
┌──⭓ *EPHOTO MENU*
│ 
│⭔ ${prefix}wetglass text
│⭔ ${prefix}multicolor3d text
│⭔ ${prefix}watercolor text
│⭔ ${prefix}luxurygold text
│⭔ ${prefix}galaxywallpaper text
│⭔ ${prefix}lighttext text
│⭔ ${prefix}beautifulflower text
│⭔ ${prefix}puppycute text
│⭔ ${prefix}royaltext text
│⭔ ${prefix}heartshaped text
│⭔ ${prefix}birthdaycake text
│⭔ ${prefix}galaxystyle text
│⭔ ${prefix}hologram3d text
│⭔ ${prefix}greenneon text
│⭔ ${prefix}glossychrome text
│⭔ ${prefix}greenbush text
│⭔ ${prefix}metallogo text
│⭔ ${prefix}noeltext text
│⭔ ${prefix}glittergold text
│⭔ ${prefix}textcake text
│⭔ ${prefix}starsnight text
│⭔ ${prefix}wooden3d text
│⭔ ${prefix}textbyname text
│⭔ ${prefix}writegalacy text
│⭔ ${prefix}galaxybat text
│⭔ ${prefix}snow3d text
│⭔ ${prefix}birthdayday text
│⭔ ${prefix}goldplaybutton text
│⭔ ${prefix}silverplaybutton text
│⭔ ${prefix}freefire text
│
└───────⭓
 
┌──⭓ *RANDOM IMAGE*
│  
│⭔ ${prefix}bj
│⭔ ${prefix}ero
│⭔ ${prefix}ppcp
│⭔ ${prefix}cum
│⭔ ${prefix}feet
│⭔ ${prefix}yuri
│⭔ ${prefix}trap
│⭔ ${prefix}lewd
│⭔ ${prefix}feed
│⭔ ${prefix}eron
│⭔ ${prefix}solo
│⭔ ${prefix}gasm
│⭔ ${prefix}poke
│⭔ ${prefix}anal
│⭔ ${prefix}holo
│⭔ ${prefix}tits
│⭔ ${prefix}kuni
│⭔ ${prefix}kiss
│⭔ ${prefix}erok
│⭔ ${prefix}smug
│⭔ ${prefix}baka
│⭔ ${prefix}solog
│⭔ ${prefix}feetg
│⭔ ${prefix}lewdk
│⭔ ${prefix}waifu
│⭔ ${prefix}pussy
│⭔ ${prefix}femdom
│⭔ ${prefix}cuddle
│⭔ ${prefix}hentai
│⭔ ${prefix}eroyuri
│⭔ ${prefix}cum_jpg
│⭔ ${prefix}blowjob
│⭔ ${prefix}erofeet
│⭔ ${prefix}holoero
│⭔ ${prefix}classic
│⭔ ${prefix}erokemo
│⭔ ${prefix}fox_girl
│⭔ ${prefix}futanari
│⭔ ${prefix}lewdkemo
│⭔ ${prefix}wallpaper
│⭔ ${prefix}pussy_jpg
│⭔ ${prefix}kemonomimi
│⭔ ${prefix}nsfw_avatar
│
└───────⭓`;
};

exports.mainmenu = (prefix, ad) => {
  return `┌──⭓ *MAIN MENU*
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
exports.ownermenu = (prefix, ad) => {
  return `┌──⭓ *OWNER MENU*
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
│⭔ ${prefix}fitnah
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
exports.autodectmenu = (prefix, ad) => {
  return `┌──⭓ *AUTODECT MENU*
  │
  │⭔ ${prefix}sadcat
  │⭔ ${prefix}translate
  │⭔ ${prefix}stalkff
  │⭔ ${prefix}stalknpm
  │⭔ ${prefix}stalkgithub
  │⭔ ${prefix}balikhuruf
  │⭔ ${prefix}balikangka
  │⭔ ${prefix}besarkecil
  │⭔ ${prefix}bilangangka
  │
  └───────⭓`;
};
exports.downloadermenu = (prefix, ad) => {
  return `┌──⭓ *DOWNLOADER MENU*
  │
  │⭔ ${prefix}tiktok
  │⭔ ${prefix}ytmp3
  │⭔ ${prefix}ytmp4
  │⭔ ${prefix}pinterest
  │⭔ ${prefix}playmp3
  │⭔ ${prefix}playmp4
  │⭔ ${prefix}gitclone
  │⭔ ${prefix}mediafire
  │⭔ ${prefix}wikimedia
  │⭔ ${prefix}soundcloud
  │⭔ ${prefix}infogempa
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
exports.toolsmenu = (prefix, ad) => {
  return `┌──⭓ *TOLLS MENU*
  │
  │⭔ ${prefix}spamcall
  │⭔ ${prefix}translate
  │⭔ ${prefix}ssweb-pc
  │⭔ ${prefix}ssweb-hp
  │⭔ ${prefix}bitly_short
  │⭔ ${prefix}cuttly_short
  │⭔ ${prefix}tinyurl_short
  │⭔ ${prefix}base32
  │⭔ ${prefix}base64
  │⭔ ${prefix}debase32
  │⭔ ${prefix}debase64
  │
  └───────⭓`;
};
exports.randomcekmenu = (prefix, ad) => {
  return `┌──⭓ *RANDOM CEK*
  │
  │⭔ ${prefix}cekjelek
  │⭔ ${prefix}cekcantik
  │⭔ ${prefix}cekganteng
  │⭔ ${prefix}ceksad
  │⭔ ${prefix}cekharam
  │⭔ ${prefix}cekhalal
  │⭔ ${prefix}cekbego
  │⭔ ${prefix}cekanjing
  │⭔ ${prefix}cekbiadab
  │⭔ ${prefix}cekramah
  │⭔ ${prefix}ceksatir
  │⭔ ${prefix}cekmanis
  │⭔ ${prefix}cekpahit
  │⭔ ${prefix}cekhitam
  │⭔ ${prefix}cekrasis
  │⭔ ${prefix}cekbaik
  │⭔ ${prefix}cekjahat
  │⭔ ${prefix}cekkaya
  │⭔ ${prefix}cekmiskin
  │⭔ ${prefix}cekpintar
  │⭔ ${prefix}cekbodoh
  │⭔ ${prefix}cekimut
  │⭔ ${prefix}cekkocak
  │⭔ ${prefix}cekkadang
  │
  └───────⭓`;
};
exports.sertifikatmenu = (prefix, ad) => {
  return `
  ┌──⭓ *SERTIFIKAT MENU*
  │
  │⭔ ${prefix}toloserti <nama>
  │⭔ ${prefix}badgirlserti <nama>
  │⭔ ${prefix}goodgirlserti <nama>
  │⭔ ${prefix}fuckgirlserti <nama>
  │⭔ ${prefix}bucinserti <nama>
  │
  └───────⭓`;
};
exports.logomakermenu = (prefix, ad) => {
  return `┌──⭓ *LOGO MAKER*
  │
  │⭔ ${prefix}joker
  │⭔ ${prefix}digital
  │⭔ ${prefix}nulis
  │⭔ ${prefix}nulis2
  │⭔ ${prefix}quoteser
  │⭔ ${prefix}quobucin
  │⭔ ${prefix}rem
  │⭔ ${prefix}girlneko
  │⭔ ${prefix}sadboy
  │⭔ ${prefix}kaneki
  │⭔ ${prefix}lolimaker
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
exports.sosmedshopmenu = (prefix, ad) => {
  return `┌──⭓ *SOSMED SHOP*
  │
  │⭔ ${prefix}pricelist <layanan>
  │⭔ ${prefix}order <cara order>
  │⭔ ${prefix}like jumlah|target
  │⭔ ${prefix}view jumlah|target
  │⭔ ${prefix}follower jumlah|username
  │⭔ ${prefix}cekstatus <idtrx>
  │⭔ ${prefix}komisi <owner only>
  │⭔ ${prefix}tarikkomisi <owner only>
  │
  └───────⭓`;
};
exports.vokalmenu = (prefix, ad) => {
  return `┌──⭓ *VOKAL MENU*
  │
  │⭔ ${prefix}hilih <text>
  │⭔ ${prefix}halah <text>
  │⭔ ${prefix}huluh <text>
  │⭔ ${prefix}heleh <text>
  │⭔ ${prefix}holoh <text>
  │
  └───────⭓`;
};
exports.randomenu = (prefix, ad) => {
  return `┌──⭓ *RANDOM MENU*
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
  return `┌──⭓ *PRIMBON MENU*
  │
  │⭔ ${prefix}ramaljodoh
  │⭔ ${prefix}ramalanjodoh
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
  return `┌──⭓ *ASUPAN GACHA*
  │
  │⭔ ${prefix}rika
  │⭔ ${prefix}bocil
  │⭔ ${prefix}ukhty
  │⭔ ${prefix}santuy
  │⭔ ${prefix}hijaber
  │
  └───────⭓`;
};
exports.audiochangermenu = (prefix, ad) => {
  return `┌──⭓ *AUDIO CHANGER*
  │
  │⭔ ${prefix}fat
  │⭔ ${prefix}fast
  │⭔ ${prefix}slow
  │⭔ ${prefix}bass
  │⭔ ${prefix}deep
  │⭔ ${prefix}tupai
  │⭔ ${prefix}robot
  │⭔ ${prefix}blown
  │⭔ ${prefix}smooth
  │⭔ ${prefix}earrape
  │⭔ ${prefix}reverse
  │⭔ ${prefix}nightcore
  │
  └───────⭓`;
};
exports.informationmenu = (prefix, ad) => {
  return `┌──⭓ *INFORMATION MENU*
  │
  │⭔ ${prefix}gempa
  │⭔ ${prefix}jadwaltv
  │⭔ ${prefix}gempanow
  │⭔ ${prefix}bioskopnow
  │⭔ ${prefix}latintoaksara
  │⭔ ${prefix}aksaratolatin
  │
  └───────⭓`;
};
exports.randomstickermenu = (prefix, ad) => {
  return `┌──⭓ *RANDOM STICKER*
  │
  │⭔ ${prefix}dadu
  │⭔ ${prefix}anjing
  │⭔ ${prefix}patrick
  │⭔ ${prefix}bucinstick
  │⭔ ${prefix}gawrgura
  │⭔ ${prefix}amongus
  │
  └───────⭓`;
};
exports.audiomenu = (prefix, ad) => {
  return `──⭓ *AUDIO MENU*
  │
  │⭔ ${prefix}audio${ad++}
  │⭔ ${prefix}audio${ad++}
  │⭔ ${prefix}audio${ad++}
  │⭔ ${prefix}audio${ad++}
  │⭔ ${prefix}audio${ad++}
  │⭔ ${prefix}audio${ad++}
  │⭔ ${prefix}audio${ad++}
  │⭔ ${prefix}audio${ad++}
  │⭔ ${prefix}audio${ad++}
  │⭔ ${prefix}audio${ad++}
  │⭔ ${prefix}audio${ad++}
  │⭔ ${prefix}audio${ad++}
  │⭔ ${prefix}audio${ad++}
  │⭔ ${prefix}audio${ad++}
  │⭔ ${prefix}audio${ad++}
  │⭔ ${prefix}audio${ad++}
  │⭔ ${prefix}audio${ad++}
  │⭔ ${prefix}audio${ad++}
  │⭔ ${prefix}audio${ad++}
  │⭔ ${prefix}audio${ad++}
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
  │⭔ ${prefix}waifu
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
exports.nsfwmenu = (prefix, ad) => {
  return `┌──⭓ *NFSW MENU*
  │   
  │⭔ ${prefix}yuri
  │⭔ ${prefix}ero
  │⭔ ${prefix}foot
  │⭔ ${prefix}ass
  │⭔ ${prefix}cuckold
  │⭔ ${prefix}cum
  │⭔ ${prefix}hentai
  │⭔ ${prefix}gangbang
  │⭔ ${prefix}femdom
  │⭔ ${prefix}ahegao
  │⭔ ${prefix}glasses
  │⭔ ${prefix}jahy
  │⭔ ${prefix}orgy
  │⭔ ${prefix}pussy
  │⭔ ${prefix}thighs
  │⭔ ${prefix}panties
  │⭔ ${prefix}thighs
  │⭔ ${prefix}masturbation
  │⭔ ${prefix}chiisaihentai
  │⭔ ${prefix}trap
  │⭔ ${prefix}blowjob
  │⭔ ${prefix}yaoi
  │⭔ ${prefix}ecchi
  │⭔ ${prefix}hentai
  │⭔ ${prefix}ahegao
  │⭔ ${prefix}hololewd
  │⭔ ${prefix}sideoppai
  │⭔ ${prefix}animefeets
  │⭔ ${prefix}animebooty
  │⭔ ${prefix}animethighss
  │⭔ ${prefix}hentaiparadise
  │⭔ ${prefix}animearmpits
  │⭔ ${prefix}hentaifemdom
  │⭔ ${prefix}lewdanimegirls
  │⭔ ${prefix}biganimetiddies
  │⭔ ${prefix}animebellybutton
  │⭔ ${prefix}hentai4everyone
  │
  └───────⭓`;
};
exports.soundmenu = (prefix, ad) => {
  return `┌──⭓ *SOUND MENU*
  │   
  │⭔ ${prefix}sound1
  │⭔ ${prefix}sound2
  │⭔ ${prefix}sound3
  │⭔ ${prefix}sound4
  │⭔ ${prefix}sound5
  │⭔ ${prefix}sound6
  │⭔ ${prefix}sound7
  │⭔ ${prefix}sound8
  │⭔ ${prefix}sound9
  │⭔ ${prefix}sound10
  │⭔ ${prefix}sound11
  │⭔ ${prefix}sound12
  │⭔ ${prefix}sound13
  │⭔ ${prefix}sound14
  │⭔ ${prefix}sound15
  │⭔ ${prefix}sound16
  │⭔ ${prefix}sound17
  │⭔ ${prefix}sound18
  │⭔ ${prefix}sound19
  │⭔ ${prefix}sound20
  │⭔ ${prefix}sound21
  │⭔ ${prefix}sound22
  │⭔ ${prefix}sound23
  │⭔ ${prefix}sound24
  │⭔ ${prefix}sound25
  │⭔ ${prefix}sound26
  │⭔ ${prefix}sound27
  │⭔ ${prefix}sound28
  │⭔ ${prefix}sound29
  │⭔ ${prefix}sound30
  │⭔ ${prefix}sound31
  │⭔ ${prefix}sound32
  │⭔ ${prefix}sound33
  │⭔ ${prefix}sound34
  │⭔ ${prefix}sound35
  │⭔ ${prefix}sound36
  │⭔ ${prefix}sound37
  │⭔ ${prefix}sound38
  │⭔ ${prefix}sound39
  │⭔ ${prefix}sound40
  │⭔ ${prefix}sound41
  │⭔ ${prefix}sound42
  │⭔ ${prefix}sound43
  │⭔ ${prefix}sound44
  │⭔ ${prefix}sound45
  │⭔ ${prefix}sound46
  │⭔ ${prefix}sound47
  │⭔ ${prefix}sound48
  │⭔ ${prefix}sound49
  │⭔ ${prefix}sound50
  │⭔ ${prefix}sound51
  │⭔ ${prefix}sound52
  │⭔ ${prefix}sound53
  │⭔ ${prefix}sound54
  │⭔ ${prefix}sound55
  │⭔ ${prefix}sound56
  │⭔ ${prefix}sound57
  │⭔ ${prefix}sound58
  │⭔ ${prefix}sound59
  │⭔ ${prefix}sound60
  │⭔ ${prefix}sound61
  │⭔ ${prefix}sound62
  │⭔ ${prefix}sound63
  │⭔ ${prefix}sound64
  │⭔ ${prefix}sound65
  │⭔ ${prefix}sound66
  │⭔ ${prefix}sound67
  │⭔ ${prefix}sound68
  │⭔ ${prefix}sound69
  │⭔ ${prefix}sound70
  │⭔ ${prefix}sound71
  │⭔ ${prefix}sound72
  │⭔ ${prefix}sound73
  │⭔ ${prefix}sound74
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
  │⭔ ${prefix}shadow text
  │⭔ ${prefix}cup text
  │⭔ ${prefix}cup1 text
  │⭔ ${prefix}romance text
  │⭔ ${prefix}smoke text
  │⭔ ${prefix}burnpaper text
  │⭔ ${prefix}lovemessage text
  │⭔ ${prefix}undergrass text
  │⭔ ${prefix}love text
  │⭔ ${prefix}coffe text
  │⭔ ${prefix}woodheart text
  │⭔ ${prefix}woodenboard text
  │⭔ ${prefix}summer3d text
  │⭔ ${prefix}wolfmetal text
  │⭔ ${prefix}nature3d text
  │⭔ ${prefix}underwater text
  │⭔ ${prefix}goldenrose text
  │⭔ ${prefix}summernature text
  │⭔ ${prefix}letterleaves text
  │⭔ ${prefix}glowingneon text
  │⭔ ${prefix}fallleaves text
  │⭔ ${prefix}flamming text
  │⭔ ${prefix}harrypotter text
  │⭔ ${prefix}carvedwood text
  │⭔ ${prefix}tiktok text1 text2
  │⭔ ${prefix}arcade8bit text1 text2
  │⭔ ${prefix}battlefield4 text1 text2
  │⭔ ${prefix}pubg text1 text2
  │
  └───────⭓`;
};
exports.ephotomenu = (prefix, ad) => {
  return `┌──⭓ *EPHOTO MENU*
  │ 
  │⭔ ${prefix}wetglass text
  │⭔ ${prefix}multicolor3d text
  │⭔ ${prefix}watercolor text
  │⭔ ${prefix}luxurygold text
  │⭔ ${prefix}galaxywallpaper text
  │⭔ ${prefix}lighttext text
  │⭔ ${prefix}beautifulflower text
  │⭔ ${prefix}puppycute text
  │⭔ ${prefix}royaltext text
  │⭔ ${prefix}heartshaped text
  │⭔ ${prefix}birthdaycake text
  │⭔ ${prefix}galaxystyle text
  │⭔ ${prefix}hologram3d text
  │⭔ ${prefix}greenneon text
  │⭔ ${prefix}glossychrome text
  │⭔ ${prefix}greenbush text
  │⭔ ${prefix}metallogo text
  │⭔ ${prefix}noeltext text
  │⭔ ${prefix}glittergold text
  │⭔ ${prefix}textcake text
  │⭔ ${prefix}starsnight text
  │⭔ ${prefix}wooden3d text
  │⭔ ${prefix}textbyname text
  │⭔ ${prefix}writegalacy text
  │⭔ ${prefix}galaxybat text
  │⭔ ${prefix}snow3d text
  │⭔ ${prefix}birthdayday text
  │⭔ ${prefix}goldplaybutton text
  │⭔ ${prefix}silverplaybutton text
  │⭔ ${prefix}freefire text
  │
  └───────⭓`;
};
exports.randomimagemenu = (prefix, ad) => {
  return `┌──⭓ *RANDOM IMAGE*
  │  
  │⭔ ${prefix}bj
  │⭔ ${prefix}ero
  │⭔ ${prefix}ppcp
  │⭔ ${prefix}cum
  │⭔ ${prefix}feet
  │⭔ ${prefix}yuri
  │⭔ ${prefix}trap
  │⭔ ${prefix}lewd
  │⭔ ${prefix}feed
  │⭔ ${prefix}eron
  │⭔ ${prefix}solo
  │⭔ ${prefix}gasm
  │⭔ ${prefix}poke
  │⭔ ${prefix}anal
  │⭔ ${prefix}holo
  │⭔ ${prefix}tits
  │⭔ ${prefix}kuni
  │⭔ ${prefix}kiss
  │⭔ ${prefix}erok
  │⭔ ${prefix}smug
  │⭔ ${prefix}baka
  │⭔ ${prefix}solog
  │⭔ ${prefix}feetg
  │⭔ ${prefix}lewdk
  │⭔ ${prefix}waifu
  │⭔ ${prefix}pussy
  │⭔ ${prefix}femdom
  │⭔ ${prefix}cuddle
  │⭔ ${prefix}hentai
  │⭔ ${prefix}eroyuri
  │⭔ ${prefix}cum_jpg
  │⭔ ${prefix}blowjob
  │⭔ ${prefix}erofeet
  │⭔ ${prefix}holoero
  │⭔ ${prefix}classic
  │⭔ ${prefix}erokemo
  │⭔ ${prefix}fox_girl
  │⭔ ${prefix}futanari
  │⭔ ${prefix}lewdkemo
  │⭔ ${prefix}wallpaper
  │⭔ ${prefix}pussy_jpg
  │⭔ ${prefix}kemonomimi
  │⭔ ${prefix}nsfw_avatar
  │
  └───────⭓`;
};
