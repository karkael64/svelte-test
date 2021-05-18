"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_graphql_1 = require("express-graphql");
const schema_1 = require("@graphql-tools/schema");
const merge_1 = require("@graphql-tools/merge");
const load_files_1 = require("@graphql-tools/load-files");
const options = {
    typeDefs: merge_1.mergeTypeDefs(load_files_1.loadFilesSync(path_1.default.join(__dirname, "../src/**/*.graphql"))),
    resolvers: merge_1.mergeResolvers(load_files_1.loadFilesSync(path_1.default.join(__dirname, "../src/**/*resolver.ts"))),
};
const schema = schema_1.makeExecutableSchema(options);
exports.default = express_graphql_1.graphqlHTTP({
    schema,
    graphiql: true,
});
