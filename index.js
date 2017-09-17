var bot = require('fancy-groupme-bot');

var botConfig = {token: 'eNW0Fh9oonoanStkHONy7rxI3cMX8TZbSAvur3lG',
                 group: '34317876',
                 name: 'New Test Bot',
                 url: 'https://stormy-coast-96304.herokuapp.com/' };
var myBot = bot(botConfig);
bot.message("Hi, I'm a new Bot!");
                 

