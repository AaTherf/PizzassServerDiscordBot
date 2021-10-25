module.exports = {
    commands: 'ping',
    description: 'Use this to know if the bots responding or not!',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
      message.reply('Pong!')
    },
  }