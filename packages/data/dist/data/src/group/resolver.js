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
        groups() {
            return __awaiter(this, void 0, void 0, function* () {
                return controller_1.findAllGroups();
            });
        },
        group(root, { id }, ctx, info) {
            return __awaiter(this, void 0, void 0, function* () {
                return controller_1.findGroupById(id);
            });
        },
    },
};
//# sourceMappingURL=resolver.js.map