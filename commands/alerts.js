var alertsOn = true;
var interval;
module.exports = {
    name: 'alerts',
    description: "alert command",
    execute(message, args) {
        alertsOn = (alertsOn == true) ? false : true;
        if (!alertsOn) {
            clearInterval(interval);
            message.channel.send('Career opportunity alerts are now OFF');
        }
        else {
            message.channel.send('Career opportunity alerts are now ON');
            interval = setInterval(function () {
                message.channel.send("testing")
            }, 5000);
        }
    }
}