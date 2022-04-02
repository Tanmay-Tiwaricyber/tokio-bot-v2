function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '62815158600891', 'Nurutomo', m)
  this.sendContact(m.chat, '+91 86022 39106', 'σℓ∂υѕєя', m)
 this.sendContact(m.chat, '+91 70079 31361', 'IKRAM TOM SIR', m)
 this.sendContact(m.chat, '+91 60025 70722', 'TOM BRO', m)
}
handler.help = ['owner/creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
