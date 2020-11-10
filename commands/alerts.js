const Discord = require('discord.js');
const scrape = require('./../opportunities');
var alertsOn = false;
var interval;
function toggleStatus() {
    status = (alertsOn == true) ? false : true;
    return status;
}
module.exports = {
    name: 'alerts',
    description: "alert command",
    getStatus() {
        return alertsOn;
    },
    toggleStatus: toggleStatus,
    execute(message, args) {
        alertsOn = toggleStatus()
        if (!alertsOn) {
            clearInterval(interval);
            message.channel.send('CS Internship Alerts are now OFF');
        }
        else {
            message.channel.send('CS Internship Alerts are now ON');
            interval = setInterval(async function () {
                try {
                    const data = await scrape()
                    if ((data.length != undefined) && (data.length != 0)) {
                        const embed = new Discord.MessageEmbed()
                        embed.setTitle('New CS Internship Postings!')
                        embed.setDescription("Last updated: " + new Date().toLocaleString())
                        data.forEach(element => {
                            embed.addField(element.title, "https://www.indeed.com" + element.link);
                        });
                        message.channel.send({ embed });
                    }
                }
                catch (err) {
                    console.log(err);
                }
            }, 5000); // 5 second intervals
        }
    }
}