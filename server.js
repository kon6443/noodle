/**
 * server.js
 */

const app = require('./app');

const port = 80;
const server = app.listen(port, function() {
    console.log('Listening on '+port);
});
