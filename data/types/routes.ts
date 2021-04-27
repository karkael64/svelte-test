import { RequestHandler } from "express";

export const routeMethods = ["get", "post", "patch", "delete"] as const;
type RouteMethod = typeof routeMethods[number];

export type RouteDefinition = {
  method: RouteMethod;
  path: string;
  handler: RequestHandler;
};
