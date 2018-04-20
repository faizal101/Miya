const { MessageEmbed } = require("discord.js");

module.exports = class ReplyCommand extends MessageEmbed {
    constructor(client) {
        super(client, {
            name: "stat",
            group: "meta",
            memberName: "stat",
            description: "Stats about the bot",
            examples: ["stat"]
        });
    }

    run(msg) {
      const embed = new MessageEmbed()
      .setAuthor(this.client.user.tag, this.client.user.displayAvatarURL)
      .setColor(0xEC40DF)
      .setFooter(`Requested by: ${msg.author.tag}`, msg.author.displayAvatarURL)
      .setTimestamp()
      .addField("Info: ", `This bot is in ${this.client.guilds.size} guilds \nCoded in discord.js \nA bot made for fun by Kuuhaku#4503`)
      .addField("GitHub", "Check out my code on [GitHub!](https://github.com/faizal101/ThatBotJS)")
      return msg.embed(embed);
    };
};
