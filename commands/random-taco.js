const fs = require('fs');
const Discord = require('discord.js');
const Canvas = require('canvas');
const nodefetch = require('node-fetch');

let fetchDogLink = async() => {
  let link = await nodefetch('http://taco-randomizer.herokuapp.com/random/?full-taco=true')
    .then(res => res.json());    
  return link;
};

module.exports = {
  name: 'random-taco',
  description: 'Returns a picture and a joke about chuck',
  

  execute (message, args) {

    let testDogs = async () => {
      return await fetchDogLink()
    }
    testDogs()
      .then(res => {
        message.channel.send(res.base_layer.recipe)
      })
    

  }
};