import express from "express";
import { graphql } from "@test/data";

const app = express();
app.use("/api/graphql", graphql);

export default app;
