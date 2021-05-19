import express from "express";
import { graphql } from "@test/data";

const port = 3000;
const app = express();

app.use("/api/graphql", graphql);

app.use(express.static("packages/web/public"));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at http://localhost:${port}/`);
});

export default app;
