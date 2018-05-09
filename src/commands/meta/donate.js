const {Command} = require('discord.js-commando'),
  {MessageEmbed} = require('discord.js');

module.exports = class donateCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'donate',
      aliases: ['patreon'],
      group: 'misc',
      memberName: 'donate',
      description: 'Patreon link to support the creator of this bot',
      examples: ['donate']
    });
  }

  run (msg) {
    const embed = new MessageEmbed();

    embed
      .setAuthor(this.client.user.tag, this.client.user.displayAvatarURL())
      .setColor('#ec40df')
      .setTimestamp()
      // .setFooter(`Owner: ${this.client.owners[0].tag}`)
      .addField('Love this bot? Want new features?', `[Click here](https://www.patreon.com/faizal101) to support ${this.client.owners[0].username}`);

    return msg.embed(embed);
  }
};