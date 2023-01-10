const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/photo-list', function (req, res) {
  const getPhotos = async () => {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    const { data } = await axios.get(url);
    return res.status(200).json({ info: 'Query Successfull', data: data.slice(1, 21) });
  };
  getPhotos();
});


router.all('*', (req, res) => {
  return res
    .status(300)
    .json({ info: 'Uh oh, You reached the correct route but wrong place' });
});
module.exports = router;
