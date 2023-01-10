const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.json({ info: 'Welcome to Sample Backend' });
});
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
