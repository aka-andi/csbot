module.exports = {
    name: 'answer',
    description: "answer command",
    execute(message, args){
        message.channel.send('This command returns the answer to the last CS trivia question');
    }
}