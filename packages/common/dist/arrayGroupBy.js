"use strict";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("types");
const ellipsis_1 = require("./ellipsis");
const isObjectKey = (item) => {
  return (
    types_1.isString(item) || types_1.isNumber(item) || types_1.isSymbol(item)
  );
};
function arrayGroupBy(list, field) {
  return list.reduce((acc, item) => {
    const _a = item,
      _b = field,
      name = _a[_b],
      rest = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
    if (isObjectKey(name)) {
      const key = name;
      if (!Array.isArray(acc[key])) {
        acc[key] = [];
      }
      acc[key].push(rest);
      return acc;
    }
    throw new Error(
      `Item at field ${ellipsis_1.escapedEllipsis(
        field
      )} should be a string, a number or a symbol, but found ${types_1.toTypeString(
        name
      )}.`
    );
  }, {});
}
exports.default = arrayGroupBy;
if (Array.prototype.groupBy === undefined) {
  Object.defineProperty(Array.prototype, "groupBy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (field) {
      return arrayGroupBy(this, field);
    },
  });
}
//# sourceMappingURL=arrayGroupBy.js.map
