const fs = require('fs')
const Discord = require('discord.js');
const Canvas = require('canvas')

fetchDogLink = () => {
    let dogLink = fetch('https://dog.ceo/api/breeds/image/random').then(res=>res.json().message)
    return 'dogLink will be here if it is working';
}

module.exports = {
  name: 'dog-pic',
  description: 'Returns a random picture of a pup from the dog api',
  
  
  execute (message, args) {
    
    const exampleEmbed = {
        color: 0x0099ff,
        title: 'Some title',
        url: 'https://discord.js.org',
        author: {
            name: 'Some name',
            icon_url: 'https://i.imgur.com/wSTFkRM.png',
            url: 'https://discord.js.org',
        },
        description: 'Some description here',
        thumbnail: {
            url: 'https://i.imgur.com/wSTFkRM.png',
        },
        fields: [
            {
                name: 'Regular field title',
                value: 'Some value here',
            },
            {
                name: '\u200b',
                value: '\u200b',
                inline: false,
            },
            {
                name: 'Inline field title',
                value: 'Some value here',
                inline: true,
            },
            {
                name: 'Inline field title',
                value: 'Some value here',
                inline: true,
            },
            {
                name: 'Inline field title',
                value: 'Some value here',
                inline: true,
            },
        ],
        timestamp: new Date(),
        footer: {
            text: 'Some footer text here',
            icon_url: 'https://i.imgur.com/wSTFkRM.png',
        },
    };
    
    message.channel.send('fart');
    



  },
};