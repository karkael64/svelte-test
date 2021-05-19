Object.defineProperty(exports, "__esModule", { value: true });

const { Decimal } = require("./runtime/index-browser");

const Prisma = {};

exports.Prisma = Prisma;

/**
 * Prisma Client JS version: 2.22.1
 * Query Engine version: 60cc71d884972ab4e897f0277c4b84383dddaf6c
 */
Prisma.prismaVersion = {
  client: "2.22.1",
  engine: "60cc71d884972ab4e897f0277c4b84383dddaf6c",
};

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */

Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
};
Prisma.validator = () => (val) => val;

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) {
  return x;
}

exports.Prisma.GroupScalarFieldEnum = makeEnum({
  id: "id",
  name: "name",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  parentGroupId: "parentGroupId",
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: "id",
  email: "email",
  name: "name",
  password: "password",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  groupId: "groupId",
});

exports.Prisma.PostScalarFieldEnum = makeEnum({
  id: "id",
  title: "title",
  groupId: "groupId",
});

exports.Prisma.FileScalarFieldEnum = makeEnum({
  id: "id",
  title: "title",
  groupId: "groupId",
});

exports.Prisma.EventScalarFieldEnum = makeEnum({
  id: "id",
  title: "title",
  scheduledAt: "scheduledAt",
  createdAt: "createdAt",
  updatedAt: "updatedAt",
  groupId: "groupId",
});

exports.Prisma.SortOrder = makeEnum({
  asc: "asc",
  desc: "desc",
});

exports.Prisma.QueryMode = makeEnum({
  default: "default",
  insensitive: "insensitive",
});

exports.Prisma.ModelName = makeEnum({
  Group: "Group",
  User: "User",
  Post: "Post",
  File: "File",
  Event: "Event",
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`
    );
  }
}
exports.PrismaClient = PrismaClient;

Object.assign(exports, Prisma);
