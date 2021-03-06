module.exports = {
    commands: ['sub', 'subtraction'],
    description: 'Subtracts two numbers',
    expectedArgs: '<num1> <num2>',
    permissionError: '',
    minArgs: 2,
    maxArgs: 2,
    callback: (message, arguments, text) => {
      const num1 = +arguments[0]
      const num2 = +arguments[1]
  
      message.reply(`The difference is ${num1- num2}`)
    },
    permissions: '',
    requiredRoles: [],
  }