import express from "express";
import { graphql } from "../packages/data/src/index";

const app = express();

app.use("/graphql", graphql);

export default app;
