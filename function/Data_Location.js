//GUA LEXXY SUKA SKR
//SIMPLE KEREN RAPIH
//CREATED BY LEXXY OFFICIAL

const fs = require('fs')

JSON_DATA = {
setting: JSON.parse(fs.readFileSync('./config.json')),
antilink: JSON.parse(fs.readFileSync('./database/antilink.json')),
mess: JSON.parse(fs.readFileSync('./database/message.json')),
welcome: JSON.parse(fs.readFileSync('./database/welcome.json')),
db_user: JSON.parse(fs.readFileSync('./database/pengguna.json')),
db_menfes: JSON.parse(fs.readFileSync('./database/menfess.json')),
server_eror: JSON.parse(fs.readFileSync('./database/func_error.json')),
db_respon_list: JSON.parse(fs.readFileSync('./database/db_addlist.json')),
auto_downloadTT: JSON.parse(fs.readFileSync('./database/tiktokDown.json')),
}

exports.setting_JSON = JSON_DATA.setting;
exports.welcome_JSON = JSON_DATA.welcome;
exports.mess_JSON = JSON_DATA.mess;
exports.antilink_JSON = JSON_DATA.antilink;
exports.db_user_JSON = JSON_DATA.db_user;
exports.server_eror_JSON = JSON_DATA.server_eror;
exports.db_menfes_JSON = JSON_DATA.db_menfes;
exports.db_respon_list_JSON = JSON_DATA.db_respon_list;
exports.auto_downloadTT_JSON = JSON_DATA.auto_downloadTT;