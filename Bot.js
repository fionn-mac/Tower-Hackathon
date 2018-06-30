let Botkit = require('botkit');
let path = require("path");
let fs = require("fs");

let env = require('node-env-file');
env(path.join(__dirname, '/.env'));

// Create the Botkit controller, which controls all instances of the bot.
let controller = Botkit.slackbot({
    // debug: true,
    retry: 10,
});

// Spawn a single instance of the bot to connect to your Slack team.
let bot = controller.spawn({
  token: process.env.bot_token,
}).startRTM();

let normalizedPath = path.join(__dirname, "skills");

fs.readdirSync(normalizedPath).forEach(function(file) {
  filepath = path.join(`${__dirname}/skills/`, file);
  if (fs.lstatSync(filepath).isFile()) {
    require(filepath)(controller);
  }
});
