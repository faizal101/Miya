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

  async run (msg, {moosic}) {
    var voiceChannel = msg.member.voiceChannel;
    const stream = (moosic === 'nqrse' ? 'https://youtu.be/FYp_rjMenpM' : moosic === 'kawaiistep' ? 'https://youtu.be/v0g1xzCpEOM' : moosic === 'burninglove' ? 'https://youtu.be/1fhuTi4TGIQ': undefined);
    if (stream === undefined){
      msg.say('choose one of the following: nqrse, kawaiistep or burninglove');
    }
    if (voiceChannel) {
      await voiceChannel.join().then(connection => {
      const dispatcher = connection.play(ytdl(stream));
      dispatcher.once('end', () => voiceChannel.leave());
      })
      } else {
        msg.say("you need to join a voice channel!");
    }
  }
};
