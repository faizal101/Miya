const { Command } = require("discord.js-commando");

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
        return msg.say("A bot made by Kuuhaku#4503");
    };
};
