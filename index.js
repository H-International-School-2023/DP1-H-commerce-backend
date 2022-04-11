import express from 'express';
import fs from 'fs';

const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

const books = [
  'First',
  'Second',
  'Third',
  'Generic Tolkien Book'
];

const users = [
  { username: 'pippo', password: 'password' },
  { username: 'andrea.beggiato', password: 'mypassword' },
  { username: 'pluto', password: 'password' },
];

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.render('homepage', {
    username: 'Andrea',
    books: books,
  });
});

app.post('/login', (req, res) => {
  const username = req.body.user;
  const password = req.body.password;
  let found = false;
  for (let i = 0; i < users.length; i = i + 1) {
    const user = users[i];
    if (user.username === username && user.password === password) {
      found = true;
    }
  }

  if (found === true) {
    res.send('You are authenticated!');
  }
  else {
    res.send('Username not found');
  }
    
})

app.get('/hello', (req, res) => {
  res.send('Another endpoint!')
});

app.listen(port);