const path = require('path');
const config = require(path.join(__dirname, 'config.json'));
const Commando = require('discord.js-commando');
const sqlite = require('sqlite');

const bot = new Commando.Client({
  'commandPrefix': config.prefix,
  'unknownCommandResponse': false,
  'owner': '134309348632559616',
  'disableEveryone': true,
  'selfbot': false
});

bot.setProvider(
  sqlite.open(path.join(__dirname, 'settings.sqlite3')).then(db => new Commando.SQLiteProvider(db))
 ).catch(console.error);

bot.registry
  .registerGroups([
    ['misc'],
    ['random'],
    ['meta'],
    ['search']
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
  bot.user.setActivity('kradness & reol', {'type': 'LISTENING'});
});

bot.login(config.token);

// TODO MTG command, music playback, avatar
