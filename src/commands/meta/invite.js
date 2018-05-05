const {Command} = require('discord.js-commando');
const {MessageEmbed} = require('discord.js');

module.exports = class InviteCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'invite',
      aliases: ['invite'],
      group: 'meta',
      memberName: 'invite',
      description: 'invite this bot to your server',
      examples: ['invite']
    });
  }

  run (msg) {
    const embed = new MessageEmbed();

    embed
      .setAuthor(this.client.user.tag, this.client.user.displayAvatarURL())
      .setColor('#ec40df')
      .addField('Invite Link:', '[Invite me to your server!](https://discordapp.com/api/oauth2/authorize?client_id=284399078165708802&permissions=1141230657&scope=bot)');
    
    return msg.embed(embed);
  }
};