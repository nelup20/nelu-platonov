
const express = require('express');
const serveStatic = require('serve-static');
const port = process.env.PORT || 5000;

let app = express();

app.use(serveStatic(__dirname + "/dist"));
app.listen(port);
