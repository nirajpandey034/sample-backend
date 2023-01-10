const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const usersRoute = require('./routes/User.js');
const postsRoute = require('./routes/Post.js');
const photoRoute = require('./routes/Photo.js');
const TodoRoute = require('./routes/Todo.js');
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use('/users', usersRoute);
app.use('/posts', postsRoute);
app.use('/photos', photoRoute);
app.use('/todos', TodoRoute);
app.get('/', (req, res) => {
  res.json({ info: 'Welcome to Sample Backend' });
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
