const express = require("express");
const session = require('express-session');
const app = express();

app.use(session({
    secret: "i24ng4ng3n3h2mdbrvf2bdiunmf3l97imnc",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: 30 * 60 * 1000,
        secure: false
    }
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router imports
const usersRoute = require('./routes/usersRoute');
const emailRoute = require('./routes/emailRoute');
app.use(usersRoute);
app.use(emailRoute);

const Knex = require('knex');
const KnexConfig = require('./knexfile');
const Model = require('objection').Model;

const knex = Knex(KnexConfig.development);
Model.knex(knex);

app.listen(8080, (error) => {
    console.log("Server Running on port 8080");
    if (error) {
        console.log(error);
        console.log("Server crashed.")
    }
})