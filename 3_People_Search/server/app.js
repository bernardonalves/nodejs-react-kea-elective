const express = require("express");
const app = express();

app.use(express.static("../client"));


app.get("", (req, res) =>{
    res.sendFile(__dirname+"/../client/index.html")
})

app.get("/search", (req, res) =>{
    //req.query.search
    res.send(req.query)
})

app.listen(3000, (error) => {
    if(error) console.log(error);
    console.log("Server initiated on port", 3000);
});