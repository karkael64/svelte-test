import gql from "graphql-tag";
import { getContext, setContext } from "svelte";
import type {
  ApolloClient,
  QueryOptions,
  MutationOptions,
} from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Event = {
  __typename?: "Event";
  id: Scalars["String"];
  title: Scalars["String"];
  scheduledAt: Scalars["DateTime"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  group: Group;
};

export type File = {
  __typename?: "File";
  id: Scalars["String"];
  title: Scalars["String"];
  group: Group;
};

export type Group = {
  __typename?: "Group";
  id: Scalars["ID"];
  name: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  users: Array<Maybe<User>>;
  parentGroup: Group;
  childGroups: Array<Maybe<Group>>;
};

export type Hello = {
  __typename?: "Hello";
  date: Scalars["DateTime"];
  message?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  addUser: User;
};

export type MutationAddUserArgs = {
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  group: Scalars["ID"];
};

export type Post = {
  __typename?: "Post";
  id: Scalars["String"];
  title: Scalars["String"];
  group: Group;
};

export type Query = {
  __typename?: "Query";
  group: Group;
  groups: Array<Maybe<Group>>;
  hello: Hello;
  user: User;
  users: Array<Maybe<User>>;
};

export type QueryGroupArgs = {
  id: Scalars["ID"];
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  group: Group;
};

export type GroupsQueryVariables = Exact<{ [key: string]: never }>;

export type GroupsQuery = { __typename?: "Query" } & {
  groups: Array<
    Maybe<
      { __typename?: "Group" } & Pick<
        Group,
        "id" | "name" | "createdAt" | "updatedAt"
      >
    >
  >;
};

export type HelloQueryVariables = Exact<{ [key: string]: never }>;

export type HelloQuery = { __typename?: "Query" } & {
  hello: { __typename?: "Hello" } & Pick<Hello, "date" | "message">;
};

export type UserBodyFragment = { __typename?: "User" } & Pick<
  User,
  "id" | "email" | "name"
> & { group: { __typename?: "Group" } & Pick<Group, "id" | "name"> };

export type ListUsersQueryVariables = Exact<{ [key: string]: never }>;

export type ListUsersQuery = { __typename?: "Query" } & {
  users: Array<Maybe<{ __typename?: "User" } & UserBodyFragment>>;
};

export type GetUserQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type GetUserQuery = { __typename?: "Query" } & {
  user: { __typename?: "User" } & UserBodyFragment;
};

export type AddUserMutationVariables = Exact<{
  email: Scalars["String"];
  name: Scalars["String"];
  password: Scalars["String"];
  group: Scalars["ID"];
}>;

export type AddUserMutation = { __typename?: "Mutation" } & {
  addUser: { __typename?: "User" } & UserBodyFragment;
};

export interface PossibleTypesResultData {
  possibleTypes: {
    [key: string]: string[];
  };
}
const result: PossibleTypesResultData = {
  possibleTypes: {},
};
export default result;

const CLIENT = typeof Symbol !== "undefined" ? Symbol("client") : "@@client";

export function getClient<TCache = any>() {
  const client = getContext(CLIENT);
  if (!client) {
    throw new Error(
      "ApolloClient has not been set yet, use setClient(new ApolloClient({ ... })) to define it"
    );
  }
  return client as ApolloClient<TCache>;
}

export function setClient<TCache = any>(client: ApolloClient<TCache>): void {
  setContext(CLIENT, client);
}

export const UserBodyFragmentDoc = gql`
  fragment UserBody on User {
    id
    email
    name
    group {
      id
      name
    }
  }
`;

export const GroupsDocument = gql`
  query Groups {
    groups {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const QueryGroups = (
  options: Omit<QueryOptions<GroupsQueryVariables>, "query">
) => getClient().query<GroupsQuery>({ query: GroupsDocument, ...options });

export const HelloDocument = gql`
  query Hello {
    hello {
      date
      message
    }
  }
`;
export const QueryHello = (
  options: Omit<QueryOptions<HelloQueryVariables>, "query">
) => getClient().query<HelloQuery>({ query: HelloDocument, ...options });

export const ListUsersDocument = gql`
  query ListUsers {
    users {
      ...UserBody
    }
  }
  ${UserBodyFragmentDoc}
`;
export const QueryListUsers = (
  options: Omit<QueryOptions<ListUsersQueryVariables>, "query">
) =>
  getClient().query<ListUsersQuery>({ query: ListUsersDocument, ...options });

export const GetUserDocument = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      ...UserBody
    }
  }
  ${UserBodyFragmentDoc}
`;
export const QueryGetUser = (
  options: Omit<QueryOptions<GetUserQueryVariables>, "query"> = {}
) => getClient().query<GetUserQuery>({ query: GetUserDocument, ...options });

export const AddUserDocument = gql`
  mutation AddUser(
    $email: String!
    $name: String!
    $password: String!
    $group: ID!
  ) {
    addUser(email: $email, name: $name, password: $password, group: $group) {
      ...UserBody
    }
  }
  ${UserBodyFragmentDoc}
`;
export const MutationAddUser = (
  options: Omit<
    MutationOptions<AddUserMutation, AddUserMutationVariables>,
    "mutation"
  > = {}
) => getClient().mutate({ mutation: AddUserDocument, ...options });
