import express from "express";
import { default as routes } from "../bff/routes";

const app = express();

routes.forEach((route) => {
  app[route.method](route.path, route.handler);
});

export default app;
