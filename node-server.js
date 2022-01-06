const express = require('express');
const path = require('path');
const port = process.env.PORT || 3333;
const app = express();

// serve static assets normally
app.use(express.static(__dirname + '/config/static'));

app.use('/health-status', (req, res) => {
  res.send('OK');
});

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.use('*', (req, res) => {
  res.sendFile(path.resolve('config/static', 'index.html'));
});

app.listen(port);
