const express = require('express');
const app = express();
const server = app.listen(7000, on);
function on() {
  console.log('Servidor encendido');
};

app.use(express.static('public'));
