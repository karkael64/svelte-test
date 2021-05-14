"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const saltRounds = 11;
const hashPassword = (plain) => bcrypt_1.default.hash(plain, saltRounds);
exports.hashPassword = hashPassword;
const comparePassword = (plain, hashed) =>
  bcrypt_1.default.compare(plain, hashed);
exports.comparePassword = comparePassword;
//# sourceMappingURL=password.js.map
