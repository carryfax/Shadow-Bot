let handler = async m => m.reply(`
*_THE SHADOW BROKERS - BOT_*
_REGLAS Y AVISOS DEL/SOBRE  BOT_  

- EL BOT ESTARÁ ACTIVO LUNES, MARTES, MIERCOLES, VIERNES, SABADOS Y DOMINGOS EN UN HORARIO DE 3:00 PM A 5:00 PM HORA DE MÉXICO (SUJETO A CAMBIOS SIN PREVIO AVISO)

- EL BOT ACTUALMENTE SE ENCUENTRA SATURADO DE GRUPOS POR LO QUE NO SE ESTA AGREGANDO A GRUPOS CON MENOS DE 15 PARTICPANTES  

- NO LLAMADAS, EN CASO DE LLAMAR SERAN BLOQUEADOS AUTOMATICAMENTE. EN CASO DE LLAMADAS GRUPALES SE LES SOLICITA QUE CUELGUEN EL NUMERO DEL BOT AL INSTANTE DE INCIAR LA LLAMADA DE LO CONTRARIO RECIBIRAN ADVERTENCIAS DEL DUEÑO O MODERADORES Y A LA 3RA ADVERTENCIA SE SACARA EL BOT DEL GRUPO 

- EL BOT AUTOMATICAMENTE SILENCIA LOS GRUPOS, CHATS, POR LO QUE NO RECIBIMOS NOTIFICACIONES, CUALQUIER DUDA CONTACTAR CON EL CREADOR (SE ANEXA INFORMACION DE CONTACTO EN ESTE DOCUMENTO EN LA PARTE DE ABAJO DEL MISMO)   

- HACER SPAM DE ALGUN COMANDO CONLLEVA AL BLOQUEO DEL CHAT O ADVERTENCIA AL GRUPO (3 ADVERTENCIAS Y SE SACA AL BOT DEL GRUPO)

- SI EL BOT DEJA DE RESPONDER EN ALGUN MOMENTO DENTRO DEL HORARIO ANTES MENCIONADO ESPERAR DE 10 A 30 MINUTOS E INTENTAR NUEVAMENTE LOS COMANDOS

- RESPETAR AL CREADOR, A LOS MODERADORES Y AL BOT, EL DESACATO DE ESTA REGLA CONLLEVA AL BLOQUEO

- SI EL BOT DEJA DE CONTESTAR POR 3 DIAS CONSECUTIVOS CONTACTAR ME AL PRIVADO A MI NUMERO PERSONAL (ANEXADO ABAJO) PARA OBTENER EL NUEVO NUMERO DEL BOT 
° NUMERO: +1 (952) 522-0880
° ENLACE DIRECTO DE WHATSAPP: https://api.whatsapp.com/send?phone=19525220880
`.trim()) // Tambah sendiri kalo mau
handler.help = ['reglasdelbot']
handler.tags = ['info']
handler.command = /^reglasdelbot$/i

module.exports = handler
