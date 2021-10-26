// Thanks to https://github.com/DeltaCoderr/KarmaBot/blob/main/Commands/Fun/weather.js . This code belongs to them.

const Discord = require('discord.js')

module.exports = {
    commands: ['weather'],
    description: 'Get to know a weather of a place!',
    expectedArgs: '',
    permissionError: '',
    minArgs: 0,
    maxArgs: 0,
    callback: (message , arguments , text) => {

        message.reply("This command isn't ready yet...")

        // if (args.length === 0) {
        //     let errorembed = new MessageEmbed()
        //         .setTitle("Error :cry:")
        //         .setDescription("Please enter a location!")
        //         .setColor(config.embedcolor)
        //         .setTimestamp()
        //     return message.channel.send(errorembed);
        // }

        // weather.find({ search: args.join(" "), degreeType: 'C' }, function (err, result) {

        //     if (result.length === 0) {
        //         let errorembed = new MessageEmbed()
        //             .setTitle("Error :cry:")
        //             .setDescription("Please enter a vaild location!")
        //             .setColor(config.embedcolor)
        //             .setTimestamp()
        //         return message.channel.send(errorembed);
        //     }

        //     var current = result[0].current;
        //     var location = result[0].location;
        //     if (err) {
        //         let errorembed = new MessageEmbed()
        //             .setTitle("Error :cry:")
        //             .setDescription("Please enter a vaild location!")
        //             .setColor(config.embedcolor)
        //             .setTimestamp()
        //         return message.channel.send(errorembed);
        //     }

        //     let embed = new MessageEmbed()
        //         .setDescription(`**${current.skytext}**`)
        //         .setAuthor(`Weather for ${current.observationpoint}`)
        //         .setThumbnail(current.imageUrl)
        //         .setColor(config.embedcolor)
        //         .addField('Timezone', `UTC${location.timezone}`, true)
        //         .addField('Degree Type', location.degreetype, true)
        //         .addField('Temperature', `${current.temperature} Degrees`, true)
        //         .addField('Feels Like', `${current.feelslike} Degrees`, true)
        //         .addField('Winds', current.winddisplay, true)
        //         .addField('Humidity', `${current.humidity}%`, true)
        //         .setTimestamp()
        //     message.channel.send(embed)
        // }
    },
    permissions: '',
    requiredRoles: [],   
}