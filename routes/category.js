const express = require('express');
const app = express();
const {Category} = require('../database/db');
const bp = require('body-parser');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.post('/' , (req, res) => {
   
    Category.create({
        name: req.body.name,
        nacionality: req.body.nacionality
    }).then(post => {
        res.json(post)
    })
});

module.exports = app;