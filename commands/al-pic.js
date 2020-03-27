const fs = require('fs')
const Discord = require('discord.js');
const Canvas = require('canvas')

module.exports = {
  name: 'al-pic',
  aliases: ['beauty', 'picture'],
  description: 'Returns a random picture of our gorgeous lord and savior',
  execute (message, args) {
    const directoryString = './al-pictures'
    const files = fs.readdirSync(directoryString)
    console.log(files)
    let alImageDir = directoryString + '/' + files[Math.floor(Math.random() * files.length)]
    console.log(alImageDir)
    
    const alImageEmbed = new Discord.MessageEmbed()
      .attachFiles([alImageDir])

    message.channel.send(alImageEmbed)



  },
};