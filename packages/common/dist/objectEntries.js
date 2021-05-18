"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objectEntries(object) {
    const keys = Object.keys(object);
    return keys.map((key) => [key, object[key]]);
}
exports.default = objectEntries;
if (Object.entries === undefined) {
    Object.defineProperty(Object, "entries", {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function (object) {
            return objectEntries(object);
        },
    });
}
