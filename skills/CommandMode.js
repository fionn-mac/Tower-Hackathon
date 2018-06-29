/**
* @module CommandMode.js
*/

module.exports = function(controller) {
  controller.hears(['howdy'], 'direct_message', function(bot, message) {
      bot.reply(message, ':taco:');
  });

  controller.hears(['identify yourself'], 'direct_message', function(bot, message) {
      bot.reply(message, 'I am a robot, I cannot lie.');
  });
};
