const Discord = require('discord.js');

var alertsOn = false;
var interval;
module.exports = {
    name: 'alerts',
    description: "alert command",
    execute(message, args) {
        alertsOn = (alertsOn == true) ? false : true;
        if (!alertsOn) {
            clearInterval(interval);
            message.channel.send('Career opportunity alerts are now OFF');
        }
        else {
            message.channel.send('Career opportunity alerts are now ON');
            interval = setInterval(function () {
                const data = require('./../opportunities.js')
                if (data.length != undefined) {
                    const embed = new Discord.MessageEmbed()
                    embed.setTitle('New Career Opportunities!')
                    embed.setDescription("Last updated: " + new Date().toLocaleString())
                    data.forEach(element => {
                        embed.addField(element.title, "https://www.indeed.com" + element.link);
                    });
                    message.channel.send({ embed });
                }
            }, 10000);

        }
    }
}