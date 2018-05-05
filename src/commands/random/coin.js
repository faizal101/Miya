const {Command} = require('discord.js-commando');

module.exports = class CoinCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'coin',
      aliases: ['flip'],
      group: 'random',
      memberName: 'coin',
      description: 'Flip a coin',
      examples: ['coin']
    });
  }

  run (msg) {
    const coin = function () {
      return Math.floor(Math.random() * 2) === 0 ? 'heads' : 'tails';
    };

    msg.say(coin());
  }
};