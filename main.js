const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('bot is online!');
});

const config = require('./config.json');
const prefix = config.prefix;
client.on('message', message =>{ 
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if((command === 'problem') || (command === 'p')){
        client.commands.get('problem').execute(message, args);
    } else if ((command === 'solution') || (command === 's')){
        client.commands.get('solution').execute(message, args);
    }
    
});

client.login(config.token);
