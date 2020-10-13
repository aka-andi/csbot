module.exports = {
    name: 'man',
    description: "man command",
    execute(message, args) {
        message.channel.send({
            embed: {
                title: "TARS Commands",
                fields: [{
                    name: "!problem",
                    value: "Get a random coding interview problem from LeetCode."
                },
                {
                    name: "!solution",
                    value: "Get a link to the solution for the most recent coding problem."
                },
                {
                    name: "!trivia",
                    value: "Get a random computer science trivia question from Tutorialspoint and CareerGuru99."
                },
                {
                    name: "!answer",
                    value: "Get the answer to the most recent trivia question."
                },
                {
                    name: "!alerts",
                    value: "Toggle on/off the new career opportunity alerts."
                }
                ]
            }
        });
    }
}