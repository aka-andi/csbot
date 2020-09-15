const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';  //prefix

client.once('ready', () => {
    console.log('bot is online!');
});

client.on('message', message =>{    // message from bot
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong');
    } else if (command == 'youtube'){
        message.channel.send('https://www.youtube.com');
    }
    // use elif for more commands...
});

client.login('NzU1NTY5ODM2OTc3MDI5MjEx.X2FNPg.Sh69gAmBopWRz8KYsggJXrV5Nbc');
