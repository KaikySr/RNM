const express = require('express');
const app = express();
const router = require('./routes');

require('./startup/db')();
require('./startup/routes')(app);

const port = 8080;

router(app);

const server = app.listen(port, () => console.log(`http://localhost:${port}/api/sports/`));

module.exports = server;