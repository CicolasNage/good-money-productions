module.exports = {
  name: 'prune',
  cooldown: 5,
  description: 'Remove the last n messages',
  execute(message, args) {
    const amount = parseInt(args[0]) + 1;

    if (isNaN(amount)) {
      return message.reply(`That doesn't seem to be a valid number`);
    } else if (amount <= 1 || amount > 100) {
      return message.reply(`You need to input a number between 2 and 100, bitch.`);
    } 

    message.channel.bulkDelete(amount, true)
      .catch(error => {
        console.log(error);
        message.channel.send(`There was an error trying to prune ${amount} messages from the channel`);
      });
  },
};