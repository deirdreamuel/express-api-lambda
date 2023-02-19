import lambda from '@vendia/serverless-express';
import express from 'express';

import { PORT } from './config/server';
import routes from './routes';

const server = express();

server.use('/', routes);

if (!process.env.AWS_LAMBDA_RUNTIME_API) {
  server.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}...`);
  });
}

export const handler = lambda({ app: server });
