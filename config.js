
require("./Rizz")
const fs = require('fs')
const { version } = require("./package.json")
//~~~~~~~~~SETTING BOT~~~~~~~~~~//

// Bebas Ubah
global.owner = "6288225414972" //owner shadow
global.nobot = "6285813708397" //nomor lu
global.namaowner = "rizz || shadow"
global.namaBot = "shadow"
global.title = "ᴅᴇᴠs || rizz"
global.thumnail2 = "https://files.catbox.moe/bok3ar.jpg"
// Jangan Di ubah
global.creator = `${owner}@s.whatsapp.net` 
global.foother = `© ${namaBot}`
global.versi = "10.0.0"
global.nama = namaBot 
global.namach = nama 
global.namafile = foother 
global.author = namaowner


global.frch = ["48ff6e64f25bb5d566a603e40906c3b8e6392d961f4905f77887762b7bf03409",
"Isi Apikeys Mu" // Dapatkan apikey di https://asitha.top/login?ref=hillaryy2555
]




// Bebas Ubah
// True = on || False = Off 
global.status = true
global.owneroff = true
global.autoread = true
global.autotyping = true
global.Antilinkgc = true
global.Antilinkch = true
global.antispam = true
global.onlygc = false

// Set Payment
global.qris = "Belum Ada"
global.dana = "Belum Ada"
global.gopay = "Belum Ada"

// ===={ Set Link }
global.ch = 'https://whatsapp.com/channel/0029VaBOlsv002TEjlntTE2D'
global.idch = '120363186130999681@newsletter'
global.linkgc = 'https://chat.whatsapp.com/L76YNpx5yqU4NGVIDQ1GUM'
global.yt = 'https://youtube.com/@fallzx-features'
global.nekorin = "https://api.nekorinn.my.id"
global.idgc = "120363399209756764@g.us"
// set prefix
global.setprefix = ".", "/", "#"

// User Sosmed
global.tt = "@"
global.yt = "@"
global.ig = "@"

// Setting Api cVPS
global.doToken = "APIKEY"
global.linodeToken = "APIKEY"

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://"
global.apikey = "ptla" //ptla
global.capikey = "ptlc" //ptlc

// [ THEME URL & URL ] ========//
global.thumbnail = 'https://files.catbox.moe/bok3ar.jpg'

// Settings reply ~~~~~~~~~//
global.mess = {
    owner: "Khusus Owner Shadow",
    prem: "Khusus Premium Shadow",
    group: "Khusus di Group Chat",
    admin: "Khusus Admin Shadow",
    botadmin: "Bot Harus Jadi Admin",
    private: "Khusus di Private Chat Shadow",
    done: "Sukses By Shadow"
}

global.packname = nama
global.author = namaBot

//
global.gamewaktu = 60 // Game waktu
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.family100 = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar2 = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};

//~~~~~~~~~~~ DIEMIN ~~~~~~~~~~//

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
