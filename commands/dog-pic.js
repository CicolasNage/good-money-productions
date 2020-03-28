const fs = require('fs');
const Discord = require('discord.js');
const Canvas = require('canvas');
const nodefetch = require('node-fetch');

let fetchDogLink = async() => {
  let link = await nodefetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json());    
  return link;
};

module.exports = {
  name: 'dog-pic',
  description: 'Returns a random picture of a pup from the dog api',
  

  execute (message, args) {

    let testDogs = async () => {
      return await fetchDogLink()
    }
    testDogs()
      .then(res => message.channel.send(res.message))
    

  }
};