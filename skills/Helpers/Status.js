/**
* @module skills/Helpers/Status.js
*/

const BUSY_NOW = `The table seems to be busy at the moment.`;
const PEOPLE_PRESENT = `The schedule seems clear, but there are people present at the table.`;
const TABLE_FREE = `The table seems to be free till: `;
const TABLE_FUTURE_SUGGESTIONS = `The table seems to be free during the following slot(s).`;
const BUSY_FOR_LONG = `Unfortunately, the table doesn't seem to be free in the foreseeable future. :confused:`;

let getSuggestions = function() {
  // TODO: query database for free slots
  // TODO: format responses as a presentable string
  // TODO: return string
}

module.exports = function(bot, message) {
  let isFreeSrcDB = true;
  let isFreeSrcFeed = true;
  let time;
  // TODO: Query Database to find if busy
  // TODO: If free, also find till when!

  // TODO: If Database return free, check stream for imprompteau users.

  if (!isFreeSrcDB) {
    bot.reply(message, BUSY_NOW);
    let suggestions = getSuggestions();

    if (!suggestions) {
      bot.reply(message, BUSY_FOR_LONG);
    } else {
      bot.reply(message, `${TABLE_FUTURE_SUGGESTIONS}\n${suggestions}`);
    }
  } else if (!isFreeSrcFeed) {
    bot.reply(message, PEOPLE_PRESENT);
  } else {
    bot.reply(message, `${TABLE_FREE}${time}`);
  }
}
