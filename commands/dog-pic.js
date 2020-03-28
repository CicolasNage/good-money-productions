const fs = require('fs')
const Discord = require('discord.js');
const Canvas = require('canvas')
const fetch = require('node-fetch')
fetchDogLink = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(res => res.json())
        .then(res => res)
    
}

module.exports = {
  name: 'dog-pic',
  description: 'Returns a random picture of a pup from the dog api',
  

  execute (message, args) {
    
    let dog = fetchDogLink();
    
    message.channel.send(dog);

  }
};