import * as express from 'express';
import * as serveIndex from 'serve-index';
import * as cors from 'cors';

import { ws } from './ws';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/ws', ws);

const www = '../front/dist/front';
app.use(express.static(www));
app.use(serveIndex(www, { icons: true }));

const port = 3000;
app.listen(port, () => console.log(`server started on port ${port}`));
