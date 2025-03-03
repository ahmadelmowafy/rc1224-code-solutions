import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log(`The date is ${new Date()} ${req.method} ${req.path}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Here is the homepage');
});

app.get('/notes', (req, res) => {
  res.send('Here are the notes');
});

app.post('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;
  res.send(`Received note with ID ${noteId}`);
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
