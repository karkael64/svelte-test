"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = __importDefault(require("faker"));
const controller_1 = require("../src/group/controller");
const controller_2 = require("../src/user/controller");
const groups_1 = require("../seed/groups");
const users_1 = require("../seed/users");
faker_1.default.seed(1335);
const purge = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    console.log(
      `✔ users purged (${yield controller_2.deleteAllUsers()} items)`
    );
    console.log(
      `✔ groups purged (${yield controller_1.deleteAllGroups()} items)`
    );
  });
const seed = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const groups = yield groups_1.createDefaultGroups();
    console.log(
      `✔ groups created (${groups.length} items):`,
      groups.map(({ id, name, parentGroupId }) => ({ id, name, parentGroupId }))
    );
    const users = yield users_1.createDefaultUsers(groups);
    console.log(
      `✔ users created (${users.length} items):`,
      users.map(({ id, email, name, groupId }) => ({
        id,
        email,
        name,
        groupId,
      }))
    );
  });
const main = new Promise((resolve) => {
  purge().then(() => {
    setTimeout(() => {
      seed().then(() => {
        resolve();
      });
    }, 0);
  });
});
main
  .then(() => {
    console.log("✔ Seed end");
    process.exit(0);
  })
  .catch((err) => {
    console.error("✘ Seed error:", err);
    process.exit(1);
  });
