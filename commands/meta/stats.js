const { Command } = require("discord.js-commando");
const Discord = require("discord.js")

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: "stats",
            group: "meta",
            memberName: "stats",
            description: "Stats about the bot",
            examples: ["stats"]
        });
    }

    run(msg) {
      const embed = new Discord.RichEmbed()
      .setAuthor(this.client.user.tag, this.client.user.avatarURL)
      .setColor(0xEC40DF)
      .setFooter(`Requested by: ${msg.author.tag}`, `${msg.author.avatarURL}`)
      .setTimestamp()
      .addField("Info: ", `This bot is in ${this.client.guilds.size} guilds \nCoded in discord.js \nA bot made for fun by Kuuhaku#4503`)
      .addField("GitHub", "Check out my code on [GitHub!](https://github.com/faizal101/ThatBotJS)", true)
      return msg.say({embed});
    };
};
