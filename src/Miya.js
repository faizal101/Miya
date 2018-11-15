const Database = require('better-sqlite3');
const {Client, SyncSQLiteProvider} = require('discord.js-commando');
const path = require('path');

require('dotenv').config({path: path.join(__dirname, '.env')});

const bot = new Client({
  'commandPrefix': process.env.prefix,
  'unknownCommandResponse': false,
  'owner': '134309348632559616',
  'disableEveryone': true,
  'selfbot': false
});

const db = new Database(path.join(__dirname, 'settings.sqlite3'));

bot.setProvider(
  new SyncSQLiteProvider(db)
);

bot.registry
  .registerGroups([
    ['misc'],
    ['random'],
    ['meta'],
    ['search'],
    ['music'],
    ['special']
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

bot.on('error', console.error);

bot.login(process.env.token);

// TODO MTG command, music playback, spoiler command