const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const request = require('request');
const bodyParser = require('body-parser');
const endPoint = require("./config.cjs");
const masterKey = require('./config.cjs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(
  express.static(
    path.join(__dirname, '../webapp/dist')
  )
);
app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: false}));

app.get("/api/movies", (req, res) => {
    debug("I AM HERE");
    const url = `${endPoint} + ? + ${masterKey} + &language=en-US&query=top%20gun&page=1&include_adult=false`;
    const body = req.body;
    console.log(body);
    request('https://api.themoviedb.org/3/search/movie?api_key=15f65e43efa7039a0e98118204d4fa3c&language=en-US&query=top%20gun&page=1&include_adult=false' ,
       (error, response, body) => {
        console.log('error: ' + error);
        console.log('StatusCode: ', response && response.statusCode);
        console.log('body: ' + body);
      }
    );
});

app.listen(PORT, () => {
    debug(`Listening on port ${PORT}`)
})