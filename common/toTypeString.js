(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./types"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const types_1 = require("./types");
    function toTypeString(item) {
        var _a;
        if (types_1.isNumber(item)) {
            if (Number.isNaN(item))
                return "NaN";
            if (!Number.isFinite(item))
                return item > 0 ? "Infinity" : "-Infinity";
            return JSON.stringify(item);
        }
        if (types_1.isFunction(item)) {
            return `[function ${item.name.trim().length ? item.name : "(anonymous)"}]`;
        }
        if (types_1.isArray(item)) {
            return `[array Array]`;
        }
        if (types_1.isObject(item)) {
            return `[object ${item.constructor.name}]`;
        }
        if (types_1.isSymbol(item)) {
            return `[symbol]`;
        }
        return (_a = JSON.stringify(item)) !== null && _a !== void 0 ? _a : `${item}`;
    }
    exports.default = toTypeString;
});
