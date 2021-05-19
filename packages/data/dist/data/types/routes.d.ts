import type { RequestHandler } from "express";
export declare const routeMethods: readonly ["get", "post", "patch", "delete"];
declare type RouteMethod = typeof routeMethods[number];
export declare type RouteDefinition = {
  method: RouteMethod;
  path: string;
  handler: RequestHandler;
};
export {};
