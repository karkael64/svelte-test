"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldBeResolvePath = exports.shouldBeVariableName = exports.stringShouldMatch = void 0;
const ellipsis_1 = require("./ellipsis");
function stringShouldMatch(text, rx, errorMessage) {
  if (text.match(rx)) {
    return text;
  }
  throw new Error(errorMessage);
}
exports.stringShouldMatch = stringShouldMatch;
function shouldBeVariableName(text) {
  return stringShouldMatch(
    text,
    /^[_A-Za-z]\w*$/,
    `Syntax error, string ${ellipsis_1.escapedEllipsis(
      text
    )} is not a variable name`
  );
}
exports.shouldBeVariableName = shouldBeVariableName;
function shouldBeResolvePath(text) {
  return stringShouldMatch(
    text,
    /^@?[./\w-]+$/,
    `Syntax error, string ${ellipsis_1.escapedEllipsis(
      text
    )} can not be resolved in import`
  );
}
exports.shouldBeResolvePath = shouldBeResolvePath;
//# sourceMappingURL=syntax.js.map