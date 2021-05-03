(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isUndefined = exports.isSymbol = exports.isString = exports.isObject = exports.isNumber = exports.isFunction = exports.isArray = void 0;
    function isArray(item) {
        return Array.isArray(item);
    }
    exports.isArray = isArray;
    function isFunction(item) {
        return typeof item === "function";
    }
    exports.isFunction = isFunction;
    function isNumber(item) {
        return typeof item === "number";
    }
    exports.isNumber = isNumber;
    function isObject(item) {
        return !!(item && typeof item === "object");
    }
    exports.isObject = isObject;
    function isString(item) {
        return typeof item === "string";
    }
    exports.isString = isString;
    function isSymbol(item) {
        return typeof item === "symbol";
    }
    exports.isSymbol = isSymbol;
    function isUndefined(item) {
        return typeof item === "undefined";
    }
    exports.isUndefined = isUndefined;
});
