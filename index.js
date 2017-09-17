var bot = require('fancy-groupme-bot');

var botConfig = {token: 'eNW0Fh9oonoanStkHONy7rxI3cMX8TZbSAvur3lG',
                 group: '34317876',
                 name: 'New Test Bot',
                 url: 'https://stormy-coast-96304.herokuapp.com' };
var myBot = bot(botConfig);

myBot.on('botRegistered', function(b) {
        b.message("Hellooooo");
});

myBot.on('botMessage', function(b, message) {
        console.log("something happened");
        if(message.name != b.name) {
            console.log("I should have said something now");
            b.message(message.name + " said " + message.txt);
        }
});

console.log("I am serving");
myBot.serve(process.env.PORT);

