module.exports = {
    commands: ['slowmode' , 'slow'],
    description: 'Changes the slow mode of the channel.',
    expectedArgs: '<slowmode-time>',
    permissionError: "You don't have `Administrator` permission to use this command.",
    minArgs: 1,
    maxArgs: 1,
    callback: ( message , arguments , text ) => {

        run = (message , args ) => {
            const { channel } = message

            if(arguments.length < 1){
                message.reply('Pleaase provide a duration.')
                return
            }

            let duration = args.shift().toLowerCase()
            if(Duration === 'off'){
                duration = 0
            }

            if(isNaN(duration)){
                message.reply('Please provide either a number of seconds or the word "off".')
            }
            return

        }

        channel.setRateLimitPerUser(duration , args.join(' '))
        message.reply(`The slowmode of the channel has been set to ${duration}`)
        
    },
    permissions: 'ADMINISTRATOR',
    requiredRoles: ['874547726958858261'],
}