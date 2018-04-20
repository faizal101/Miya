const {MessageEmbed} = require('discord.js'), 
  {Command} = require('discord.js-commando');

module.exports = class AvatarCommand extends Command {
  constructor (client) {
    super(client, {
      'name': 'avatar',
      'memberName': 'avatar',
      'group': 'misc',
      'description': 'Gets the avatar from a user',
      'format': 'MemberID|MemberName(partial or full) [ImageSize]',
      'examples': ['avatar Favna 2048'],
      'guildOnly': true,
      'args': [
        {
          'key': 'member',
          'prompt': 'What user would you like to get the avatar from?',
          'type': 'member'
        },
        {
          'key': 'size',
          'prompt': 'What size do you want the avatar to be? (Valid sizes: 128, 256, 512, 1024, 2048)',
          'type': 'integer',
          'default': 1024,
          'validate': (size) => {
            const validSizes = ['128', '256', '512', '1024', '2048'];

            if (validSizes.includes(size)) {
              return true;
            }

            return `Has to be one of ${validSizes.join(', ')}`;
          }
        }
      ]
    });
  }

  fetchExt (str) {
    return str.substring(str.length - 14, str.length - 8);
  }

  run (msg, args) {
    const ava = args.member.user.displayAvatarURL({'size': args.size}),
      embed = new MessageEmbed(),
      ext = this.fetchExt(ava);

    embed
      .setColor(msg.guild ? msg.guild.me.displayHexColor : '#A1E7B2')
      .setImage(ext.includes('gif') ? `${ava}&f=.gif` : ava)
      .setTitle(args.member.displayName)
      .setURL(ava)
      .setDescription(`[Direct Link](${ava})`);

    return msg.embed(embed);
  }
};