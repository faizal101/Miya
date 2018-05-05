const path = require('path'),
  {Command} = require('discord.js-commando');

const grilinfo = [
  'Ena Komiya from Just Because!',
  'Mizuki Usami from Kono Bijutsubu ni wa Mondai ga Aru!',
  'Senju Muramasa from Eromanga-Sensei',
  'Vigne from Gabriel Dropout',
  'Nishikino Maki from Love Live',
  'Kurisu Makise from Steins;Gate',
  'Ai Nanasaki from Amagami SS',
  'Shirayuki from Akagami no Shirayukihime',
  'Saya Endou from Dagashi Kashi',
  'Yukari Akiyama from Girls und Panzer',
  'Zero from Zero kara Hajimeru Mahou no Sho',
  'Rin Shibuya from THE iDOLM@STER',
  'Charlotte Dunois from Infinite Stratos',
  'Megumin from Kono Subarashii Sekai ni Shukufuku wo!'
];

module.exports = class BestgrilCommand extends Command {
  constructor (client) {
    super(client, {
      name: 'bestgril',
      aliases: ['bestgirl'],
      group: 'random',
      memberName: 'bestgril',
      description: 'posts the best girl from an anime',
      examples: ['bestgril']
    });
  }

  run (msg) {
    const bestgril = Math.floor(Math.random() * 14) + 1;

    msg.channel.send(`__${grilinfo[bestgril - 1]}__`, {
      files: [
        {
          attachment: `${path.join(__dirname, '../../../images/bestgril/')}${bestgril}.jpg`,
          name: `${bestgril}.jpg`
        }
      ]
    });
  }
};