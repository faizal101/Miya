const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if(err) console.error(err);
  let jsfiles = files.filter(f => f.split(".").pop() === "js");
  if(jsfiles.length <= 0) {
    console.log("No commands to load");
    return;
  }
  console.log(`Loading ${jsfiles.length} commands!`);

  jsfiles.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    bot.commands.set(props.help.name, props);
  });
});

bot.on("ready", async () => {
  console.log(`Bot is ready~ ${bot.user.username}`);
});

bot.on("message", msg => {
  if(msg.author === bot.user) return;

  let messageArray = msg.content.split(/\s+/g);
  let command = messageArray[0]
  let args = messageArray.slice[1]
  let cmd = bot.commands.get(command.slice(1));
  if(cmd) cmd.run(bot, msg, args);
});

bot.login(config.token)
