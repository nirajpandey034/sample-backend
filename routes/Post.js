const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

router.get('/posts-list', function (req, res) {
  const getPosts = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const { data } = await axios.get(url);
    return res.status(200).json({ info: 'Query Successfull', data: data });
  };
  getPosts();
});
router.get('/posts-with-comments', function (req, res) {
  const getPosts = async () => {
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const comments = await axios.get(
      'https://jsonplaceholder.typicode.com/comments'
    );

    const result = posts.data.slice(1).map((item, index) => {
      const obj = {};
      const commentList = [];
      obj.postTitle = item.title;
      obj.postDescription = item.body;
      comments.data.map((comment, index) => {
        if (comment.postId === item.id)
          commentList.push({
            commenterEmail: comment.email,
            title: comment.name,
            comment: comment.body,
          });
      });
      obj.comments = commentList;

      return obj;
    });

    return res.status(200).json({ info: 'Query Successfull', data: result });
  };
  getPosts();
});
router.post('/create-post', function (req, res) {
  return res.status(200).json({ info: 'Post Created', data: req.body });
});

router.all('*', (req, res) => {
  return res.status(300).json({ info: 'Uh oh, You reached the correct route but wrong place' });
});

module.exports = router;
