const { Command } = require('discord.js-commando');

// mind you this now has to be in the folder /path/to/bot/commands/group1

module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'hello',
            group: 'misc',
            memberName: 'hello',
            description: 'A hello world',
            examples: ['hello'],
          	ownerOnly: true // just adding this flag so no one but you can use it while testing
        });
    }

    run(msg) {
        return msg.say('Hello world!');
    }
};
