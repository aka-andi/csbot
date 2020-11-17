module.exports = {
    name: 'solution',
    description: "solution command",
    execute(message) {
        const problem = require('./problem.js')
        if (problem.solution != undefined) {
            message.channel.send({
                embed: {
                    title: "Coding Interview Practice!",
                    description: '[View Solution for ' + problem.name + '](' + problem.solution + ')'
                }
            });
        }
        else {
            message.reply('No coding problem has been given yet.');
        }
    }
}