let handler = m => m

let linkRegex = /youtu.be\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isytLink = linkRegex.exec(m.text)

  if (chat.antiLink && isytLink) {
    await m.reply(`*「 ANTI LINK 」*\n\nDetected *${await this.getName(m.sender)}* you have sent the group link!\n\nSorry you will be kicked out from this group byee!`)
    if (isrowner) return m.reply('*Hey sorry you\'re owner of bot, you won\'t be kicked. haha..*')
    if (!isBotAdmin) return m.reply('*Bot is not admin, how can it kick people -_-*')
    let linkyt = ('https://youtu.be/' + await this.youtubeInviteCode(m.chat))
    let isLinkThisyt = new RegExp(linkyt, 'i')
    let isytlink = isLinkThisyt.test(m.text)
    if (isytlink) return m.reply('*Lol send your own Youtube link :v*')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler
