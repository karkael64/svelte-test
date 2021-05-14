import { Router } from "express";
import { routes } from "./routes";
export { default as graphql } from "./resolvers";

export const router = Router();
routes.forEach((routeDef) => {
  router[routeDef.method](routeDef.path, routeDef.handler);
});
