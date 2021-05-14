import { findAllUsers, findUserById, createUser } from "./controller";
import type { ResolversDefinition } from "graphql-tools";

export default {
  Query: {
    async users() {
      return findAllUsers();
    },
    async user(root, { id }, ctx, info) {
      return findUserById(id);
    },
  },
  Mutation: {
    async addUser(root, { email, name, password, group }) {
      return createUser({ email, name, password, group });
    },
  },
} as ResolversDefinition<any>;
