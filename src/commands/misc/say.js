const {Command} = require('discord.js-commando');

module.exports = class SayCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'say',
      group: 'misc',
      memberName: 'say',
      description: 'I say what you\'ll say',
      examples: ['say hey!'],
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