const fs = require('fs')
const Discord = require('discord.js');
const Canvas = require('canvas')

module.exports = {
  name: 'omo-pic',
  aliases: ['beauty', 'picture'],
  description: 'Returns a random picture of our gorgeous lord and savior',
  execute (message, args) {
    const directoryString = './omo-pictures'
    const files = fs.readdirSync(directoryString)
    console.log(files)
    let omoImageDir = directoryString + '/' + files[Math.floor(Math.random() * files.length)]
    console.log(omoImageDir)
    
    const omoImageEmbed = new Discord.MessageEmbed()
      .attachFiles([omoImageDir])

    message.channel.send(omoImageEmbed)



  },
};