import express from "express";
import serverless from "@vendia/serverless-express";

import routes from "@/routes";

const app = express();

app.use("/", routes);

if (!process.env.AWS_LAMBDA_RUNTIME_API) {
  app.listen(4000, () => {
    console.log("Starting server on port 4000...");
  });
}

export const handler = serverless({ app });
