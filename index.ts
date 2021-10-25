// ts-node index.ts

import DiscordJS , { Intents } from 'discord.js'

import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({intents: [ Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES ]})

client.on('ready' , () => {
    console.log('Ready!');

    const guildId = '788997544868708352'
    const guild = client.guilds.cache.get(guildId)
    let commands

    if(guild){
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    commands?.create({
        name: 'ping',
        description: 'Used to check if bot is responding!',
    })

    client.on('interactionCreate' , async(interaction) => {
        if(!interaction.isCommand()){
            return;
        }

        const { commandName , options } = interaction

        if(commandName === 'ping'){
            interaction.reply({
                content: 'Pong!',
                ephemeral: false,
            })
        }
    })
})

client.on('messageCreate' , (message) => {
    if(message.content === '>ping'){
        message.reply({
            content: 'Pong!'
        })
    }
})

client.login(process.env.TOKEN)