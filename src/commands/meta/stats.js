const {Command} = require('discord.js-commando'),
  {MessageEmbed} = require('discord.js'),
  {stripIndents} = require('common-tags');

module.exports = class StatsCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'stats',
      aliases: ['info'],
      group: 'meta',
      memberName: 'stats',
      description: 'Stats about the bot',
      examples: ['stats']
    });
  }

  run (msg) {
    const embed = new MessageEmbed();

    embed
      .setAuthor(this.client.user.tag, this.client.user.displayAvatarURL())
      .setColor('#ec40df')
      .setFooter(`Requested by: ${msg.author.tag}`, msg.author.displayAvatarURL())
      .setTimestamp()
      .addField('Info', stripIndents`This bot is in ${this.client.guilds.size} guilds
      Coded in discord.js
      A bot made for fun by ${this.client.owners[0].tag}`)
      .addField('GitHub', 'Check out my code on [GitHub!](https://github.com/faizal101/ThatBotJS)');

    return msg.embed(embed);
  }
};