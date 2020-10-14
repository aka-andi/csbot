var alertsOn = true;
module.exports = {
    name: 'alerts',
    description: "alert command",
    execute(message, args) {
        alertsOn = (alertsOn == true) ? false : true;
        var status = (alertsOn) ? 'ON' : 'OFF';
        message.channel.send('Career opportunity alerts are now ' + status);
    }
}