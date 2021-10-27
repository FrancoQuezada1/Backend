const { config } = require('./config/config');
const express = require('express')
const app = express();
const categoryRouter = require('./routes/category');

require('./database/db');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/category',categoryRouter);

app.listen(config.port, () => {
    console.log("Estoy listo mi rey");
});

