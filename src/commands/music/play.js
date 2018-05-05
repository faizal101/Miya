const {Command} = require('discord.js-commando');
const ytdl = require('ytdl-core');

module.exports = class PlayCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'play',
      group: 'misc',
      memberName: 'music',
      description: 'listen to some music',
      examples: ['play nqrse'],
      args: [
        {
          key: 'moosic',
          prompt: 'choose one of the following: nqrse, kawaiistep or burninglove',
          type: 'string'
        }
      ]
    });
  }

  // TODO: add a queue
  async run (msg, {moosic}) {
    const voiceChannel = msg.member.voiceChannel;
    const nqrse = 'https://youtu.be/UNRUFN6Be2w';
    const kawaiistep = 'https://youtu.be/v0g1xzCpEOM';
    const burninglove = 'https://youtu.be/1fhuTi4TGIQ';
    const stream = moosic === 'nqrse' ? nqrse : moosic === 'kawaiistep' ? kawaiistep : moosic === 'burninglove' ? burninglove : moosic;

    if (voiceChannel) {
      await voiceChannel.join().then((connection) => {
        if (stream) {
          msg.say(`Playing: ${stream}`);
          const dispatcher = connection.play(ytdl(stream));

          dispatcher.once('end', () => voiceChannel.leave());
        } else {
          msg.say('choose one of the following: nqrse, kawaiistep or burninglove');
        }
      });
    } else {
      msg.say('you need to join a voice channel!');
    }
  }
};