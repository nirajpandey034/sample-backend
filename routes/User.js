const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/user-list', function (req, res) {
  const getUser = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const { data } = await axios.get(url);
    return res.status(200).json({ info: 'Query Successfull', data: data });
  };
  getUser();
});

router.post('/login-success', function (req, res) {
  return res
    .status(200)
    .json({ info: 'Login Successful', data: req.body, status: true });
});

router.post('/login-failure', function (req, res) {
  return res
    .status(200)
    .json({ info: 'Login Failed', data: req.body, status: false });
});

router.post('/user-registration-success', function (req, res) {
  return res
    .status(200)
    .json({ info: 'User Created', data: req.body, status: true });
});
router.post('/user-registration-failure', function (req, res) {
  return res
    .status(200)
    .json({ info: 'user Creation Failed', data: req.body, status: false });
});

router.all('*', (req, res) => {
  return res
    .status(300)
    .json({ info: 'Uh oh, You reached the correct route but wrong place' });
});
module.exports = router;
