"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbTransaction = exports.prisma = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client_1 = require("../client");
exports.prisma = new client_1.PrismaClient();
const dbTransaction = (promises) => exports.prisma.$transaction(promises);
exports.dbTransaction = dbTransaction;
//# sourceMappingURL=index.js.map
