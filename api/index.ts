import express from "express";
import { default as routes } from "../data/routes";

const app = express();

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

export default app;
