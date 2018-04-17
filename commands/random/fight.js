const { Command } = require("discord.js-commando");

const config = require("../../config.json");

fightStrings = [", but instead slipped on some jam and fell right into a conveniently placed hole.",
                " with a transformer.", ", but creates a black hole and gets sucked in.",
                " with poutine.", ", but they slipped on a banana peel.",
                " and in the end, the only victor was the coffin maker.",
                ", and what a fight it is! Whoa mama!", ", with two thousand blades!",
                ", but he fell into a conveniently placed manhole!",
                ", but they tripped over a rock and fell in the ocean.",
                ", but they hurt themselves in confusion.", ". HADOUKEN!", " with a pillow.",
                " with a large fish.", ", but they stumbled over their shoelaces.", ", but they missed.",
                " with a burnt piece of toast.", ", but it wasn't every effective.",
                "and it was super effective!", ", but nothing happened.",
                ", while shouting out a move as if they're a main character from an anime.", ", but gave up halfway."]

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: "fight",
            group: "random",
            memberName: "fight",
            description: "Fight a user on the server",
            examples: ["fight @user"]
        });
    }

    run(msg) {
      const string = Math.floor(Math.random() * fightStrings.length);
      msg.channel.send(`${msg.author} is fighting ${msg.mentions.users.first()}${fightStrings[string]}`)
    };
};
