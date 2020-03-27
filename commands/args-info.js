module.exports = {
  name: 'args-info',
  description: 'Gives info on arguments',
  execute(message, args) {
    if (args[0] === 'foo') {
      return message.channel.send('bar');
    }

    message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
  }
};