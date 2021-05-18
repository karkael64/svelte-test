"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectHasProperties = exports.objectHasPorperty = void 0;
const types_1 = require("types");
function objectHasPorperty(object, key) {
    return !types_1.isUndefined(object[key]);
}
exports.objectHasPorperty = objectHasPorperty;
function objectHasProperties(object, keys) {
    return !keys.find((key) => types_1.isUndefined(object[key]));
}
exports.objectHasProperties = objectHasProperties;
