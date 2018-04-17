const { Command } = require("discord.js-commando");

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: "coin",
            group: "random",
            memberName: "coin",
            description: "Flip a coin",
            examples: ["coin"]
        });
    }

    run(msg) {
      var coin = function choose(){
        return (Math.floor(Math.random() * 2) === 0) ? "heads" : "tails";
      }
      msg.say(coin())
    };
};
