const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the app' });
});

app.get('/about', (req, res) => {
  res.status(200).json({ message: 'Hello friends' });
});

app.listen(3000, () => {
  console.log('http://localhost:3000/');
});
