const Discord = require('discord.js')

module.exports = {
    commands: ['ban'],
    description: 'Bans the user mentioned from the server',
    expectedArgs: '<@user>',
    permissionError: "You don't have `Administrator` permission!",
    minArgs: 1,
    maxArgs: 1,
    callback: (message , argumens , text) => {
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.ban()
            message.channel.send(`${tag} That user has been banned.`)
          } else {
            message.channel.send(`${tag} Please specify someone to ban.`)
        }   
    },
    permissions: 'ADMINISTRATOR',
    requiredRoles: ['Owner'],
}