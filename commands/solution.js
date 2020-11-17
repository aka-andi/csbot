module.exports = {
    name: 'solution',
    description: "solution command",
    execute(message, args){
        message.channel.send('This command returns a link to ' +
        'the solution for the last sent LeetCode problem.');
    }
}