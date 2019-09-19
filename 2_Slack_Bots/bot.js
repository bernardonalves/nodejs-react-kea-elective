// Modules
const SlackBot = require('slackbots');
const Express = require('express');
const bodyParser = require("body-parser");

// Initializers - Vars - Required Stuff
const app = Express();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
const serverPort = 3000;

// create a bot
const bot = new SlackBot({
    token: 'xoxb-754508229478-752915386850-8orXPa7ZraczNohGsFJAWlzQ', // Add a bot https://my.slack.com/services/new/bot and put the token 
    name: 'Python BOT - written in NodeJS'
});

app.get('/contactme/', (req,res) => {
    res.sendFile(__dirname+"/static/contact.html")
})

app.post("/submitcontact", (req, res) => {
    sName = req.body.txtName;
    sEmail = req.body.txtEmail;
    sMessage = req.body.txtMessage;

    var params = {
        icon_emoji: ':snake:',
        attachments: [
            {
                "fallback": "Someone filled the form from the website.",
                "color": "#2eb886",
                "author_name": sName,
                "author_link": "mailto:"+sEmail,
                "title": "Your contact form was filled in with the following message:",
                "text": sMessage,
                "footer": "Sent from NodeJS application (in case it works)"
            }
        ]
    };
    bot.postMessageToChannel('general', 'Someone filled the contact info', params);

    res.send("Changed: "+sName+" - "+sEmail+" - "+sMessage);
    console.log(req.body)
})

app.listen(serverPort, (error) => {
    if(error) console.log(error);
    console.log("Server initiated on port", serverPort);
    /*
    var params = {
        icon_emoji: ':snake:'
    };
    
     */
});