"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objectMap(object, fn, thisArg) {
  const keys = Object.entries(object);
  return keys.reduce((acc, [key, item]) => {
    acc[key] = fn.call(thisArg, item, key, object);
    return acc;
  }, {});
}
exports.default = objectMap;
if (Object.prototype.map === undefined) {
  Object.defineProperty(Object.prototype, "map", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (fn, thisArg) {
      return objectMap(this, fn, thisArg);
    },
  });
}
//# sourceMappingURL=objectMap.js.map
