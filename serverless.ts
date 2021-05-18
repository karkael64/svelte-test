import express from "express";
import { graphql } from "./packages/data/src/index";

const port = 3000;
const app = express();

app.use("/graphql", graphql);

app.use(express.static("packages/web/public"));

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started at http://localhost:${port}/`);
});

export default app;