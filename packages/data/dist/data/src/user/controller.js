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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAllUsers = exports.findUserById = exports.deleteAllUsers = exports.createUser = void 0;
const common_1 = require("@test/common");
const prisma_1 = require("@test/prisma");
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { password } = data, rest = __rest(data, ["password"]);
    if (!common_1.isEmail(rest.email)) {
        throw new Error(`Syntax error on email ${JSON.stringify(rest.email)}.`);
    }
    if (!common_1.isPassword(password)) {
        throw new Error(`Syntax error on password ${JSON.stringify(password)}.`);
    }
    if (!common_1.isUsername(rest.name)) {
        throw new Error(`Syntax error on username ${JSON.stringify(rest.name)}.`);
    }
    const passwordHashed = yield common_1.hashPassword(password);
    return prisma_1.prisma.user.create({ data: Object.assign(Object.assign({}, rest), { password: passwordHashed }) });
});
exports.createUser = createUser;
const deleteAllUsers = () => __awaiter(void 0, void 0, void 0, function* () { return (yield prisma_1.prisma.user.deleteMany()).count; });
exports.deleteAllUsers = deleteAllUsers;
const selectedFields = {
    id: true,
    email: true,
    name: true,
    createdAt: true,
    updatedAt: true,
    groupId: true,
    group: true,
};
const findUserById = (id) => prisma_1.prisma.user.findUnique({
    select: selectedFields,
    where: { id },
});
exports.findUserById = findUserById;
const findAllUsers = () => prisma_1.prisma.user.findMany({
    select: selectedFields,
});
exports.findAllUsers = findAllUsers;
//# sourceMappingURL=controller.js.map