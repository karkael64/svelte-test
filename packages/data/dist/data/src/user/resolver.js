"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const controller_1 = require("./controller");
exports.default = {
    Query: {
        users() {
            return __awaiter(this, void 0, void 0, function* () {
                return controller_1.findAllUsers();
            });
        },
        user(_root, { id }) {
            return __awaiter(this, void 0, void 0, function* () {
                return controller_1.findUserById(id);
            });
        },
    },
    Mutation: {
        addUser(_root, { email, name, password, group }) {
            return __awaiter(this, void 0, void 0, function* () {
                return controller_1.createUser({ email, name, password, group });
            });
        },
    },
};
