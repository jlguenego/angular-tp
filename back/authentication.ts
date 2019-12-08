import * as express from 'express';

export const auth: () => express.RequestHandler = () => (req, res, next) => {
  console.log('req.headers', req.headers);
  if (!req.headers.authorization) {
    res.status(401).send('unauthorized');
    return;
  }
  next();
};
