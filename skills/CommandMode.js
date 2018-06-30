/**
* @module skills/CommandMode.js
*/

let path = require('path');

let book = require(path.join(__dirname, 'Helpers/Book.js'));
let status = require(path.join(__dirname, 'Helpers/Status.js'));
let schedule = require(path.join(__dirname, 'Helpers/Schedule.js'));

const TIME = `^(?:0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$`;
const SCHEDULE_COMMANDS = ['\\s*schedule\\s*', `\\s*schedule from ${TIME}\\s*`, `\\s*schedule from ${TIME} to ${TIME}\\s*`]

module.exports = function(controller) {
  controller.hears(['howdy'], 'direct_message', function(bot, message) {
      bot.reply(message, ':taco:');
  });

  controller.hears(['identify yourself'], 'direct_message', function(bot, message) {
      bot.reply(message, 'I am a robot, I cannot lie.');
  });

  controller.hears('\\s*status$', 'direct_message', function(bot, message) {
    status(bot, message);
  });

  controller.hears(SCHEDULE_COMMANDS, 'direct_message', function(bot, message) {
    schedule(bot, message);
  });

  controller.hears('book', 'direct_message', function(bot, message) {
    book(bot, message);
  });
};
