const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const serverPort = 3000;

app.use(express.static("../public"));
/*app.get("/", (req, res) => {
    res.sendFile(__dirname+"/public/index.html")
})*/

// sayhello?firstName=Benny&lastName=Silva
app.get("/sayhello/", (req, res) => {
    console.log(req.query);
    res.send("Hello! Welcome back "+req.query.firstName+" "+req.query.lastName);
});

app.use(bodyParser.urlencoded());
app.post("/animal", (req, res) => {
    console.log(req.body);
    res.send(req.body.animal);
})

app.listen(serverPort, (error) => {
    if(error) console.log(error);
    console.log("Server initiated on port", serverPort);
});