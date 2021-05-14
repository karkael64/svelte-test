"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldBeResolvePath = exports.shouldBeVariableName = exports.stringShouldMatch = exports.stringPascalCase = exports.isUsername = exports.isPassword = exports.isEmail = exports.objectSort = exports.objectMap = exports.objectEntries = exports.objectHasProperties = exports.objectHasPorperty = exports.injectImports = exports.escapedEllipsis = exports.ellipsisQuoted = exports.ellipsis = exports.arrayGroupBy = exports.arrayFlat = void 0;
var arrayFlat_1 = require("./arrayFlat");
Object.defineProperty(exports, "arrayFlat", {
  enumerable: true,
  get: function () {
    return __importDefault(arrayFlat_1).default;
  },
});
var arrayGroupBy_1 = require("./arrayGroupBy");
Object.defineProperty(exports, "arrayGroupBy", {
  enumerable: true,
  get: function () {
    return __importDefault(arrayGroupBy_1).default;
  },
});
var ellipsis_1 = require("./ellipsis");
Object.defineProperty(exports, "ellipsis", {
  enumerable: true,
  get: function () {
    return ellipsis_1.ellipsis;
  },
});
Object.defineProperty(exports, "ellipsisQuoted", {
  enumerable: true,
  get: function () {
    return ellipsis_1.ellipsisQuoted;
  },
});
Object.defineProperty(exports, "escapedEllipsis", {
  enumerable: true,
  get: function () {
    return ellipsis_1.escapedEllipsis;
  },
});
var injectImports_1 = require("./injectImports");
Object.defineProperty(exports, "injectImports", {
  enumerable: true,
  get: function () {
    return __importDefault(injectImports_1).default;
  },
});
var objectHasProperty_1 = require("./objectHasProperty");
Object.defineProperty(exports, "objectHasPorperty", {
  enumerable: true,
  get: function () {
    return objectHasProperty_1.objectHasPorperty;
  },
});
Object.defineProperty(exports, "objectHasProperties", {
  enumerable: true,
  get: function () {
    return objectHasProperty_1.objectHasProperties;
  },
});
var objectEntries_1 = require("./objectEntries");
Object.defineProperty(exports, "objectEntries", {
  enumerable: true,
  get: function () {
    return __importDefault(objectEntries_1).default;
  },
});
var objectMap_1 = require("./objectMap");
Object.defineProperty(exports, "objectMap", {
  enumerable: true,
  get: function () {
    return __importDefault(objectMap_1).default;
  },
});
var objectSort_1 = require("./objectSort");
Object.defineProperty(exports, "objectSort", {
  enumerable: true,
  get: function () {
    return __importDefault(objectSort_1).default;
  },
});
var regex_1 = require("./regex");
Object.defineProperty(exports, "isEmail", {
  enumerable: true,
  get: function () {
    return regex_1.isEmail;
  },
});
Object.defineProperty(exports, "isPassword", {
  enumerable: true,
  get: function () {
    return regex_1.isPassword;
  },
});
Object.defineProperty(exports, "isUsername", {
  enumerable: true,
  get: function () {
    return regex_1.isUsername;
  },
});
var stringPascalCase_1 = require("./stringPascalCase");
Object.defineProperty(exports, "stringPascalCase", {
  enumerable: true,
  get: function () {
    return __importDefault(stringPascalCase_1).default;
  },
});
var syntax_1 = require("./syntax");
Object.defineProperty(exports, "stringShouldMatch", {
  enumerable: true,
  get: function () {
    return syntax_1.stringShouldMatch;
  },
});
Object.defineProperty(exports, "shouldBeVariableName", {
  enumerable: true,
  get: function () {
    return syntax_1.shouldBeVariableName;
  },
});
Object.defineProperty(exports, "shouldBeResolvePath", {
  enumerable: true,
  get: function () {
    return syntax_1.shouldBeResolvePath;
  },
});
//# sourceMappingURL=browser.js.map