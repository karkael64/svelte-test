"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objectSort(object, fn = (a, b) => (a > b ? 1 : a < b ? -1 : 0)) {
  const keys = Object.entries(object);
  keys.sort(([a], [b]) => fn(a, b));
  return keys.reduce((acc, [key, item]) => {
    acc[key] = item;
    return acc;
  }, {});
}
exports.default = objectSort;
if (Object.prototype.sort) {
  Object.defineProperty(Object.prototype, "sort", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (fn) {
      return objectSort(this, fn);
    },
  });
}
