module.exports = {
    name: 'bigmac',
    description: 'If I had a Big Mac...',
    execute(message, args) {
      message.channel.send("If I had a Bic Mac I'd eat it.  ugh mmm ugh mmm", {tts: true});
    },
  };