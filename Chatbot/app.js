
Chatbot = require('./Chatbot');
var readline = require('readline');

var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('Sen ==> ');
rl.prompt();
rl.on('line', function(message) {
    console.log('Bot ==> '+ Chatbot.ChatbotReply(message))
    rl.prompt();
}).on('close',function(){
    process.exit(0);
});

