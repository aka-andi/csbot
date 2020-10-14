module.exports = {
    name: 'solution',
    description: "solution command",
    execute(message, args) {
        const problem = require('./problem.js')
        if (problem.solution != undefined) {
            message.channel.send({
                embed: {
                    title: "Coding Interview Practice!",
                    fields: [{
                        name: problem.name,
                        value: '[View Solution](' + problem.solution + ')'
                    }]
                }
            });
        }
        else {
            message.reply('No coding problem has been given yet.');
        }
    }
}