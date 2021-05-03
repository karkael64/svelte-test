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
    function stringSplice(text, start, length, ...insert) {
        const _start = start < 0 ? Math.max(0, text.length - start) : Math.min(start, text.length);
        const begin = text.slice(0, _start);
        const middle = insert.join("");
        const last = length === undefined ? "" : text.slice(_start + length);
        return `${begin}${middle}${last}`;
    }
    exports.default = stringSplice;
});
