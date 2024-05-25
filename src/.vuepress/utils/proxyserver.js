const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/proxy', (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('No URL provided');
  }

  request({ url, encoding: null }, (err, resp, body) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.set('Content-Type', resp.headers['content-type']);
    res.send(body);
  });
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
