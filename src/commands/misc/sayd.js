const {Command} = require('discord.js-commando');

module.exports = class SayCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'sayd',
      group: 'misc',
      memberName: 'sayd',
      description: 'Like say, but your message gets deleted afterwards (provided I have the permissions).',
      examples: ['sayd hey!'],
      args: [
        {
          key: 'text',
          prompt: 'You need to type something for me to say the same thing',
          type: 'string'
        }
      ]
    });
  }

  run (msg, {text}) {
    if (msg.deletable) {
      msg.delete();
    }

    return msg.say(text);
  }
};