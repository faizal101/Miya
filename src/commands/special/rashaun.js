const {Command} = require('discord.js-commando');

const gamesInstalled = [
  'Destiny 2', 'Battlefield 1', 'Black Ops 3',
  'Black Ops 4', 'Assassin\'s Creed: Origins',
  'Fortnite', 'Grand Theft Auto V', 'Grand Theft Auto: San Andreas',
  'A Way Out', 'Beyond Two Souls',
  'Hitman', 'Naruto: Ultimate Ninja Storm Trilogy'
];

module.exports = class RashaunCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'rashaun',
      group: 'special',
      aliases: ['rash', 'rashaud'],
      memberName: 'rashaun',
      description: 'Randomly picks a game because Rashaun is bad at choosing what game to stream',
      examples: ['8ball']
    });
  }

  run (msg) {
    const string = Math.floor(Math.random() * gamesInstalled.length);

    msg.channel.send(`Rashaun you should stream **${gamesInstalled[string]}** <:kannapanda:463812152193449994>`);
  }
};