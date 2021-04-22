import express from "express";
import { default as routes } from "./routes";
import { RouteDefinition } from "./types/routes";

const app = express();

routes.forEach((route: RouteDefinition) => {
  app[route.method](route.path, route.handler);
});

export default app;
