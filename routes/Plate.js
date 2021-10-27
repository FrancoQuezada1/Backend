const express = require('express');
const app = express();
const {Plate} = require('../database/db');
const bp = require('body-parser');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.post('/' , (req, res) => {
   
    Plate.create({
        name: req.body.name,
        category_id: req.body.category_id
    }).then(post => {
        res.json(post)
    })
});

module.exports = app;