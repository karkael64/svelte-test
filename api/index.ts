console.log("Start script");

import express from "express";
import { graphql } from "../packages/data/dist/data/src";

console.log("Lib loaded");

const app = express();
app.use("/graphql", graphql);

console.log("Export");

export default app;
