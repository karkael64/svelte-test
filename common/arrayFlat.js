"use strict";
exports.__esModule = true;
function arrayFlat(list) {
    return list.reduce(function (acc, val) { return acc.concat(val); }, []);
}
exports["default"] = arrayFlat;
