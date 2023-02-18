# Express Application w/ AWS Lambda Proxy Adapter
This project is a lightweight api application using AWS Lambda proxy adapter. This is a boiler-plate express project with the linting and style integrated. This is meant to be deployed to AWS Lambda using API Gateway Rest API with lambda proxy integration, `ANY /` and `ANY /{proxy+}` routes.

### Prerequisites

1. NodeJS 16.X

### Project Setup

1. Run `npm install` to install dependencies
2. Run `npm run dev` for local development & hot-reload

### Linting and Style
1. Run `npm run lint` to check linting issues
2. Run `npm run lint:fix` to fix auto-fixable linting issues
