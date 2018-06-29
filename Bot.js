let Botkit = require('botkit');
let path = require("path");
let fs = require("fs");

// Create the Botkit controller, which controls all instances of the bot.
let controller = Botkit.slackbot({
    debug: true,
    retry: 10,
});

// Spawn a single instance of the bot to connect to your Slack team.
let bot = controller.spawn({
    token: process.env.token,
}).startRTM();


let normalizedPath = path.join(__dirname, "skills");

fs.readdirSync(normalizedPath).forEach(function(file) {
  require("./skills/" + file)(controller);
