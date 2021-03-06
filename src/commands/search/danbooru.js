const {Command} = require('discord.js-commando');
const {MessageEmbed} = require('discord.js');
const Danbooru = require('danbooru');

module.exports = class DanCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'danbooru',
      aliases: ['db', 'dan'],
      group: 'search',
      memberName: 'danbooru',
      description: 'search for anime pics on danbooru',
      examples: ['danbooru kyuri'],
      args: [
        {
          key: 'search',
          prompt: 'Input a tag to search',
          type: 'string'
        }
      ]
    });
  }

  async run (msg, {search}) {
    if (!msg.channel.nsfw && (search.includes('ing:q') || search.includes('ing:e') || search.includes('-rating:s'))) {
      return msg.say('This channel is not NSFW. Use the `rating:q`, `rating:e` or `-rating:s` tags in a NSFW channel.');
    }

    const login = process.env.dbLogin;
    const key = process.env.dbKey;
    const booru = new Danbooru(`${login}:${key}`);
    const embed = new MessageEmbed();
    const posts = await booru.posts({
      tags: `${search} ${!msg.channel.nsfw && !search.includes('ing:s') ? 'rating:s' : ''}`,
      limit: 5,
      random: true
    });
    const post = posts[0];

    try {
      embed
        .setAuthor('Danbooru', 'https://qt-anime-grils.is-serious.business/555270.png', 'https://danbooru.donmai.us/')
        .setColor('#ec40df')
        .setTitle('Click here to view in your browser')
        .setURL(`https://danbooru.donmai.us/posts/${post.id}`)
        .setImage(post.large_file_url)
        .addField('Score:', post.score, true)
        .addField('Rating:', post.rating === 's' ? 'safe' : post.rating === 'q' ? 'questionable' : 'explicit', true)
        .addField('Artist:', `[${post.tag_string_artist}](https://danbooru.donmai.us/posts/?tags=${post.tag_string_artist})`, true)
        .addField('File Fromat:', post.file_ext, true)
        .setFooter(`Post ID: ${post.id}`, this.client.user.displayAvatarURL({format: 'png'}));
        
      return msg.embed(embed);
    } catch (id) {
      return msg.say(search.split(' ').length <= 6 ? 'No Results Found.' : 'Danbooru Gold only allows you to search with a maximum of six tags. Consider donating if you want to use more than six tags.');
    }
  }
};