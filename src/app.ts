import express from 'express';
import { newsService } from './News';

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', async (req, res) => {
  const article = await newsService.getArticle(1);
  res.json(article);
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }

  return console.log(`Server is running on ${port}`);
});
