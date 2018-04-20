const path = require('path'),
  {Command} = require('discord.js-commando');

module.exports = class SmugCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'smug',
      group: 'random',
      memberName: 'smug',
      description: 'posts an anime smug',
      examples: ['smug']
    });
  }

  run (msg) {
    const smug = Math.floor(Math.random() * 71) + 1;

    msg.channel.send({
      files: [
        {
          attachment: `${path.join(__dirname, '../../../images/smug/')}${smug}.png`,
          name: `${smug}.png`
        }
      ]
    });
  }
};