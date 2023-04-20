const express = require('express');
const fetch = require('node-fetch');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const router = express.Router();
const PORT = process.env.PORT || 3000;
const NEWS_API_KEY = process.env.NEWS_API_KEY;

// Route /articles
router.get('/articles', (req, res) => {
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

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
