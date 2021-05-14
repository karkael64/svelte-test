"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUsername = exports.isPassword = exports.isEmail = void 0;
const matchAll = (regexps) => (text = "") =>
  !(!Array.isArray(regexps) ? [regexps] : regexps).find(
    (rx) => !text.match(rx)
  );
exports.isEmail = matchAll(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
exports.isPassword = matchAll([/^.{8,}$/, /\d/, /\w/, /\W/]);
exports.isUsername = matchAll(/^[\w\d._'-]{5,}$/);
//# sourceMappingURL=regex.js.map
