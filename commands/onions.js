module.exports = {
    name: 'onions',
    description: 'All about silvered onions',
    execute(message, args) {
      message.channel.tts("No, they're called silvered onions.  Because they're silver.");
    },
  };