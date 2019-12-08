import * as express from 'express';
import * as fs from 'fs';
import { Reference } from '../front/src/app/interfaces/reference';

const app = express.Router();
const filename = './data.json';

try {
  const obj = JSON.parse(fs.readFileSync(filename, { encoding: 'utf8' }));
  if (!obj) {
    throw 'cannot parse';
  }
} catch (e) {
  fs.writeFileSync(filename, '[]');
}

function generateNewId(references: Reference[]): number {
  if (references.length === 0) {
    return 0;
  }
  const max = Math.max(...references.map(r => +r.id));
  return max + 1;
}

app.get('/references', async (req, res) => {
  try {
    const str = await fs.promises.readFile(filename, {
      encoding: 'utf8',
    });
    const references: Reference[] = JSON.parse(str);
    res.json(references);
  } catch (e) {
    console.log(e);
    res.status(500).send('internal error');
  }
});

app.post('/references', async (req, res) => {
  try {
    const str = await fs.promises.readFile(filename, {
      encoding: 'utf8',
    });
    const references: Reference[] = JSON.parse(str);
    const id = generateNewId(references);
    const ref = { id, ...req.body };
    references.push(ref);
    await fs.promises.writeFile(filename, JSON.stringify(references, undefined, 2));
    res.status(201).json(req.body);
  } catch (e) {
    console.log(e);
    res.status(500).send('internal error');
  }
});

export { app as ws };
