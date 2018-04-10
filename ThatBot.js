const config = require("./config.json");
const Commando = require('discord.js-commando');
const path = require('path');

const bot = new Commando.Client({
    commandPrefix: config.prefix,
    unknownCommandResponse: false,
    owner: '134309348632559616',
    disableEveryone: true,
  	selfbot: false
});

bot.registry
    .registerGroups([
        ['misc', 'Miscellanous, where commands don\'t have a place to go']
    ])
    .registerDefaultGroups()
		.registerDefaultTypes()
    .registerDefaultCommands({
        'help': true,
        'prefix': true,
        'ping': true,
        'eval_': true,
        'commandState': true
      })
    .registerCommandsIn(path.join(__dirname, 'commands'));

bot.on('ready', () => {
    console.log(`Bot is ready~ ${bot.user.tag} (${bot.user.id})`);
});

bot.login(config.token)
