import type { RequestHandler } from "express";

type RouteMethod = "get" | "post" | "patch" | "delete";

export type RouteDefinition = {
  method: RouteMethod;
  path: string;
  handler: RequestHandler;
};
