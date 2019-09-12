const express = require("express");
const app = express();
const serverPort = 3000;

app.get("/userinfo/:name", function(req, res){
    res.send("You're seeing info from user: " + req.params.name);
})

app.listen(serverPort, function(error){
    if (error) console.log("Something went wront initializing the server: ", error);
    else console.log("Server initialized, listening on port: ", serverPort);
})