var bot = require('fancy-groupme-bot');

var botConfig = {token: 'eNW0Fh9oonoanStkHONy7rxI3cMX8TZbSAvur3lG',
                 group: '34317876',
                 name: 'New Test Bot',
                 url: 'https://stormy-coast-96304.herokuapp.com/' };
var myBot = bot(botConfig);

myBot.on('botMessage', function(b, message) {
        if(message.name != b.name) {
            b.message(message.name + " said " + message.txt);
        }
});

console.log("I am serving");
myBot.serve(process.env.PORT);

