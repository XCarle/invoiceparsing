const express = require('express');
const path = require('path');
const router = require('./router');

const app = express();

const fs = require("fs");


const parser = require('./api/parser');

// Public assets
const publicFolder = path.resolve(`${__dirname}/../client/public`);
app.use('/static', express.static(publicFolder));
app.get('/', (req, res) => res.sendFile(`${publicFolder}/index.html`));

// API
app.use('/', router);

app.listen(3000, () => console.log('Spendesk Invoice Parser listening on port 3000!'));
