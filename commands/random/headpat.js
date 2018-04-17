const { Command } = require("discord.js-commando");

const config = require("../../config.json");
var headpats = [];
const fs = require("fs");
fs.readdirSync(config.headpatPath).forEach(file => {
  headpats.push(file);
});

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: "headpat",
            group: "random",
            memberName: "headpat",
            description: "headpats will solve everything",
            examples: ["headpat"]
        });
    }

    run(msg) {
      const headpat = Math.floor(Math.random() * headpats.length) + 1
      msg.channel.send({
        files: [{
          attachment: `${config.headpatPath}${headpats[headpat]}`,
          name: headpats[headpat]
        }]
      })
    };
};
