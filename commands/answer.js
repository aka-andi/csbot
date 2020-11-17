
module.exports = {
    name: 'answer',
    description: "answer command",
    execute(message) {
        const trivia = require('./trivia.js')
        if (trivia.question != undefined) {
            message.channel.send({
                embed: {
                    title: "CS Trivia!",
                    fields: [{
                        name: trivia.question,
                        value: trivia.answer
                    }]
                }
            });
        }
        else {
            message.reply('No trivia question has been asked yet.');
        }
    }
}