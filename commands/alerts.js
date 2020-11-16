// Alerts command module to perform the CS Internship Alerts feature
// Uses the Discord API and Opportunities Scraper
const Discord = require('discord.js');
const scraper = require('./../opportunities');

var alertsOn = false; // feature's ON/OFF status that is toggled by the user
var interval; // ID for using setInterval + clearInterval

// Flip the status of alertsOn via user command
function toggleStatus() {
    status = (alertsOn == true) ? false : true;
    return status;
}

// Upon command invocation, toggle the status and if ON, send alerts from the scraper
function execute(message) {
    alertsOn = toggleStatus()
    if (!alertsOn) { // stop scheduled messages when OFF
        clearInterval(interval);
        message.channel.send('CS Internship Alerts are now OFF');
    }
    else { // send scheduled alert messages when ON
        message.channel.send('CS Internship Alerts are now ON');
        interval = setInterval(async function () {
            try {
                const data = await scraper.scrape()
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

// Export functions to the command handler and test file
module.exports = {
    name: 'alerts',
    description: "alert command",
    getStatus() {
        return alertsOn;
    },
    toggleStatus: toggleStatus,
    execute: execute
}