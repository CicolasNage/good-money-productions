module.exports = {
  name: 'beep',
  description: 'beep aye',
  execute(message, args) {
    message.channel.send('Beep aye');
  },
};