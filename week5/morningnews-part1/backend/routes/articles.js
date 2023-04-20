const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();
const NEWS_API_KEY = process.env.NEWS_API_KEY;

// Route /articles
router.get('/', (req, res) => {
  fetch(`https://newsapi.org/v2/everything?sources=techcrunch&apiKey=${NEWS_API_KEY}`)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ok') {
        res.json({ articles: data.articles });
      } else {
        res.json({ articles: [] });
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'An error occurred' });
    });
});

module.exports = router;
