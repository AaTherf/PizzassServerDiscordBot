const Discord = require('discord.js')

module.exports = {
    commands: ['server-info' , 'serverinfo'],
    description: 'Information about the server!',
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    callback: (message , arguments , text ) => {
        const { guild } = message

        const { name, region, memberCount, owner, afkTimeout } = guild
        const icon = guild.iconURL()
    
        const embed = new Discord.MessageEmbed()
          .setTitle(`Server info for "${name}"`)
          .setThumbnail(icon)
          .addFields(
            {
              name: 'Members',
              value: memberCount,
            },
            {
              name: 'Owner',
              value: owner.user.tag,
            },
            {
              name: 'AFK Timeout',
              value: afkTimeout / 60,
            }
          )
    
        message.channel.send(embed)
    },
    permissions: '',
    requiredRoles: [],
}