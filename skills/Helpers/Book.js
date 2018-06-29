/**
* @module skills/Helpers/Schedule.js
*/

const SALUTATIONS = [`Hey! Great to see you here.`, `Ola! Welcome back!`];
const BOOKING_TIME = [`So, what time are we looking at?`];
const BOOKING_DURATION = [`Cool! And for how long should I book the room?`];
const EXIT_MESSAGE = [`At any time, enter 'quit' to exit this conversation, yeah?`];

module.exports = function(bot, message) {
  let exitConvo = {
    pattern: 'quit',
    callback: function(response, convo) {
      convo.next();
    },
  };

  bot.createPrivateConversation(message, function(err, convo) {
    let salutation = SALUTATIONS[Math.floor(Math.random()*SALUTATIONS.length)];
    let exitMessage = EXIT_MESSAGE[Math.floor(Math.random()*EXIT_MESSAGE.length)];
    let bookingTime = BOOKING_TIME[Math.floor(Math.random()*BOOKING_TIME.length)];
    let bookingDuration = BOOKING_DURATION[Math.floor(Math.random()*BOOKING_DURATION.length)];

    let time;
    convo.addQuestion(`${salutation}\n${exitMessage}\n${bookingTime}`, [
      exitConvo,
      {
        default: true,
        callback: function(response, convo) {
          time = response.text;
          if (timeCheck.test(time)) {
            convo.gotoThread('askDuration');
          }
          convo.gotoThread('invalidTime');
        },
      },
    ], {}, 'default');

    convo.addQuestion('', [
      exitConvo,
      {
        default: true,
        callback: function(response, convo) {
          targetChannel = response.text;
          convo.gotoThread('getMessage');
        },
      },
    ], {}, 'askDuration');

    convo.activate();

    responses = convo.extractResponses();
    console.log("RESPONSESSSS");
    console.log(responses);
  });
  });
}
