let fs = require('fs')
let path = require('path')
let levelling = require('../lib/levelling')
let tags = {
  'general': 'General',
  'rpg': 'Epic RPG',
  'game': 'Game',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'admin': 'Admin',
  'group': 'Group',
  'premium': 'Premium',
  'internet': 'Internet',
  'anonymous': 'Anonymous Chat',
  'nulis': 'MagerNulis & Logo',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'fun': 'Fun',
  'database': 'Database',
  'vote': 'Voting',
  'absen': 'Absen',
  'quran': 'Al Qur\'an',
  'jadibot': 'Jadi Bot',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  '': 'No Category',
}
const defaultMenu = {
  before: `
*_「 THE SHADOW BROKERS - BOT 」_*

*INFORMACIÓN DEL BOT*
*_⚠️-EL DESCONOCIMIENTO DE LO MENCIONADO EN EL SIGUIENTE ARTICULO NO EXIME A LA PERSONA DE LAS REGLAS Y SANCIONES QUE DE ELLA EMANAN-⚠️_*
*_Reglas e información sobre el Bot: https://n9.cl/the-shadow-brokers-bot-html_*

_Grupo oficial del Bot: https://chat.whatsapp.com/JlomZPEgo3bLmzjGUYPfyJ_
_- Regalos de numero virtuales, pruebas de comandos nuevos, ayuda casi inmediata, etc._

*<OTROS MENUS>*

° ඬ⃟ℹ️ _#Infodecadacomando_
° ඬ⃟ℹ️ _#reglasdelbot_
° ඬ⃟ℹ️ _#creditosyagradecimientos_
° ඬ⃟ℹ️ _#codigoparaaudios_
° ඬ⃟ℹ️ _#MenuMas18_

*<NUMERO DEL CREADOR Y DE MODERADORES>*
- Únicamente contactar números +1 

° ඬ⃟👻 _#owner_
° ඬ⃟👻 _#creator_
° ඬ⃟👻 _#moderadores_

*<REPORTA FALLOS EN ALGÚN COMANDO/>*
- Reportes falsos serán baneados del uso del Bot 

° ඬ⃟🔰 _#bug *texto*_
° ඬ⃟🔰 _#report *texto*_

*<JUEGOS/>*

° ඬ⃟🕹 _#gay *@tag / nombre*_
° ඬ⃟🕹 _#lesbi *@tag / nombre*_
° ඬ⃟🕹 _#puta *@tag / nombre*_
° ඬ⃟🕹 _#formarpareja_
° ඬ⃟🕹 _#slots *cantidad*_

*<ECONOMIA/>* 

° ඬ⃟💵 _#monthly_
° ඬ⃟💵 _#claim_
° ඬ⃟💵 _#weekly_
° ඬ⃟💵 _#billetera_

*<DESCARGAS/>*

° ඬ⃟📥 _#image *texto*_
° ඬ⃟📥 _#gimage *texto*_
° ඬ⃟📥 _#ytsearch *texto*_
° ඬ⃟📥 _#ytmp4 *link yt*_
° ඬ⃟📥 _#ytmp3 *link yt*_
° ඬ⃟📥 _#play *titulo*_
° ඬ⃟📥 _#play2 *titulo del video*_
° ඬ⃟📥 _#lirik *nombredelacanción*_
° ඬ⃟📥 _#google *texto*_
° ඬ⃟📥 _#googlef *texto*_
 
*<GESTION DE GRUPOS/>* 

° ඬ⃟💎 _#admin *@tag*_
° ඬ⃟💎 _#kick *@tag*_
° ඬ⃟💎 _#add  *número*_
° ඬ⃟💎 _#group *open/close*_
° ඬ⃟💎 _#enable welcome_
° ඬ⃟💎 _#disable welcome_
° ඬ⃟💎 _#group *open/close*_
° ඬ⃟💎 _#listonline_
° ඬ⃟💎 _#enable antilink_
° ඬ⃟💎 _#disable antilink_ 
° ඬ⃟💎 _#link_
° ඬ⃟💎 _#linkgroup_
° ඬ⃟💎 _#hidetag *texto*_
° ඬ⃟💎 _#setname *Nuevo nombre del grupo*_
° ඬ⃟💎 _#invocar_

*<CREADORES/>*

° ඬ⃟🧧 _#style *texto*_
° ඬ⃟🧧 _#ytcomment *texto*_
° ඬ⃟🧧 _#hornycard *texto*_
° ඬ⃟🧧 _#s_
° ඬ⃟🧧 _#sticker*_
° ඬ⃟🧧 _#swm *Link d imagen d google*_
° ඬ⃟🧧 _#ttp *texto*_
° ඬ⃟🧧 _#attp *texto*_
° ඬ⃟🧧 _#attp2 *texto*_
° ඬ⃟🧧 _#wasted_
° ඬ⃟🧧 _#trash_
° ඬ⃟🧧 _#rainbow_
° ඬ⃟🧧 _#circle_
° ඬ⃟🧧 _#tomp3_
° ඬ⃟🧧 _#toimg_

*<FUTBOL RANDOM>*

° ඬ⃟⚽ _#futbol_
° ඬ⃟⚽ _#Messi_
° ඬ⃟⚽ _#CristianoRonaldo_
° ඬ⃟⚽ _#siiuuuu_

*<RANDOM/>*

° ඬ⃟👾 _#meme_
° ඬ⃟👾 _#meme2_
° ඬ⃟👾 _#meme3_
° ඬ⃟👾 _#cat_
° ඬ⃟👾 _#dog_
° ඬ⃟👾 _#pikachu_
° ඬ⃟👾 _#waifu_
° ඬ⃟👾 _#apakah *pregunta*_
° ඬ⃟👾 _#blackpink_
° ඬ⃟👾 _#reto_
° ඬ⃟👾 _#verdad_
° ඬ⃟👾 _#imagenrandom_
° ඬ⃟👾 _#randomkpop_
° ඬ⃟👾 _#neko_
° ඬ⃟👾 _#iqtest_
° ඬ⃟👾 _#nyan_

*<COMANDOS +18/>*
- Se actualizaron los comandos por lo que se tuvo que dividir en otro menú, solicítalo con el siguiente comando: 
​​​
° ඬ⃟🔞 _#MenuMas18_

*<REGISTRO/>*

° ඬ⃟📓 _#daftar nombre.edad_

*<UNE EL BOT A TU GRUPO>*

° ඬ⃟👽 _#join *link del grupo*_

*<EFECTOS PARA NOTAS DE VOZ O AUDIOS/>*
​​​
° ඬ⃟🎤 _#bass_
° ඬ⃟🎤 _#deep_
° ඬ⃟🎤 _#earrape_
° ඬ⃟🎤 _#fast_
° ඬ⃟🎤 _#fat_
° ඬ⃟🎤 _#nightcore_
° ඬ⃟🎤 _#reverse_
° ඬ⃟🎤 _#robot_
° ඬ⃟🎤 _#slow_
° ඬ⃟🎤 _#smooth_

*<EXTRAS/>*

° ඬ⃟🐺 _#profile_
° ඬ⃟🐺 _#simih *texto*_
° ඬ⃟🐺 _#afk *motivo*_
° ඬ⃟🐺 _#readmore *texto1| texto2*_
° ඬ⃟🐺 _#qr *texto*_
° ඬ⃟🐺 _#calc *expresión matemática*_ 
° ඬ⃟🐺 _#zodiac *AAAA MM DD*_
° ඬ⃟🐺 _#scan *numero con prefijo del pais*_
° ඬ⃟🐺 _#kpop_

*<AUDIOS/>* 

° ඬ⃟🎧 _#buenosdias_
° ඬ⃟🎧 _#buenosdias2_
° ඬ⃟🎧 _#fiestadeladmin_
° ඬ⃟🎧 _#fiestadeladmin2_
° ඬ⃟🎧 _#viernes_
° ඬ⃟🎧 _#chicalgante_
° ඬ⃟🎧 _#baneado_
° ඬ⃟🎧 _#anadieleimporta_
° ඬ⃟🎧 _#horadesexo_
° ඬ⃟🎧 _#vetealavrg_
° ඬ⃟🎧 _#hola_
° ඬ⃟🎧 _#teamo_
° ඬ⃟🎧 _#Yamete_
° ඬ⃟🎧 _#diagnosticadocongay_
° ඬ⃟🎧 _#bañate_
° ඬ⃟🎧 _#felizjueves_
° ඬ⃟🎧 _#bot_gemime_

*<CHAT ANONIMO/>*

° ඬ⃟📳 _#start_
° ඬ⃟📳 _#next_
° ඬ⃟📳 _#leave_

*<MUSICA CORTESIA DEL ADMIN/>*
- Puede demorar 2 minuto aproximadamente en enviar el archivo mp3

° ඬ⃟🎵 _#cortesiadeladmin1_

*<VIDEOS DE MUSICAS SAD/>*
- Puede demorar 1 minuto en enviar el archivo mp4

° ඬ⃟⏯️ _#edmaverickdondeestas_
° ඬ⃟⏯️ _#devuelvemeamichicahombresg_
° ඬ⃟⏯️ _#beretlosiento_

*<CONVIERTETE EN BOT/>*

° ඬ⃟🏷 _#stop_
° ඬ⃟🏷 _#jadibot_

*<CREA TU NUMERO VIRTUAL E INSTALA UN BOT EN EL/>*

° ඬ⃟🔥 _#tutorial_

*<CREA LOGOS>*

° ඬ⃟🖍️ _#tahta *texto*_
~- El texto debe ser menor a 11 letras~
~- Crea una imagen con el texto~
~- El texto lo escribe 3 veces en 3 filas diferentes~
~- Puede ser diferentes colores las letras (es aleatorio)~
~- Si falla vuelva a intentarlo y corrobore que cumpla con lo antes mencionado~
° ඬ⃟🖍️ _nulis *texto*_
~- Crea una tipo de lista con el texto que le pongas~
° ඬ⃟🖍️ _nulis2 *texto*_
~- Crea una tipo de lista con el texto que le pongas~

*<AVISOS/>*

°ඬ⃟📢 __

*<PROPIETARIO Y MODERADORES/>*

° ඬ⃟🤖 _#banuser *@tag*_
° ඬ⃟🤖 _#banchat_
° ඬ⃟🤖 _#setmenu_
° ඬ⃟🤖 _#enable restrict_
° ඬ⃟🤖 _#enable autoread*_
° ඬ⃟🤖 _#disable autoread_
° ඬ⃟🤖 _#enable autoread_
° ඬ⃟🤖 _#resetlimit_
° ඬ⃟🤖 _#banlist_
° ඬ⃟🤖 _#bcgc *texto*_
° ඬ⃟🤖 _#bc *texto*_
° ඬ⃟🤖 _#update_
° ඬ⃟🤖 _#restart_
° ඬ⃟🤖 _#backup_
° ඬ⃟🤖 _#unbanchat_
° ඬ⃟🤖 _#unban *@tag*_
° ඬ⃟🤖 _#del_

*_「 𝙏͚͜͝͠𝙝͚͜͝͠𝙚͚͜͝͠ ͚͜͝͠𝙎͚͜͝͠𝙝͚͜͝͠𝙖͚͜͝͠𝙙͚͜͝͠𝙤͚͜͝͠𝙬͚͜͝͠ ͚͜͝͠𝘽͚͜͝͠𝙧͚͜͝͠𝙤͚͜͝͠𝙠͚͜͝͠𝙚͚͜͝͠𝙧͚͜͝͠𝙨͚͜͝͠ ͚͜͝͠-͚͜͝͠ ͚͜͝͠𝘽͚͜͝͠𝙤͚͜͝͠𝙩͚͜͝͠ ͚͜͝͠  」_*

*_IGNORAR LO SIGUIENTE_*

*_IGNORAR LO SIGUIENTE_*

*_IGNORAR LO SIGUIENTE_*

*_IGNORAR LO SIGUIENTE_*

*_IGNORAR LO SIGUIENTE_*

%readmore`.trimStart(),
  header: '╭─「 %category 」',
  body: '│ • %cmd %islimit %isPremium',
  footer: '╰────\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let name = conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
            conn.sendFile(m.chat, 'media/Menu audio.mp3', '', 'xd', m)
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let rtotalreg = Object.values(global.DATABASE._data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      name, weton, week, date, dateIslamic, time, totalreg, rtotalreg,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    let pp = await conn.getProfilePicture(conn.user.jid).catch(_ => path.join(__dirname, '../src/avatar_contact.png'))
    conn.sendFile(m.chat, pp, 'menu.jpg', text.trim(), m).catch(_ => conn.reply(m.chat, text.trim(), m))
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['General']
handler.command = /^(menu|help|info|menú|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 50

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = (new Date().getUTCHours() + 7) % 24
  res = "Woi. Pagi"
  if (time >= 4) {
    res = "Selamat Pagi"
  }
  if (time >= 12) {
    res = "Selamat Siang"
  }
  if (time >= 15) {
    res = "Selamat Sore"
  }
  if (time >= 19) {
    res = "Selamat Malam"
  }
  return res
}
