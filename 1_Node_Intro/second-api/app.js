const express = require("express");
const app = express();
const serverPort = 3000;

app.get("/sayhello/", (req, res) => {
    console.log(req.query);
    res.send("Hello! Welcome back "+req.query.firstName+" "+req.query.lastName);
});

app.listen(serverPort, (error) => {
    if(error) console.log(error);
    console.log("Server initiated on port", serverPort);
});