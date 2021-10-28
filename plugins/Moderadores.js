let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  let contacts = []
  for (let owner of Object.entries(global.Owner).filter(v => v[1].isMods)) {
    contacts.push(...[owner[0], owner[1].name])
  }
  if (contacts.length < 3) return this.sendContact(m.chat, contacts[0], contacts[1], m)
  this.sendContactArray(m.chat, contacts, m)
}
handler.help = ['Moderadores']
handler.tags = ['info']

handler.command = /^(moderadores)$/i

module.exports = handler