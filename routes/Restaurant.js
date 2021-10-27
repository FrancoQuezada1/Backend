const express = require('express');
const app = express();
const {Restaurant} = require('../database/db');
const bp = require('body-parser');
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.post('/' , (req, res) => {
   
    Restaurant.create({
        name: req.body.name,
        direction: req.body.direction,
        phone: req.body.phone,
        menu: req.body.menu,
        orders: req.body.orders,
        horary: req.body.horary
    }).then(post => {
        res.json(post)
    })
});

module.exports = app;