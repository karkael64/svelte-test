import path from "path";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";

const options = {
  typeDefs: mergeTypeDefs(
    loadFilesSync(path.join(__dirname, "./src/**/*.graphql"))
  ),
  resolvers: mergeResolvers(
    loadFilesSync(path.join(__dirname, "./src/**/*.resolver.ts"))
  ),
};

const schema = makeExecutableSchema(options);

export default graphqlHTTP({
  schema,
  graphiql: true,
});
