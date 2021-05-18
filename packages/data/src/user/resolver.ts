import { findAllUsers, findUserById, createUser } from "./controller";
import type { ResolversDefinition } from "graphql-tools";

export default {
  Query: {
    async users() {
      return findAllUsers();
    },
    async user(_root, { id }) {
      return findUserById(id);
    },
  },
  Mutation: {
    async addUser(_root, { email, name, password, group }) {
      return createUser({ email, name, password, group });
    },
  },
} as ResolversDefinition<any>;
