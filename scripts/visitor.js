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
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@graphql-codegen/visitor-plugin-common", "../common/injectImports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BasicApolloVisitor = void 0;
    const visitor_plugin_common_1 = require("@graphql-codegen/visitor-plugin-common");
    const injectImports_1 = __importDefault(require("../common/injectImports"));
    class BasicApolloVisitor extends visitor_plugin_common_1.ClientSideBaseVisitor {
        constructor(schema, fragments, _a, documents) {
            var { addSvelteContext, loadGetClientFrom = "svelte-apollo", noExport } = _a, config = __rest(_a, ["addSvelteContext", "loadGetClientFrom", "noExport"]);
            super(schema, fragments, Object.assign(Object.assign({}, config), { noExport: true }), {}, documents);
            this.imports = new Set();
            this.basicConfig = { addSvelteContext, loadGetClientFrom, noExport };
        }
        getImports() {
            const loads = {
                "@apollo/client": ["gql", ...this.imports],
            };
            if (this.basicConfig.addSvelteContext) {
                loads["@apollo/client"].push("ApolloClient");
                loads["svelte"] = ["getContext", "setContext"];
            }
            else {
                if (this.basicConfig.loadGetClientFrom) {
                    loads[this.basicConfig.loadGetClientFrom] = ["getClient"];
                }
            }
            if (this.config)
                return [injectImports_1.default(loads)];
        }
        getExections() {
            return !this.basicConfig.addSvelteContext ? "" : this.getSvelteContext();
        }
        buildOperation(node, documentVariableName, operationType, operationResultType, operationVariablesTypes) {
            const name = this.convertName(node.name.value);
            switch (operationType) {
                case "Query":
                    return this.buildQuery(name, documentVariableName, operationResultType, operationVariablesTypes);
                case "Mutation":
                    return this.buildMutation(name, documentVariableName, operationResultType, operationVariablesTypes);
                case "Subscription":
                    return this.buildSubscription(name, documentVariableName, operationResultType, operationVariablesTypes);
            }
        }
        buildQuery(name, documentVariableName, operationResultType, operationVariablesTypes) {
            this.imports.add("QueryOptions");
            const $e = this.basicConfig.noExport ? "" : "export ";
            return `${$e}const Query${name} = (
      options: Omit<QueryOptions<${operationVariablesTypes}>, "query">
    ) => getClient().query<${operationResultType}>({ query: ${documentVariableName}, ...options })
    `;
        }
        buildMutation(name, documentVariableName, operationResultType, operationVariablesTypes) {
            this.imports.add("MutationOptions");
            const $e = this.basicConfig.noExport ? "" : "export ";
            return `${$e}const Mutation${name} = (
      options: Omit<MutationOptions<${operationResultType}, ${operationVariablesTypes}>, "mutation">
    ) => getClient().mutate({ mutation: ${documentVariableName}, ...options })
    `;
        }
        buildSubscription(name, documentVariableName, operationResultType, operationVariablesTypes) {
            this.imports.add("SubscriptionOptions");
            const $e = this.basicConfig.noExport ? "" : "export ";
            return `${$e}const Subscription${name} = (
      options: Omit<SubscriptionOptions<${operationVariablesTypes}>, "query">
    ) => getClient().subscribe<${operationResultType}>({ query: ${documentVariableName}, ...options })
    `;
        }
        getSvelteContext() {
            const $e = this.basicConfig.noExport ? "" : "export ";
            return `
// addSvelteContext
const CLIENT = typeof Symbol !== "undefined" ? Symbol("client") : "@@client";

${$e}function getClient<TCache = any>(): ApolloClient<TCache> {
	const client = getContext(CLIENT);
	if (!client) {
		throw new Error(
			"ApolloClient has not been set yet, use setClient(new ApolloClient({ ... })) to define it"
		);
	}
	return client as ApolloClient<TCache>;
}

${$e}function setClient<TCache = any>(client: ApolloClient<TCache>): void {
	setContext(CLIENT, client);
}`;
        }
    }
    exports.BasicApolloVisitor = BasicApolloVisitor;
});
