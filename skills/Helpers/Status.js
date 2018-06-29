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



let getTime = function() {
   let date = new Date();
   return date.getHours().toString() + '.' + parseInt(date.getMinutes()/15)*15;
}




module.exports = function(bot, message) {
  let isFreeSrcDB = true;
  let isFreeSrcFeed = true;
  let time;
  // TODO: Query Database to find if busy



const sqlite3 = require('sqlite3').verbose();
// open the database
let db = new sqlite3.Database('../../db/test.db');
let curTime = 0.0;
currTime = getTime(); 
let sql = `SELECT * FROM bookings WHERE startTime = ` + currTime;
 
db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }


  rows.forEach((row) => {
    if (row.isBooked == 0)
	isFreeSrcDB = true;
    else
	isFreeSrcDB = false;
  });


}); 
// close the database connection
db.close(); 




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
