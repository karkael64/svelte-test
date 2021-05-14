"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayFlat(list, depth = 1) {
  if (depth < 1) return list;
  return arrayFlat(list, depth - 1).reduce(
    (acc, val) => (Array.isArray(val) ? acc.concat(val) : acc.push(val) && acc),
    []
  );
}
exports.default = arrayFlat;
if (Array.prototype.flat === undefined) {
  Object.defineProperty(Array.prototype, "flat", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (list) {
      return arrayFlat(this, list);
    },
  });
}
//# sourceMappingURL=arrayFlat.js.map
