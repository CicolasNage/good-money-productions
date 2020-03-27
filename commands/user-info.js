module.exports = {
  name: 'user-info',
  description: 'Shows info about your chucklefuck looking ass',
  execute(message, args) {
    message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
  },
};