const fs = require('fs')
const Discord = require('discord.js');
const Canvas = require('canvas')

fetchDogLink = () => {
    let dogLink = fetch('https://dog.ceo/api/breeds/image/random').then(res=>res.json().message)
    return 'dogLink will be here if it is working';
}

const dog = fetchDogLink();
module.exports = {
  name: 'dog-pic',
  description: 'Returns a random picture of a pup from the dog api',
  

  execute (message, args) {
    
    const exampleEmbed = {
        color: 0x0099ff,
        title: 'Some title',
        url: 'https://discord.js.org',
    };
    
    message.channel.send(dog);
    



  },
};