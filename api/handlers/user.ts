import { RequestHandler } from "express";
import { findAllUsers, findUserById } from "../controllers/user";
import { RouteDefinition } from "../types/routes";

const getUsersHandler: RequestHandler = async (req, res) => {
  try {
    const users = await findAllUsers();
    if (users.length) {
      return res.status(200).json(users);
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getUserHandler: RequestHandler = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await findUserById(userId);
    if (user) {
      return res.status(200).json(user);
    }
    res.status(404).send();
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default [
  {
    method: "get",
    path: "/api/users",
    handler: getUsersHandler,
  },
  {
    method: "get",
    path: "/api/user/:id",
    handler: getUserHandler,
  },
] as RouteDefinition[];
