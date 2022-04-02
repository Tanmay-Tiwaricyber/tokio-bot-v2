let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
if (!text) throw 'Please give me any link, Example: #tinyurl https://github.com/jetushack4/popat'
let res = await (await fetch(`http://api.adf.ly/api.php?key=c02fe2b360ee4b566a4f1e14d84b279b&uid=3141484&advert_type=banner&domain=adf.ly&url=${text}`)).buffer() 
m.reply(`${res}`)
}
handler.command = /^adfly$/i
module.exports = handler