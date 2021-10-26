module.exports = {
    commands: ['kick'],
    description: 'Kicks the user mentioned from the server',
    expectedArgs: '<@user>',
    permissionError: "You don't have `Administrator` permission!",
    minArgs: 1,
    maxArgs: 1,
    callback: (message , argumens , text) => {
        if (target) {
            const targetMember = message.guild.members.cache.get(target.id)
            targetMember.kick()
            message.channel.send(`${tag} That user has been kicked.`)
          } else {
            message.channel.send(`${tag} Please specify someone to kick.`)
        }   
    },
    permissions: 'ADMINISTRATOR',
    requiredRoles: ['874547726958858261'],
}

// module.exports = {
//     commands: ['kick'],
//     description: 'Kicks the user mentioned from the server.',
//     expectedArgs: '<@user>',
//     permissionError: "You don't have `ADMINISTRATOR` perrmission!",
//     minArgs: 1,
//     maxArgs: 1,
//     callback: (message , arguments , text) => {
//         const SownerID = ['891676861460017182']
//         if(member.id === SownerID){
//             if (target) {
//                 const targetMember = message.guild.members.cache.get(target.id)
//                 targetMember.kick()
//                 message.channel.send(`${tag} That user has been kicked.`)
//             } else {
//                 message.channel.send(`${tag} Please specify someone to kick.`)
//             }
//         } else{
//             message.channel.send(`${tag} You don't have the approiate permissions to usr this command!`)
//         }
//     },
//     permissions: 'ADMINISTRATOR',
//     requiredRoles: ['Owner'],
// }