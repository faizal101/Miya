const { Command } = require("discord.js-commando");

const config = require("../../config.json");

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: "smug",
            group: "random",
            memberName: "smug",
            description: "posts an anime smug",
            examples: ["smug"]
        });
    }

    run(msg) {
      const smug = Math.floor(Math.random() * 71) + 1;
      msg.channel.send({
        files: [{
          attachment: `${config.smugPath}${smug}.png`,
          name: `${smug}.png`
        }]
      })
    };
};
