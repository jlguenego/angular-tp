import * as express from 'express';
import * as fs from 'fs';
const app = express.Router();



app.get('/references', async (req, res) => {
  try {
    const str = await fs.promises.readFile('./data.json', {
      encoding: 'utf8',
    });
    const references = JSON.parse(str);
    res.json(references);
  } catch (e) {
    res.status(500).send('internal error');
  }
});

app.post('/references', async (req, res) => {
  try {
    const str = await fs.promises.readFile('./data.json', {
      encoding: 'utf8',
    });
    const references = JSON.parse(str);
    references.push(req.body);
    await fs.promises.writeFile('./data.json', JSON.stringify(references));
    res.status(201).json(req.body);
  } catch (e) {
    res.status(500).send('internal error');
  }
});

export { app as ws };
