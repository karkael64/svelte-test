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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefaultGroups = exports.createMockGroup = void 0;
const faker_1 = __importDefault(require("faker"));
const controller_1 = require("../src/group/controller");
const createMockGroup = (data) => {
    var _a, _b, _c;
    const id = (_a = data.id) !== null && _a !== void 0 ? _a : faker_1.default.datatype.uuid();
    const name = (_b = data.name) !== null && _b !== void 0 ? _b : faker_1.default.random.words(2);
    const parentGroupId = (_c = data.parentGroupId) !== null && _c !== void 0 ? _c : faker_1.default.random.arrayElement([null, faker_1.default.datatype.uuid()]);
    const createdAt = faker_1.default.date.recent();
    return {
        id,
        name,
        parentGroupId,
        createdAt,
        updatedAt: createdAt,
    };
};
exports.createMockGroup = createMockGroup;
const createDefaultGroups = () => __awaiter(void 0, void 0, void 0, function* () {
    let currentParent = undefined;
    const groups = [];
    for (const name of controller_1.groupNames) {
        const group = yield controller_1.createGroup({
            name,
            parentGroup: (currentParent === null || currentParent === void 0 ? void 0 : currentParent.id)
                ? { connect: { id: currentParent.id } }
                : undefined,
        });
        currentParent = group;
        groups.push(group);
    }
    return groups;
});
exports.createDefaultGroups = createDefaultGroups;
//# sourceMappingURL=groups.js.map