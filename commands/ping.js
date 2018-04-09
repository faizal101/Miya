const config = require("../config.json");
module.exports.run =  (bot, msg, args) => {
  if (msg.author === bot.user) return;
  if (msg.content.startsWith(config.prefix + 'ping')) {
    msg.channel.send('pong!');
    }
};

module.exports.help = {
  name: "ping",
  usage: "a simple ping command"
};
