import * as express from 'express';
import * as fs from 'fs';
const app = express.Router();

app.get('/references', async (req, res) => {
  try {
    const references = await fs.promises.readFile('./data.json', {
      encoding: 'utf8',
    });
    res.json(JSON.parse(references));
  } catch (e) {
    res.status(500).send('internal error');
  }
});

app.post('/references', (req, res) => {
  const reference = {};
  res.status(201).json(reference);
});

export { app as ws };
