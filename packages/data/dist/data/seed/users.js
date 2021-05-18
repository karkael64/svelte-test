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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.omitUsersPassword = exports.createDefaultUsers = exports.createMockUser = void 0;
const faker_1 = __importDefault(require("faker"));
const controller_1 = require("../src/user/controller");
const createMockUser = (data) => {
    var _a, _b, _c, _d, _e, _f;
    const id = (_a = data.id) !== null && _a !== void 0 ? _a : faker_1.default.datatype.uuid();
    const name = (_b = data.name) !== null && _b !== void 0 ? _b : faker_1.default.internet.userName();
    const email = (_c = data.email) !== null && _c !== void 0 ? _c : faker_1.default.internet.email(name);
    const password = (_d = data.password) !== null && _d !== void 0 ? _d : faker_1.default.internet.password();
    const createdAt = (_e = data.createdAt) !== null && _e !== void 0 ? _e : faker_1.default.date.recent();
    const groupId = (_f = data.groupId) !== null && _f !== void 0 ? _f : faker_1.default.datatype.uuid();
    return {
        id,
        email,
        name,
        password,
        createdAt,
        updatedAt: createdAt,
        groupId,
    };
};
exports.createMockUser = createMockUser;
const defaultUsers = [
    {
        email: process.env.ADMIN_USERMAIL,
        name: process.env.ADMIN_USERNAME,
        password: process.env.ADMIN_PASSWORD,
        groupName: "admin",
    },
];
const createDefaultUsers = (groups) => __awaiter(void 0, void 0, void 0, function* () {
    return Promise.all(defaultUsers.map((data) => __awaiter(void 0, void 0, void 0, function* () {
        const { groupName } = data, userData = __rest(data, ["groupName"]);
        const groupId = groups.find((group) => group.name === groupName).id;
        const user = yield controller_1.createUser(Object.assign(Object.assign({}, userData), { group: { connect: { id: groupId } } }));
        return user;
    })));
});
exports.createDefaultUsers = createDefaultUsers;
const omitUsersPassword = (users) => users.map((user) => {
    const { password } = user, other = __rest(user, ["password"]);
    return other;
});
exports.omitUsersPassword = omitUsersPassword;
