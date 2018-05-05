const path = require('path'),
  {Command} = require('discord.js-commando');

module.exports = class YayCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'yay',
      group: 'random',
      memberName: 'yay',
      description: 'posts an anime yay',
      examples: ['yay']
    });
  }

  run (msg) {
    const yay = Math.floor(Math.random() * 26) + 1;

    msg.channel.send({
      files: [
        {
          attachment: `${path.join(__dirname, '../../../images/yay/')}${yay}.png`,
          name: `${yay}.png`
        }
      ]
    });
  }
};