import * as express from 'express';
const app = express.Router();

app.get('/references', (req, res) => {
  res.json([]);
});

app.post('/references', (req, res) => {
  const reference = {};
  res.status(201).json(reference);
});

export { app as ws };
