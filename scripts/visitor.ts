import type { GraphQLSchema, OperationDefinitionNode } from "graphql";
import {
  ClientSideBaseVisitor,
  LoadedFragment,
  RawClientSideBasePluginConfig,
} from "@graphql-codegen/visitor-plugin-common";
import type { Types } from "@graphql-codegen/plugin-helpers";
import injectImports from "../common/injectImports";

export type BasicApolloVisitorConfig = RawClientSideBasePluginConfig & {
  addSvelteContext: boolean;
  loadGetClientFrom: string;
};

export class BasicApolloVisitor extends ClientSideBaseVisitor {
  private imports = new Set<string>();
  private basicConfig: {
    addSvelteContext: boolean;
    loadGetClientFrom: string;
    noExport: boolean;
  };

  constructor(
    schema: GraphQLSchema,
    fragments: LoadedFragment[],
    {
      addSvelteContext,
      loadGetClientFrom = "svelte-apollo",
      noExport,
      ...config
    }: BasicApolloVisitorConfig,
    documents?: Types.DocumentFile[]
  ) {
    super(schema, fragments, { ...config, noExport: true }, {}, documents);
    this.basicConfig = { addSvelteContext, loadGetClientFrom, noExport };
  }

  public getImports(): string[] {
    const loads = {
      "@apollo/client": ["gql", ...this.imports],
    };

    if (this.basicConfig.addSvelteContext) {
      loads["@apollo/client"].push("ApolloClient");
      loads["svelte"] = ["getContext", "setContext"];
    } else {
      if (this.basicConfig.loadGetClientFrom) {
        loads[this.basicConfig.loadGetClientFrom] = ["getClient"];
      }
    }

    if (this.config) return [injectImports(loads)];
  }

  public getExections(): string {
    return !this.basicConfig.addSvelteContext ? "" : this.getSvelteContext();
  }

  protected buildOperation(
    node: OperationDefinitionNode,
    documentVariableName: string,
    operationType: "Query" | "Mutation" | "Subscription",
    operationResultType: string,
    operationVariablesTypes: string
  ): string {
    const name = this.convertName(node.name.value);

    switch (operationType) {
      case "Query":
        return this.buildQuery(
          name,
          documentVariableName,
          operationResultType,
          operationVariablesTypes
        );
      case "Mutation":
        return this.buildMutation(
          name,
          documentVariableName,
          operationResultType,
          operationVariablesTypes
        );
      case "Subscription":
        return this.buildSubscription(
          name,
          documentVariableName,
          operationResultType,
          operationVariablesTypes
        );
    }
  }

  private buildQuery(
    name: string,
    documentVariableName: string,
    operationResultType: string,
    operationVariablesTypes: string
  ): string {
    this.imports.add("QueryOptions");
    const $e = this.basicConfig.noExport ? "" : "export ";
    return `${$e}const Query${name} = (
      options: Omit<QueryOptions<${operationVariablesTypes}>, "query">
    ) => getClient().query<${operationResultType}>({ query: ${documentVariableName}, ...options })
    `;
  }

  private buildMutation(
    name: string,
    documentVariableName: string,
    operationResultType: string,
    operationVariablesTypes: string
  ): string {
    this.imports.add("MutationOptions");
    const $e = this.basicConfig.noExport ? "" : "export ";
    return `${$e}const Mutation${name} = (
      options: Omit<MutationOptions<${operationResultType}, ${operationVariablesTypes}>, "mutation">
    ) => getClient().mutate({ mutation: ${documentVariableName}, ...options })
    `;
  }

  private buildSubscription(
    name: string,
    documentVariableName: string,
    operationResultType: string,
    operationVariablesTypes: string
  ): string {
    this.imports.add("SubscriptionOptions");
    const $e = this.basicConfig.noExport ? "" : "export ";
    return `${$e}const Subscription${name} = (
      options: Omit<SubscriptionOptions<${operationVariablesTypes}>, "query">
    ) => getClient().subscribe<${operationResultType}>({ query: ${documentVariableName}, ...options })
    `;
  }

  private getSvelteContext(): string {
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
