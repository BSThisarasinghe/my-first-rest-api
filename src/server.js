const express = require('express')
const debug = require('debug')('server');
const chalk = require('chalk');
const app = express();
const routes = require('./routes');

const port = process.env.PORT || 3000;

app.use('/', routes);

app.get('/', (req, res) => {
    //debug(req);
    res.send('Market Place Backend! - GET');
});

app.post('/', (req, res) => {
    debug(req);
    console.log(req);
    res.send('Market Place Backend! - POST');
});

app.listen(port, function () {
    debug(`Listening on port ${chalk.green(process.env.PORT)}`);
}); 