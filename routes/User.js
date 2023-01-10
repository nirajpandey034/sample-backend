const express = require('express');
const router = express.Router();
require('dotenv').config();

router.get('/user-list', function (req, res) {
  res.send('users');
});

module.exports = router;
