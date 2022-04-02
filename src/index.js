require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.listen(port, () => {
  console.log('Server on port', port);
});
