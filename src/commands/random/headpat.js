const fs = require('fs'),
  path = require('path'),
  {Command} = require('discord.js-commando');

module.exports = class HeadpatCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'headpat',
      aliases: ['pat'],
      group: 'random',
      memberName: 'headpat',
      description: 'headpats will solve everything',
      examples: ['headpat']
    });
  }

  run (msg) {
    const headpats = [];

    fs.readdirSync(path.join(__dirname, '../../../images/headpats/')).forEach((file) => {
      headpats.push(file);
    });

    const headpat = Math.floor(Math.random() * headpats.length) + 1;

    msg.channel.send({
      files: [
        {
          attachment: `${path.join(__dirname, '../../../images/headpats/')}${headpats[headpat]}`,
          name: headpats[headpat]
        }
      ]
    });
  }
};
