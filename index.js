const { config } = require('./config/config');
const express = require('express')
const app = express()

require('./database/db');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(config.port, () => {
    console.log("Estoy listo mi rey");
});

