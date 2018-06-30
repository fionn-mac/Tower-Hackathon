/**
* @module skills/Helpers/Status.js
*/

let path = require('path');
const sqlite3 = require('sqlite3').verbose();

const BUSY_NOW = `The table seems to be busy at the moment.`;
const PEOPLE_PRESENT = `The schedule seems clear, but there are people present at the table.`;
const TABLE_FREE = `The table seems to be free at the moment!`;
const TABLE_FUTURE_SUGGESTIONS = `The table seems to be free during the following slot(s).`;
const BUSY_FOR_LONG = `Unfortunately, the table doesn't seem to be free in the foreseeable future. :confused:`;

const urls = [
"https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/34583306_2205247496428157_8062332155000258560_n.jpg?_nc_cat=0&oh=02453c4a4c53a9b3c72125ada92d27ef&oe=5BA4C73B",
"https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/34535819_2205510779735162_1389253390034272256_n.jpg?_nc_cat=0&oh=841f2d2802732de7ab5bf8e96d7e2021&oe=5B9E35AF",
"https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/34644279_2205559416396965_3520896193624276992_n.jpg?_nc_cat=0&oh=a2523024e2005c1b6b3026fc2faf5d43&oe=5BEAF57F",
"https://scontent.fdel6-1.fna.fbcdn.net/v/t1.0-9/34505735_2205727093046864_5367195101078487040_n.jpg?_nc_cat=0&oh=e270b6f680c9f36429cc816b2f4e57ae&oe=5BAB438C"
]
module.exports = async function(bot, message) {
  let isFreeSrcDB = true;
  let isFreeSrcFeed = true;
  var rn = require('random-number');
  var options = {
    min: 0,
    max: urls.length-1,
    integer: true
  }
  bot.reply(message, {
  "attachments": [
      {
          "fallback": "Error 404: Meme not found!! Try Kicking your PC",
          "image_url": urls[rn(options)]
      }
    ]
  } 
  );
    
}


