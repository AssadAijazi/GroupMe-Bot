var bot = require('fancy-groupme-bot');

var botConfig = {token: 'eNW0Fh9oonoanStkHONy7rxI3cMX8TZbSAvur3lG',
                 group: '34317876',
                 name: 'New Test Bot',
                 url: 'https://stormy-coast-96304.herokuapp.com/' };
var myBot = bot(botConfig);

myBot.on('botRegistered', function(b) {
        console.log("I am registered");
        b.message("This a new test");
});

console.log("I am serving");
mybot.serve(8000);

