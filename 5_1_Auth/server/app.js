const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/", (req, res) => {
    console.log(req.body);
    res.send("It worked");
})



app.listen(8080, (error) => {
    if (error) {
        console.log(error);
    }
})