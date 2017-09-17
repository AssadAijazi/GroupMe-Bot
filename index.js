var bot = require('fancy-groupme-bot');

var botConfig = {token: 'eNW0Fh9oonoanStkHONy7rxI3cMX8TZbSAvur3lG',
                 group: '34317876',
                 name: 'New Test Bot',
                 url: 'https://stormy-coast-96304.herokuapp.com' };
                 
var mybot = bot(botConfig);



mybot.on('botRegistered', function(b) {
    console.log("I am registered");
    b.message("WHAT UP BRO?");

});



mybot.on('botMessage', function(b, message) {
        console.log("I got a message, fyi");
        if (message.name != b.name) {
            b.message(message.name + " said " + message.text);
        }
});



console.log("i am serving");

mybot.serve(process.env.PORT);



