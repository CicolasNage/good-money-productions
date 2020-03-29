const fs = require('fs');
const Discord = require('discord.js');
const Canvas = require('canvas');
const nodefetch = require('node-fetch');

let fetchDogLink = async() => {
  let link = await nodefetch('https://api.chucknorris.io/jokes/random?category=explicit')
    .then(res => res.json());    
  return link;
};

module.exports = {
  name: 'chuck-norris',
  description: 'Returns a picture and a joke about chuck',
  

  execute (message, args) {

    let testDogs = async () => {
      return await fetchDogLink()
    }
    testDogs()
      .then(res => message.channel.send(res.value))
    

  }
};