const { Command } = require("discord.js-commando");

const config = require("../../config.json");

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: "yay",
            group: "random",
            memberName: "yay",
            description: "posts an anime yay",
            examples: ["yay"]
        });
    }

    run(msg) {
      const yay = Math.floor(Math.random() * 26);
      msg.channel.send({
        files: [{
          attachment: `${config.yayPath}60322965_${yay}.png`,
          name: `${yay}.png`
        }]
      })
    };
};
