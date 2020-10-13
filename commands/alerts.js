module.exports = {
    name: 'alerts',
    description: "alert command",
    execute(message, args) {
        message.channel.send('This command toggles if the career opportunity' +
            'alerts are on or off.');
    }
}