module.exports = {
  name: 'role',
  description: 'Nobody knows',
  args: true,
  usage: '<user> <role>',
  execute(message, args) {
    message.channel.send('Beep aye');
  },
};