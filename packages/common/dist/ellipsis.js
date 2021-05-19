"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapedEllipsis = exports.ellipsisQuoted = exports.ellipsis = void 0;
const stringSplice_1 = __importDefault(require("./stringSplice"));
const types_1 = require("types");
function ellipsis(text, length = 40) {
  return text.slice(0, length) + (text.length > length && "…");
}
exports.ellipsis = ellipsis;
function ellipsisQuoted(text, length = 40) {
  const _length = Math.max(4, length) - 1;
  const quoted = JSON.stringify(text);
  return quoted.length < _length + 2
    ? quoted
    : stringSplice_1.default(quoted, _length - 1, quoted.length - _length, "…");
}
exports.ellipsisQuoted = ellipsisQuoted;
function escapedEllipsis(item, length = 40) {
  const _length = Math.max(4, length) - 1;
  const text = types_1.toTypeString(item);
  return text.length < _length + 2
    ? text
    : stringSplice_1.default(text, _length - 1, text.length - _length, "…");
}
exports.escapedEllipsis = escapedEllipsis;
