/**
* @module skills/Helpers/Schedule.js
*/

module.exports = function(bot, message) {
  let command = message.text.split(' ');
  let usageError = false;
  let schedule;

  // Three Cases: schedule | schedule from <> | schedule from <> to <>
  if (command.length === 1) {
    // TODO Query Database for schedule of next 2 hours
  } else if (command.lenght === 2) {
    // TODO Query Database for schedule of 2 hours from specified time
  } else {
    // TODO Query Database for schedule from specified time to specified time
  }
}
