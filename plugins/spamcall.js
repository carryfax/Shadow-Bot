let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Ingrese el número de teléfono para SpamCall!\n\nEjemplo: #spamcall 895337278647', m)

	axios.get(`https://tobz-api.herokuapp.com/api/spamcall?no=${text}&apikey=Tobzzz17`).then ((res) => {
	 	let hasil = `${res.data.logs}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['spamcall'].map(v => v + ' <numero>')
handler.tags = ['spammer']
handler.command = /^(spamcall)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
