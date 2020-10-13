module.exports = {
    name: 'problem',
    description: "problem command",
    execute(message, args){
        message.channel.send('This command returns a random LeetCode problem.');
    }
}