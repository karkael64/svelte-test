import express from "express";
import { default as routes } from "../data/resolvers";

const app = express();

app.use("/graphql", routes);

export default app;
