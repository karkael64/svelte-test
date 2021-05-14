"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.graphql = void 0;
const express_1 = require("express");
const routes_1 = require("./routes");
var resolvers_1 = require("./resolvers");
Object.defineProperty(exports, "graphql", { enumerable: true, get: function () { return __importDefault(resolvers_1).default; } });
exports.router = express_1.Router();
routes_1.routes.forEach((routeDef) => {
    exports.router[routeDef.method](routeDef.path, routeDef.handler);
});
//# sourceMappingURL=index.js.map