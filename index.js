require('dotenv').config();
const Discord = require('discord.js');
const axios = require('axios');
const client = new Discord.Client({
    intents: 3276799
})

console.log(process.env);

client.on('ready', () => {
    console.log("Kid A is now online.")
});

client.on('messageCreate', msg => {
    switch (msg.content) {
        case "-ping":
            msg.reply("Pong!");
            break;
    };
});

client.login(process.env.CLIENT_TOKEN);