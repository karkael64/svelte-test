"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloController = void 0;
const helloController = () => ({
    date: new Date().toISOString(),
    message: "Hello, World!",
});
exports.helloController = helloController;
