let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'media/a.ogg', '', 'xd', m)
}
handler.command = /^(a)$/i
handler.fail = null
handler.exp = 100
module.exports = handler
© 2021 GitHub, Inc.
Terms
Privacy