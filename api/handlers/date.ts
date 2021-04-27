import { RouteDefinition } from "../types/routes";
import { RequestHandler } from "express";

const dateHandler: RequestHandler = (req, res) => {
  const date = new Date().toString();
  const method = req.method;
  res.status(200).send(`${method} ${date}`);
};

export default [
  {
    method: "post",
    path: "/api/date",
    handler: dateHandler,
  },
] as RouteDefinition[];
