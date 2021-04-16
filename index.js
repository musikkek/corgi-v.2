const { Client, MessageEmbed, MessageMentions } = require("discord.js")
const chalk = require("chalk")



const client = new Client()

const log = console.log

client.on("ready", () => {
  log(chalk.blue(`Zalogowano jako ${client.user.tag}!`))

client.user.setActivity("chelp", {
  type: "WATCHING",
  url: "https://discord.gg/Jn8GSN3HsB"
});
})

client.on("message", (msg) => {
  const { author, guild, channel } = msg

  // Check if user is a bot
  if (author.bot || !guild) {
    return
  }




  if (msg.content === 'cping') {  
    channel.send(`🏓Pong! ${Date.now() -  msg.createdTimestamp}ms.`);
  }



  if (msg.content === 'cinfo') {
    const botAuthor = "! Marvelowyy"
    const botVersion = "v 1.0.0"
    const botPrefix = 'c'

    const embedbotinfo = new MessageEmbed()
    .setTitle('Info')
    .setColor(0xb348ff)
    .setDescription('**Jest to druga odsłona bota *Corgi*, który był autorstwa użytytkownika *! Piesek Developerski#8788***.')

    channel.send(embedbotinfo)
}



if (msg.content === 'cbotinfo') {
  const botAuthor = "! Marvelowyy"
  const botVersion = "v 1.0.0"
  const botPrefix = '***c***'

  const embedcotinf = new MessageEmbed()

  .setThumbnail('https://i.imgur.com/CgwW1xI.png')
  .setTitle('O bocie')
  .setDescription('**:books: Biblioteka bota - discord.js \n :green_circle: hosting bota - Heroku | 24/7 \n :eye: Wersja bota - v1.0.0 \n :crown: Właściciel bota - !  Marvelowyy#4709**')
  .addField('prefix : ', botPrefix, true)
  
  channel.send(embedcotinf)
}



if (msg.content === 'chelp') {
  const botAuthor = "! Marvelowyy"
  const botVersion = "v 1.0.0"
  const botPrefix = 'c'

  const embedhelp = new MessageEmbed()

  .setTitle('Help - spis komend')
  .setThumbnail("https://image.flaticon.com/icons/png/512/25/25333.png")
  .setDescription(' *Pamiętaj o dodaniu prefixu (c)  przed każdą z komend!* \n ***Oto spis wszytskich komend : ***\n \n \n **ping - pokazuje aktualne opóźnienie między wysłaniem wiadomości i odesłaniem wiadomości zwrotnej, którą jest reprezontowana komenda \n \n info - ma za zadanie pokazać  podstawowe informacje o bocie \n \n botinfo - ta komenda pokazuje dodatkowe informacje o boeice takie jak np. biblioteka, w której został napisany \n \n help - użyłeś tej komendy. Wysyła ona spis wszystkich komend dostępnych w bocie**')


  channel.send(embedhelp)

}

});

client.login('ODMyMzMxNzk4ODI2MzE5ODky.YHiPZA.7mXU3HBpZ-NRh_0I-L2PKhnel0I');
