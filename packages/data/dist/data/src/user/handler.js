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
const getUsersHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield controller_1.findAllUsers();
        if (users.length) {
            return res.status(200).json(users);
        }
        res.status(204).send();
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
const getUserHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.id;
        const user = yield controller_1.findUserById(userId);
        if (user) {
            return res.status(200).json(user);
        }
        res.status(404).send();
    }
    catch (error) {
        res.status(500).json({ error });
    }
});
exports.default = [
    {
        method: "get",
        path: "/api/users",
        handler: getUsersHandler,
    },
    {
        method: "get",
        path: "/api/user/:id",
        handler: getUserHandler,
    },
];
