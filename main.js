const Discord = require('discord.js');
const bot = new Discord.Client();

bot.commands = new Discord.Collection();
const botCommands = require('./commands');
Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
});

bot.once('ready', () => {
    console.log('bot is online!');
});

const config = require('./config.json');
const prefix = config.prefix;
bot.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    try {
        bot.commands.get(command).execute(message, args);
    } catch (error) {
        message.reply('There was an error trying to execute that command!');
    }
});

bot.login(config.token);
//test 1 2 3 gkjghkmgmj
