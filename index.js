const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const mongo = require('./mongo')
const loadCommands = require('./commands/load-commands')
const levels = require('./levels')

const welcome = require('./welcome')
const commandBase = require('./commands/command-base')

client.on('ready', async () => {
  console.log('The client is ready!')

  loadCommands(client)
  levels(client)
  
  const { prefix } = config

  client.user.setPresence({
    activity: {
      name: `"${prefix}help" for help!`,
    },
  })

  await mongo().then(mongoose => {
    try{
      console.log('Connected to Mongo!')
    } finally {
      mongoose.connection.close()
    }
  })

})

client.login(config.token)