const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const serverPort = 3000;

var nameInfo = {}

// Allow POST requests
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Serve Static Files
app.use(express.static("../public"));
/*app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/index.html")
})*/

// sayhello?firstName=Benny&lastName=Silva
app.get("/sayhello/", (req, res) => {
    console.log(nameInfo.length);
    if(nameInfo.length !== undefined) res.send("Hello! Welcome back "+req.query.firstName+" "+req.query.lastName);
    else res.send("Hello! Welcome back "+nameInfo.firstName+" "+nameInfo.lastName);
});

app.post("/aboutme", (req, res) => {
    nameInfo.firstName = req.body.firstName;
    nameInfo.lastName = req.body.lastName;
    res.send("Changed: "+nameInfo.firstName+" "+nameInfo.lastName);
    console.log(req.body)
})

app.listen(serverPort, (error) => {
    if(error) console.log(error);
    console.log("Server initiated on port", serverPort);
});