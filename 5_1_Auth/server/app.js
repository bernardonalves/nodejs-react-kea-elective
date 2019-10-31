const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// router imports
const usersRoute = require('./routes/usersRoute');

app.use(usersRoute);

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