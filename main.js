const Discord = require('discord.js');
const bot = new Discord.Client();

const fs = require('fs');
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.once('ready', () => {
    console.log('bot is online!');
});

const config = require('./config.json');
const prefix = config.prefix;
bot.on('message', message =>{ 
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if((command === 'problem') || (command === 'p')){
        bot.commands.get('problem').execute(message, args);
    } else if ((command === 'solution') || (command === 's')){
        bot.commands.get('solution').execute(message, args);
    }
    
});

bot.login(config.token);
