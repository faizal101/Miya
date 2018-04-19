const config = require("./config.json");
const Commando = require("discord.js-commando");
const path = require("path");
// const sqlite = require('sqlite');


const bot = new Commando.Client({
    commandPrefix: config.prefix,
    unknownCommandResponse: false,
    owner: "134309348632559616",
    disableEveryone: true,
  	selfbot: false
});

/**
 * This does not have utmost priority but you'll want it eventually as it stores the guild and global settings
 */
/*client.setProvider(
	sqlite.open(path.join(__dirname, 'settings.sqlite3')).then(db => new Commando.SQLiteProvider(db))
).catch(console.error);*/

bot.registry
    .registerGroups([
        ["misc", "Miscellanous, where commands don't have a place to go"],
        ["random", "Random, where all the rng happens "],
        ["meta", "Meta and Information commands are found here "]
    ])
    .registerDefaultGroups()
		.registerDefaultTypes()
    .registerDefaultCommands({
        "help": true,
        "prefix": true,
        "ping": true,
        "eval_": true,
        "commandState": false
      })
    .registerCommandsIn(path.join(__dirname, "commands"));

bot.on("ready", () => {
    console.log(`Bot is ready~ ${bot.user.tag} (${bot.user.id})`);
    bot.user.setActivity("kradness & reol", {type: "LISTENING"})
});

bot.login(config.token)

//TODO MTG command, configurable server specific prefix, booru command
