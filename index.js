import express from 'express';
import fs from 'fs';

;
const app = express();
const port = 4000;

app.set('view engine', 'ejs');

const username = 'Andrea'
const books = [
  'First',
  'Second',
  'Third',
  'Generic Tolkien Book'
];

app.get('/', (req, res) => {
  res.render('homepage', {
    username: 'Andrea',
    books: books,
  });
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.send('OK!');
})

app.get('/hello', (req, res) => {
  res.send('Another endpoint!')
});

app.listen(port);