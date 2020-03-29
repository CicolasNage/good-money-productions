const fs = require('fs');
const Discord = require('discord.js');
const Canvas = require('canvas');
const nodefetch = require('node-fetch');


module.exports = {
  name: 'cage-pic',
  description: 'Returns a picture of the legend',
  

  execute (message, args) {
    let randomNumber1 = (Math.floor(Math.random() * 15) + 1)*100
    let randomNumber2 = (Math.floor(Math.random() * 15) + 1)*100
    message.channel.send(`https://www.placecage.com/c/${randomNumber1}/${randomNumber2}`)

  }
};