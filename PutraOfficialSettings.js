// Hallo Brother,, Sc Ini Semua Fitur Harus Di Group yaaa, jadi kalo kalian ketik command yang ada di bot di private chat bot gabakal ngerespon palingan cuman ngeread, jadi kamu harus bikik group dulu atau masukin bot nya ke dalam group terus ketik command nya baru fitur bot nya otomatis ngerespon!! DONE, JANGAN LUPA SUBSCRIBE YOUTUBE PUTRA OFFC,, 

// BTW SC NO ENC NYA CUMAN 40K AJA
// BEBAS EDIT - RECODE DLL
// HUBUNGI WHATSAPP PUTRA OFFC 
// 085697886101 ( PUTRA OFFC )


const fs = require('fs')
const chalk = require('chalk')


global.owner = ['601137759884','447477236555'] // ganti nomor wa lu
global.bugrup = ['601137759884','447477236555'] // ganti nomor wa lu
global.packname = 'Hanz - Offc' 
global.author = 'Hanz - Offc'
global.nameFake = '𝗁𝖺𝗇𝗓𝗑𝗑𝗑 OFC'
global.namaGede = '𝗁𝖺𝗇𝗓𝗑𝗑𝗑 OFFC'
global.nameBot = '𝗁𝖺𝗇𝗓𝗑𝗑𝗑 OFFC'
global.modeBot = 'PUBLIC'
global.runnBot = 'Heroku'
global.ownerNumber = '601137759884' //awalan nya harus 62 ya
global.menuBot = 'https://telegra.ph/file/35c94843e4f1b00fb33e0.jpg' // Ganti Jadi Link Potomu agar thumbnail menunya ke ganti

global.mess = {
success: 'Sukses',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: '*LOADING....* Mohon Sabar Ya',
wrongFormat: 'Format yg anda masukan salah',
error: 'Maaf terjadi kesalahan',
premium: 'Kusus Pengguna Premium',
akses: 'buy_akses',
onlyUser: 'Silahkan Daftar Terlebih Dahulu Untuk Menggunakan Fitur Bot Ini',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})

// SILAHKAN SETTING SESUAI PERINTAH //