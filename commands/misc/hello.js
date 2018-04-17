const { Command } = require("discord.js-commando");

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: "hello",
            group: "misc",
            memberName: "hello",
            description: "A hello world command",
            examples: ["hello"]
        });
    }

    run(msg) {
        return msg.say("Hello world!");
    };
};
