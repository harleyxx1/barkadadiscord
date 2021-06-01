const Discord = require('discord.js');
const dotenv = require('dotenv');
const client = new Discord.Client();
const { sendMsg } = require('./discord/index');

dotenv.config();

client.login(process.env.DISCORD_TOKEN)

client.on("message", msg => {
    sendMsg(msg)
})