import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello world fadf asrefdashiufadhuirehiuwq jbnjb!</h1>');
});

app.post('/login', (req, res) => {

});

app.listen(port);
