const {Command} = require('discord.js-commando');
const {MessageEmbed} = require('discord.js');

module.exports = class avatarCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'avatar',
      group: 'misc',
      memberName: 'avatar',
      description: 'Get the avatar pic of a user in the server',
      examples: ['avatar'],
      args: [
        {
          key: 'member',
          prompt: 'You need to type in a user',
          type: 'member',
          default: ''
        }
      ]
    });
  }

  run (msg, {member}) {
    let user;
    let ava;

    if (member === '') {
      user = msg.author.username;
      ava = msg.author.displayAvatarURL({size: 1024});
      ava = ava.replace('webp', 'png'); 
    } else {
      user = member.displayName;
      ava = member.user.displayAvatarURL({size: 1024});
      ava = ava.replace('webp', 'png'); 
    }

      
    const embed = new MessageEmbed();

    embed
      .setAuthor(`${user}'s Avatar: `)
      .setColor('#ec40df')
      .setTitle('Click here to view in your browser')
      .setURL(ava)
      .setImage(ava);
        
    console.log(ava);

    return msg.embed(embed);
  }
};