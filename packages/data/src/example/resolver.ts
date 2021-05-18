import { helloController } from "./controller";

export default {
  Query: {
    hello() {
      return helloController();
    },
  },
};
