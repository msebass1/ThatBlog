const express = require("express");
const app = express();

var port = 3001;

app.listen(port, () => {
 console.log(`Starting server at ${port}`);
});

app.get('/', function (res) {
  res.send('Saludos desde express');
});
