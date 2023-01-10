const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.json({ info: 'Welcome to Sample Backend' });
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
