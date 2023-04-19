const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public', {type: 'text/css'}));

const mainRouter = require('./controllers/main/mainRouter');

app.use('/', mainRouter);

app.use(function(req, res) {
    return res.status(404).send("Sorry, can't find that :(");
});

module.exports = app;
