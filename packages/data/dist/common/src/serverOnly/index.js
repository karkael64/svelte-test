"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
var password_1 = require("./password");
Object.defineProperty(exports, "hashPassword", {
  enumerable: true,
  get: function () {
    return password_1.hashPassword;
  },
});
Object.defineProperty(exports, "comparePassword", {
  enumerable: true,
  get: function () {
    return password_1.comparePassword;
  },
});
