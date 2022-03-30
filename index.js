import express from 'express';

const app = express();
const port = 4000;

app.get('/', (req, res) => {
  const page = `
    <html>
      <head>
        <title>
          Home Page
        </title>
      </head>
      <body>
        <h1>
          First Paragraph
        </h1>
        <p>
          This is the first paragraph
          This is the first paragraph
          This is the first paragraph
          This is the first paragraph
          This is the first paragraph
          This is the first paragraph
          This is the first paragraph
          This is the first paragraph
          This is the first paragraph
          This is the first paragraph
          This is the first paragraph
        </p>
        <p>
          This is the second paragraph
          This is the second paragraph
          This is the second paragraph
          This is the second paragraph
          This is the second paragraph
          This is the second paragraph
          This is the second paragraph
          This is the second paragraph
          This is the second paragraph
          This is the second paragraph
          This is the second paragraph
          This is the second paragraph
          This is the second paragraph
          This is the second paragraph
          This is the second paragraph
        </p>
      </body>
    </html>
  `;
  res.send(page);
});

app.get('/hello', (req, res) => {
  res.send('Another endpoint!')
});

app.listen(port);