module.exports = {
    name: 'solution',
    description: "solution command",
<<<<<<< HEAD
    execute(message, args){
        message.channel.send('This command returns a link to ' +
        'the solution for the last sent LeetCode problem.');
=======
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
>>>>>>> 6bce4d04efa81a2508b883c700e7a49114e55b8c
    }
}