module.exports = {
    name: 'trivia',
    description: "trivia command",
    execute(message, args) {
        message.channel.send('This command returns a random CS trivia question.');
    }
}