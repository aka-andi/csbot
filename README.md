# CS 321-004 Team 8 Semester Project

Brenda Henriquez, Andi Motas, Firaol Tolessa

A *Discord* bot that prepares computer science students for their career by providing commands to receive a link to a random technical interview coding problem from *LeetCode*, a data structures trivia question from *Tutorialspoint* and *Career Guru 99*, and alerts about new career opportunities from *Indeed*. The bot allows the users in the *Discord* server to collaborate on coding questions, which builds a community in which peers can discuss and encourage each other for interview preparation. 

## Installation

First, install Discord.js:
`npm install discord.js`

Then, install Puppeteer:
`npm install --save puppeteer`

Lastly, install Mocha and Chai for testing:
`npm install --save-dev mocha chai`

## Running the bot

Once you installed all of the necessary node modules, within the *csbot* directory run the command:
`node .`
You should receive a console message saying *"The bot is online!"*

## Running test files

Add test files to the *tests* directory and run the command:
`npm test`

## Integrating the bot to your Discord Server

[Link to authorize the bot](https://discord.com/api/oauth2/authorize?client_id=755569836977029211&permissions=22528&scope=bot)

To start, send a message saying `!man` to get a listing of all the bot commands.