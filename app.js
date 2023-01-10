const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

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

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.get('/', (req, res) => {
  res.json({ info: 'Welcome to Sample Backend' });
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});



// write, npm run swagger-autogen to run the application in local