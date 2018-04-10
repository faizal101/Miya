const config = require("../config.json");
module.exports.run =  (bot, msg, args) => {
    if (msg.content.startsWith(config.prefix + 'avatar')){
      msg.channel.send(msg.author.avatarURL);
    }
};

module.exports.help = {
  name: "avatar"
};
