const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.set('views', '/src/views');
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.send('hello');
});

app.listen(PORT, () => {
    debug(`Listening on port ${PORT}`)
})