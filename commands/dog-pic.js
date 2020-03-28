const fs = require('fs')
const Discord = require('discord.js');
const Canvas = require('canvas')

fetchDogLink = () => {
    let dogLink = fetch('https://dog.ceo/api/breeds/image/random').then(res=>res.json().message)
    return dogLink;
}

module.exports = {
  name: 'dog-pic',
  description: 'Returns a random picture of a pup from the dog api',
  
  
  execute (message, args) {
    const dogLink = fetchDogLink();
    const exampleEmbed = new Discord.MessageEmbed()
	.setTitle('Some title')
	.attachFiles([dogLink])
	.setImage('attachment://discordjs.png');

channel.send(exampleEmbed);




  },
};