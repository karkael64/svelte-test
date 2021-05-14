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
exports.findAllGroups = exports.findGroupById = exports.deleteAllGroups = exports.createGroup = exports.groupNames = void 0;
const prisma_1 = require("@test/prisma");
exports.groupNames = [
    "deleted",
    "admin",
    "moderator",
    "member",
    "user",
    "guest",
];
const createGroup = (data) => prisma_1.prisma.group.create({ data });
exports.createGroup = createGroup;
const deleteAllGroups = () => __awaiter(void 0, void 0, void 0, function* () { return (yield prisma_1.prisma.group.deleteMany()).count; });
exports.deleteAllGroups = deleteAllGroups;
const findGroupById = (id) => prisma_1.prisma.group.findUnique({ where: { id } });
exports.findGroupById = findGroupById;
const findAllGroups = () => prisma_1.prisma.group.findMany();
exports.findAllGroups = findAllGroups;
//# sourceMappingURL=controller.js.map