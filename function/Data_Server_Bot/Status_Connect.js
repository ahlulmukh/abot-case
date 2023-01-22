const fs = require('fs');

exports.status_Connection = async (conn, update, connectToWhatsApp) => {  
console.log('Connection update:', update)
if (update.connection === 'open') 
console.log("Connected with " + conn.user.id)
else if (update.connection === 'close')
connectToWhatsApp()
}