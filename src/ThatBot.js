const path = require('path');
const Commando = require('discord.js-commando');
const sqlite = require('sqlite');

require('dotenv').config({path: path.join(__dirname, '.env')});

const bot = new Client({
  'commandPrefix': process.env.prefix,
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
    ['search'],
    ['music']
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

bot.login(process.env.token);

// TODO MTG command, music playback, avatar