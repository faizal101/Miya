const { Command } = require("discord.js-commando");
const { MessageEmbed } = require("discord.js");
const Safebooru = require("danbooru");

module.exports = class SafebooruCommand extends Command {
  constructor(client) {
    super(client, {
      name: "safebooru",
      aliases: ['sb','safe', 'sfw'],
      group: "search",
      memberName: "sanfebooru",
      description: "like danbooru, but sfw images",
      examples: ["safeboru kantoku"],
      args: [
        {
          key: "search",
          prompt: "Input a tag to search",
          type: "string"
        }
      ]
      });
  }
  async run (msg, {search}) {
    const embed = new MessageEmbed();
    const booru = new Safebooru('https://safebooru.donmai.us/');
    const posts = await booru.posts({ tags: search, limit: 5, random:true });
    const post = posts[0];
    embed
      .setAuthor("Safebooru", "https://qt-anime-grils.is-serious.business/555270.png")
      .setColor("#ec40df")
      .setTitle("Click here to view in your browser")
      .setURL(`https://safebooru.donmai.us/posts/${post.id}`)
      .setImage(post.large_file_url)
      .addField("Score:", post.score, true)
      .addField("Rating:", "safe", true)
      .addField("Artist:", `[${post.tag_string_artist}](https://safebooru.donmai.us/posts/?tags=${post.tag_string_artist})`, true)
      .addField("File Fromat:", post.file_ext, true)
      .setFooter(`Post ID: ${post.id}`, this.client.user.displayAvatarURL())
    return msg.embed(embed);
  }
};
