module.exports = ( client ) => {
    const channelId = '874837272372052028' // General Chat
    const targetChannelId = '874849338730381342' // Server Rules

    client.on('guildMemberAdd' , (member) => {
        const message = `Please welcome <@${
            member.id
          }> to the server! Please check out ${member.guild.channels.cache
            .get(targetChannelId)
            .toString()}`
            
        const channel = member.guild.channels.cache.get(channelId)
        channelId.send(message)
    })
}