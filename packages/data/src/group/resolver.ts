import { findAllGroups, findGroupById } from "./controller";

export default {
  Query: {
    async groups() {
      return findAllGroups();
    },
    async group(_root: any, { id }: any) {
      return findGroupById(id);
    },
  },
};
