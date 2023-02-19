import lambda from '@vendia/serverless-express';
import express from 'express';

import { PORT } from './config/server';
import logger from './lib/morgan';
import routes from './routes';

const app = express();

app.use(logger);

app.use('/', routes);

if (!process.env.AWS_LAMBDA_RUNTIME_API) {
  app.listen(PORT, () => {
    console.log(`Starting server on port ${PORT}...`);
  });
}

export const handler = lambda({ app });
