const http = require('http');
const config = require('./config');
const app = require('./app');
const server = http.createServer(app);

server.listen(config.port, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Listening on port ' + config.port);
    }
});
