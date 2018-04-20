const {Command} = require('discord.js-commando');

const eightBallStrings = [
  'It is certain', 'It is decidedly so', 'Without a doubt',
  'Yes definitely', 'You may rely on it',
  'As I see it, yes', 'Most likely', 'Outlook good',
  'Yep', 'Signs point to yes',
  'Reply hazy try again', 'Ask again later',
  'Better not tell you now', 'Cannot predict now',
  'Concentrate and ask again', 'Don\'t count on it',
  'My reply is no', 'My sources say no',
  'Outlook not so good', 'Very doubtful'
];

module.exports = class EightballCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'eightball',
      group: 'random',
      aliases: ['8ball'],
      memberName: 'eightball',
      description: 'The magic ball knows the answer to everything',
      examples: ['8ball'],
      args: [
        {
          key: 'question',
          prompt: 'You need to ask a question',
          type: 'string'
        }
      ]
    });
  }

  run (msg, {question}) {
    const string = Math.floor(Math.random() * eightBallStrings.length);

    msg.channel.send(`${msg.author.username} asked: ${question} \n8ball: ${eightBallStrings[string]}`);
  }
};