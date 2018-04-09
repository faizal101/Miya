const config = require("./config.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", () => {
  console.log(`Bot is ready~ ${bot.user.username}`);
});

bot.on("message", msg => {
  if (msg.author === bot.user) return;
  if (msg.content.startsWith(config.prefix + 'ping')) {
    msg.channel.send('pong!');
  }
});

bot.on("message", msg => {
  if (msg.content.startsWith(config.prefix + 'avatar')){
    msg.channel.send(msg.author.avatarURL);
  }
});

bot.login(config.token);
