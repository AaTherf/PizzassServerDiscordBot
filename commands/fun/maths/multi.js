module.exports = {
    commands: ['multi', 'multiplication'],
    description: "Multiplies Two Numbers",
    expectedArgs: '<num1> <num2>',
    permissionError: '',
    minArgs: 2,
    maxArgs: 2,
    callback: (message, arguments, text) => {
      const num1 = +arguments[0]
      const num2 = +arguments[1]
  
      message.reply(`The product is ${num1 * num2}`)
    },
    permissions: '',
    requiredRoles: [],
  }