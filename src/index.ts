import lambda from '@vendia/serverless-express';
import express from 'express';

import routes from '@/routes';

const app = express();

app.use('/', routes);

if (process.env.AWS_LAMBDA_RUNTIME_API === undefined) {
  app.listen(4000, () => {
    console.log('Starting server on port 4000...');
  });
}

export const handler = lambda({ app });
