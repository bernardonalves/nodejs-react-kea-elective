const express = require("express");
const app = express();

app.get("/confident/:name", function(req, res){
    res.send(req.params.name + " is confident enough!")
})

app.listen(3001, function(error){
    if (error) return console.log("Error running server ", error);
    console.log ("Server is listening on port 3001");
});