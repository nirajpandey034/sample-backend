const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const usersRoute = require('./routes/User.js');
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/users', usersRoute);

app.get('/', (req, res) => {
  res.json({ info: 'Welcome to Sample Backend' });
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
