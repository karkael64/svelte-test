import { findAllGroups, findGroupById } from "./controller";

export default {
  Query: {
    async groups() {
      return findAllGroups();
    },
    async group(root, { id }, ctx, info) {
      return findGroupById(id);
    },
  },
};
