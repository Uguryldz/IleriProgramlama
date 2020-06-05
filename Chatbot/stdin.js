Chatbot = require('./Chatbot');
var stdin = process.openStdin();

console.log('Chat botunuzla sohbet etmeye başlayın ... \n')
stdin.addListener("data", function(message) {
    message = message.toString().trim()
    console.log("Sen ==> " + message);
    console.log("Bot ==> "+Chatbot.ChatbotReply(message))
  });

