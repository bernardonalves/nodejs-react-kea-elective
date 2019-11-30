const express = require("express");
const session = require('express-session');
const cors = require('cors');
const app = express();

app.use(session({
    secret: "i24ng4ng3n3h2mdbrvf2bdiunmf3l97imnc",
    saveUninitialized: true,
    resave: true,
    cookie: {
        maxAge: 30 * 60 * 1000,
        secure: false
    }
}));
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
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