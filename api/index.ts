import express from "express";
import { graphql } from "../packages/data/dist/data/src";

const app = express();

app.use("/graphql", graphql);

export default app;
