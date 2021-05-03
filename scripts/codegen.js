(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "graphql", "./visitor", "../common/types"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.plugin = void 0;
    const graphql_1 = require("graphql");
    const visitor_1 = require("./visitor");
    const types_1 = require("../common/types");
    const isFragmentDefinition = (node) => node.kind === graphql_1.Kind.FRAGMENT_DEFINITION;
    const mapLoadedFragments = (allAst, externalFragments) => [
        ...allAst.definitions.filter(isFragmentDefinition).map((fragmentDef) => ({
            node: fragmentDef,
            name: fragmentDef.name.value,
            onType: fragmentDef.typeCondition.name.value,
            isExternal: false,
        })),
        ...(externalFragments || []),
    ];
    const plugin = (schema, documents, config) => {
        const allAst = graphql_1.concatAST(documents.map((v) => v.document));
        const allFragments = mapLoadedFragments(allAst, config.externalFragments);
        const visitor = new visitor_1.BasicApolloVisitor(schema, allFragments, config, documents);
        const visitorResult = graphql_1.visit(allAst, { leave: visitor });
        const imports = visitor.getImports();
        const executions = visitor.getExections();
        const fragments = visitor.fragments;
        const definitions = visitorResult.definitions.filter(types_1.isString).join("\n");
        return {
            prepend: imports,
            content: [executions, fragments, definitions].join("\n\n"),
        };
    };
    exports.plugin = plugin;
});
