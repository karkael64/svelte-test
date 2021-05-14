/**
 * Client
 **/

import * as runtime from "./runtime";
declare const prisma: unique symbol;
export type PrismaPromise<A> = Promise<A> & { [prisma]: true };
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P;
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}`
    ? Tuple[K] extends PrismaPromise<infer X>
      ? X
      : UnwrapPromise<Tuple[K]>
    : UnwrapPromise<Tuple[K]>;
};

/**
 * Model Group
 */

export type Group = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  parentGroupId: string | null;
};

/**
 * Model User
 */

export type User = {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  groupId: string;
};

/**
 * Model Post
 */

export type Post = {
  id: string;
  title: string;
  groupId: string;
};

/**
 * Model File
 */

export type File = {
  id: string;
  title: string;
  groupId: string;
};

/**
 * Model Event
 */

export type Event = {
  id: string;
  title: string;
  scheduledAt: Date;
  createdAt: Date;
  updatedAt: Date;
  groupId: string;
};

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Groups
 * const groups = await prisma.group.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof T
    ? T["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T["log"]>
      : never
    : never,
  GlobalReject = "rejectOnNotFound" extends keyof T
    ? T["rejectOnNotFound"]
    : false
> {
  /**
   * @private
   */
  private fetcher;
  /**
   * @private
   */
  private readonly dmmf;
  /**
   * @private
   */
  private connectionPromise?;
  /**
   * @private
   */
  private disconnectionPromise?;
  /**
   * @private
   */
  private readonly engineConfig;
  /**
   * @private
   */
  private readonly measurePerformance;

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Groups
   * const groups = await prisma.group.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U | "beforeExit">(
    eventType: V,
    callback: (
      event: V extends "query"
        ? Prisma.QueryEvent
        : V extends "beforeExit"
        ? () => Promise<void>
        : Prisma.LogEvent
    ) => void
  ): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = any>(
    query: string | TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = any>(
    query: string | TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(
    arg: [...P]
  ): Promise<UnwrapTuple<P>>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Groups
   * const groups = await prisma.group.findMany()
   * ```
   */
  get group(): Prisma.GroupDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   */
  get post(): Prisma.PostDelegate<GlobalReject>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Files
   * const files = await prisma.file.findMany()
   * ```
   */
  get file(): Prisma.FileDelegate<GlobalReject>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
   * ```
   */
  get event(): Prisma.EventDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  /**
   * Prisma Client JS version: 2.22.1
   * Query Engine version: 60cc71d884972ab4e897f0277c4b84383dddaf6c
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue =
    | string
    | number
    | boolean
    | null
    | JsonObject
    | JsonArray;

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = { [Key in string]?: JsonValue };

  export interface InputJsonArray extends Array<JsonValue> {}

  export type InputJsonValue =
    | undefined
    | string
    | number
    | boolean
    | null
    | InputJsonObject
    | InputJsonArray;
  type SelectAndInclude = {
    select: any;
    include: any;
  };
  type HasSelect = {
    select: any;
  };
  type HasInclude = {
    include: any;
  };
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? "Please either choose `select` or `include`"
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S;

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => Promise<any>
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key;
  }[keyof T];

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } &
    (T extends SelectAndInclude
      ? "Please either choose `select` or `include`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } &
    K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T | U extends object
    ? (Without<T, U> & U) | (Without<U, T> & T)
    : T | U;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Buffer
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  export type Union = any;

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Exact<A, W = unknown> = W extends unknown
    ? A extends Narrowable
      ? Cast<A, W>
      : Cast<
          { [K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never },
          { [K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K] }
        >
    : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "avg" | "sum" | "count" | "min" | "max">
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<
    T,
    TupleToUnion<K>
  >;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(
      prisma: PrismaClient<any, any>,
      debug?: boolean,
      hooks?: Hooks | undefined
    );
    request<T>(
      document: any,
      dataPath?: string[],
      rootField?: string,
      typeName?: string,
      isList?: boolean,
      callsite?: string
    ): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(
      document: any,
      data: any,
      path: string[],
      rootField?: string,
      isList?: boolean
    ): any;
  }

  export const ModelName: {
    Group: "Group";
    User: "User";
    Post: "Post";
    File: "File";
    Event: "Event";
  };

  export type ModelName = typeof ModelName[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  export type RejectOnNotFound = boolean | ((error: Error) => Error);
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound };
  export type RejectPerOperation = {
    [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound;
  };
  type IsReject<T> = T extends true
    ? True
    : T extends (err: Error) => Error
    ? True
    : False;
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions["rejectOnNotFound"],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null.
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation;
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources;

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>;
  }

  export type Hooks = {
    beforeRequest?: (options: {
      query: string;
      path: string[];
      rootField?: string;
      typeName?: string;
      document: any;
    }) => any;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<
    T extends LogLevel | LogDefinition
  > = T extends LogDefinition
    ? T["emit"] extends "event"
      ? T["level"]
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findMany"
    | "findFirst"
    | "create"
    | "createMany"
    | "update"
    | "updateMany"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count";

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>
  ) => Promise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>
  ): LogLevel | undefined;
  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Models
   */

  /**
   * Model Group
   */

  export type AggregateGroup = {
    count: GroupCountAggregateOutputType | null;
    min: GroupMinAggregateOutputType | null;
    max: GroupMaxAggregateOutputType | null;
  };

  export type GroupMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    parentGroupId: string | null;
  };

  export type GroupMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    parentGroupId: string | null;
  };

  export type GroupCountAggregateOutputType = {
    id: number;
    name: number;
    createdAt: number;
    updatedAt: number;
    parentGroupId: number;
    _all: number;
  };

  export type GroupMinAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    parentGroupId?: true;
  };

  export type GroupMaxAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    parentGroupId?: true;
  };

  export type GroupCountAggregateInputType = {
    id?: true;
    name?: true;
    createdAt?: true;
    updatedAt?: true;
    parentGroupId?: true;
    _all?: true;
  };

  export type GroupAggregateArgs = {
    /**
     * Filter which Group to aggregate.
     **/
    where?: GroupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Groups to fetch.
     **/
    orderBy?: Enumerable<GroupOrderByInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     **/
    cursor?: GroupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Groups from the position of the cursor.
     **/
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Groups.
     **/
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Groups
     **/
    count?: true | GroupCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    min?: GroupMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    max?: GroupMaxAggregateInputType;
  };

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
    [P in keyof T & keyof AggregateGroup]: P extends "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>;
  };

  export type GroupGroupByArgs = {
    where?: GroupWhereInput;
    orderBy?: Enumerable<GroupOrderByInput>;
    by: Array<GroupScalarFieldEnum>;
    having?: GroupScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    count?: GroupCountAggregateInputType | true;
    min?: GroupMinAggregateInputType;
    max?: GroupMaxAggregateInputType;
  };

  export type GroupGroupByOutputType = {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    parentGroupId: string | null;
    count: GroupCountAggregateOutputType | null;
    min: GroupMinAggregateOutputType | null;
    max: GroupMaxAggregateOutputType | null;
  };

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Promise<
    Array<
      PickArray<GroupGroupByOutputType, T["by"]> &
        {
          [P in keyof T & keyof GroupGroupByOutputType]: GetScalarType<
            T[P],
            GroupGroupByOutputType[P]
          >;
        }
    >
  >;

  export type GroupSelect = {
    id?: boolean;
    name?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    users?: boolean | UserFindManyArgs;
    posts?: boolean | PostFindManyArgs;
    files?: boolean | FileFindManyArgs;
    events?: boolean | EventFindManyArgs;
    parentGroupId?: boolean;
    parentGroup?: boolean | GroupArgs;
    childGroups?: boolean | GroupFindManyArgs;
  };

  export type GroupInclude = {
    users?: boolean | UserFindManyArgs;
    posts?: boolean | PostFindManyArgs;
    files?: boolean | FileFindManyArgs;
    events?: boolean | EventFindManyArgs;
    parentGroup?: boolean | GroupArgs;
    childGroups?: boolean | GroupFindManyArgs;
  };

  export type GroupGetPayload<
    S extends boolean | null | undefined | GroupArgs,
    U = keyof S
  > = S extends true
    ? Group
    : S extends undefined
    ? never
    : S extends GroupArgs | GroupFindManyArgs
    ? "include" extends U
      ? Group &
          {
            [P in TrueKeys<S["include"]>]: P extends "users"
              ? Array<UserGetPayload<S["include"][P]>>
              : P extends "posts"
              ? Array<PostGetPayload<S["include"][P]>>
              : P extends "files"
              ? Array<FileGetPayload<S["include"][P]>>
              : P extends "events"
              ? Array<EventGetPayload<S["include"][P]>>
              : P extends "parentGroup"
              ? GroupGetPayload<S["include"][P]> | null
              : P extends "childGroups"
              ? Array<GroupGetPayload<S["include"][P]>>
              : never;
          }
      : "select" extends U
      ? {
          [P in TrueKeys<S["select"]>]: P extends keyof Group
            ? Group[P]
            : P extends "users"
            ? Array<UserGetPayload<S["select"][P]>>
            : P extends "posts"
            ? Array<PostGetPayload<S["select"][P]>>
            : P extends "files"
            ? Array<FileGetPayload<S["select"][P]>>
            : P extends "events"
            ? Array<EventGetPayload<S["select"][P]>>
            : P extends "parentGroup"
            ? GroupGetPayload<S["select"][P]> | null
            : P extends "childGroups"
            ? Array<GroupGetPayload<S["select"][P]>>
            : never;
        }
      : Group
    : Group;

  type GroupCountArgs = Merge<
    Omit<GroupFindManyArgs, "select" | "include"> & {
      select?: GroupCountAggregateInputType | true;
    }
  >;

  export interface GroupDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends GroupFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args: SelectSubset<T, GroupFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "Group"
    > extends True
      ? CheckSelect<
          T,
          Prisma__GroupClient<Group>,
          Prisma__GroupClient<GroupGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__GroupClient<Group | null>,
          Prisma__GroupClient<GroupGetPayload<T> | null>
        >;

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends GroupFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args?: SelectSubset<T, GroupFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "Group"
    > extends True
      ? CheckSelect<
          T,
          Prisma__GroupClient<Group>,
          Prisma__GroupClient<GroupGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__GroupClient<Group | null>,
          Prisma__GroupClient<GroupGetPayload<T> | null>
        >;

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     *
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends GroupFindManyArgs>(
      args?: SelectSubset<T, GroupFindManyArgs>
    ): CheckSelect<
      T,
      PrismaPromise<Array<Group>>,
      PrismaPromise<Array<GroupGetPayload<T>>>
    >;

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     *
     **/
    create<T extends GroupCreateArgs>(
      args: SelectSubset<T, GroupCreateArgs>
    ): CheckSelect<
      T,
      Prisma__GroupClient<Group>,
      Prisma__GroupClient<GroupGetPayload<T>>
    >;

    /**
     * Create many Groups.
     *     @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     *     @example
     *     // Create many Groups
     *     const group = await prisma.group.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends GroupCreateManyArgs>(
      args?: SelectSubset<T, GroupCreateManyArgs>
    ): PrismaPromise<BatchPayload>;

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     *
     **/
    delete<T extends GroupDeleteArgs>(
      args: SelectSubset<T, GroupDeleteArgs>
    ): CheckSelect<
      T,
      Prisma__GroupClient<Group>,
      Prisma__GroupClient<GroupGetPayload<T>>
    >;

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends GroupUpdateArgs>(
      args: SelectSubset<T, GroupUpdateArgs>
    ): CheckSelect<
      T,
      Prisma__GroupClient<Group>,
      Prisma__GroupClient<GroupGetPayload<T>>
    >;

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends GroupDeleteManyArgs>(
      args?: SelectSubset<T, GroupDeleteManyArgs>
    ): PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends GroupUpdateManyArgs>(
      args: SelectSubset<T, GroupUpdateManyArgs>
    ): PrismaPromise<BatchPayload>;

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     **/
    upsert<T extends GroupUpsertArgs>(
      args: SelectSubset<T, GroupUpsertArgs>
    ): CheckSelect<
      T,
      Prisma__GroupClient<Group>,
      Prisma__GroupClient<GroupGetPayload<T>>
    >;

    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
     **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>
    ): PrismaPromise<
      T extends _Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], GroupCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends GroupAggregateArgs>(
      args: Subset<T, GroupAggregateArgs>
    ): PrismaPromise<GetGroupAggregateType<T>>;

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs["orderBy"] }
        : { orderBy?: GroupGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetGroupGroupByPayload<T>
      : Promise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__GroupClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    );
    readonly [Symbol.toStringTag]: "PrismaClientPromise";

    users<T extends UserFindManyArgs = {}>(
      args?: Subset<T, UserFindManyArgs>
    ): CheckSelect<
      T,
      PrismaPromise<Array<User>>,
      PrismaPromise<Array<UserGetPayload<T>>>
    >;

    posts<T extends PostFindManyArgs = {}>(
      args?: Subset<T, PostFindManyArgs>
    ): CheckSelect<
      T,
      PrismaPromise<Array<Post>>,
      PrismaPromise<Array<PostGetPayload<T>>>
    >;

    files<T extends FileFindManyArgs = {}>(
      args?: Subset<T, FileFindManyArgs>
    ): CheckSelect<
      T,
      PrismaPromise<Array<File>>,
      PrismaPromise<Array<FileGetPayload<T>>>
    >;

    events<T extends EventFindManyArgs = {}>(
      args?: Subset<T, EventFindManyArgs>
    ): CheckSelect<
      T,
      PrismaPromise<Array<Event>>,
      PrismaPromise<Array<EventGetPayload<T>>>
    >;

    parentGroup<T extends GroupArgs = {}>(
      args?: Subset<T, GroupArgs>
    ): CheckSelect<
      T,
      Prisma__GroupClient<Group | null>,
      Prisma__GroupClient<GroupGetPayload<T> | null>
    >;

    childGroups<T extends GroupFindManyArgs = {}>(
      args?: Subset<T, GroupFindManyArgs>
    ): CheckSelect<
      T,
      PrismaPromise<Array<Group>>,
      PrismaPromise<Array<GroupGetPayload<T>>>
    >;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Group
     **/
    select?: GroupSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: GroupInclude | null;
    /**
     * Throw an Error if a Group can't be found
     **/
    rejectOnNotFound?: RejectOnNotFound;
    /**
     * Filter, which Group to fetch.
     **/
    where: GroupWhereUniqueInput;
  };

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Group
     **/
    select?: GroupSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: GroupInclude | null;
    /**
     * Throw an Error if a Group can't be found
     **/
    rejectOnNotFound?: RejectOnNotFound;
    /**
     * Filter, which Group to fetch.
     **/
    where?: GroupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Groups to fetch.
     **/
    orderBy?: Enumerable<GroupOrderByInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Groups.
     **/
    cursor?: GroupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Groups from the position of the cursor.
     **/
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Groups.
     **/
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Groups.
     **/
    distinct?: Enumerable<GroupScalarFieldEnum>;
  };

  /**
   * Group findMany
   */
  export type GroupFindManyArgs = {
    /**
     * Select specific fields to fetch from the Group
     **/
    select?: GroupSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: GroupInclude | null;
    /**
     * Filter, which Groups to fetch.
     **/
    where?: GroupWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Groups to fetch.
     **/
    orderBy?: Enumerable<GroupOrderByInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Groups.
     **/
    cursor?: GroupWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Groups from the position of the cursor.
     **/
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Groups.
     **/
    skip?: number;
    distinct?: Enumerable<GroupScalarFieldEnum>;
  };

  /**
   * Group create
   */
  export type GroupCreateArgs = {
    /**
     * Select specific fields to fetch from the Group
     **/
    select?: GroupSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: GroupInclude | null;
    /**
     * The data needed to create a Group.
     **/
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>;
  };

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs = {
    data: Enumerable<GroupCreateManyInput>;
    skipDuplicates?: boolean;
  };

  /**
   * Group update
   */
  export type GroupUpdateArgs = {
    /**
     * Select specific fields to fetch from the Group
     **/
    select?: GroupSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: GroupInclude | null;
    /**
     * The data needed to update a Group.
     **/
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>;
    /**
     * Choose, which Group to update.
     **/
    where: GroupWhereUniqueInput;
  };

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs = {
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>;
    where?: GroupWhereInput;
  };

  /**
   * Group upsert
   */
  export type GroupUpsertArgs = {
    /**
     * Select specific fields to fetch from the Group
     **/
    select?: GroupSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: GroupInclude | null;
    /**
     * The filter to search for the Group to update in case it exists.
     **/
    where: GroupWhereUniqueInput;
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     **/
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>;
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     **/
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>;
  };

  /**
   * Group delete
   */
  export type GroupDeleteArgs = {
    /**
     * Select specific fields to fetch from the Group
     **/
    select?: GroupSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: GroupInclude | null;
    /**
     * Filter which Group to delete.
     **/
    where: GroupWhereUniqueInput;
  };

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs = {
    where?: GroupWhereInput;
  };

  /**
   * Group without action
   */
  export type GroupArgs = {
    /**
     * Select specific fields to fetch from the Group
     **/
    select?: GroupSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: GroupInclude | null;
  };

  /**
   * Model User
   */

  export type AggregateUser = {
    count: UserCountAggregateOutputType | null;
    min: UserMinAggregateOutputType | null;
    max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    password: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    groupId: string | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    name: string | null;
    password: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    groupId: string | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    name: number;
    password: number;
    createdAt: number;
    updatedAt: number;
    groupId: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
    groupId?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
    groupId?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    name?: true;
    password?: true;
    createdAt?: true;
    updatedAt?: true;
    groupId?: true;
    _all?: true;
  };

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     **/
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     **/
    orderBy?: Enumerable<UserOrderByInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     **/
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     **/
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     **/
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Users
     **/
    count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type UserGroupByArgs = {
    where?: UserWhereInput;
    orderBy?: Enumerable<UserOrderByInput>;
    by: Array<UserScalarFieldEnum>;
    having?: UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    count?: UserCountAggregateInputType | true;
    min?: UserMinAggregateInputType;
    max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    name: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    groupId: string;
    count: UserCountAggregateOutputType | null;
    min: UserMinAggregateOutputType | null;
    max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T["by"]> &
        {
          [P in keyof T & keyof UserGroupByOutputType]: GetScalarType<
            T[P],
            UserGroupByOutputType[P]
          >;
        }
    >
  >;

  export type UserSelect = {
    id?: boolean;
    email?: boolean;
    name?: boolean;
    password?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    groupId?: boolean;
    group?: boolean | GroupArgs;
  };

  export type UserInclude = {
    group?: boolean | GroupArgs;
  };

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
  > = S extends true
    ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ? "include" extends U
      ? User &
          {
            [P in TrueKeys<S["include"]>]: P extends "group"
              ? GroupGetPayload<S["include"][P]>
              : never;
          }
      : "select" extends U
      ? {
          [P in TrueKeys<S["select"]>]: P extends keyof User
            ? User[P]
            : P extends "group"
            ? GroupGetPayload<S["select"][P]>
            : never;
        }
      : User
    : User;

  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, "select" | "include"> & {
      select?: UserCountAggregateInputType | true;
    }
  >;

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends UserFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "User"
    > extends True
      ? CheckSelect<
          T,
          Prisma__UserClient<User>,
          Prisma__UserClient<UserGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__UserClient<User | null>,
          Prisma__UserClient<UserGetPayload<T> | null>
        >;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends UserFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "User"
    > extends True
      ? CheckSelect<
          T,
          Prisma__UserClient<User>,
          Prisma__UserClient<UserGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__UserClient<User | null>,
          Prisma__UserClient<UserGetPayload<T> | null>
        >;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<
      T,
      PrismaPromise<Array<User>>,
      PrismaPromise<Array<UserGetPayload<T>>>
    >;

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<
      T,
      Prisma__UserClient<User>,
      Prisma__UserClient<UserGetPayload<T>>
    >;

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<
      T,
      Prisma__UserClient<User>,
      Prisma__UserClient<UserGetPayload<T>>
    >;

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<
      T,
      Prisma__UserClient<User>,
      Prisma__UserClient<UserGetPayload<T>>
    >;

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<
      T,
      Prisma__UserClient<User>,
      Prisma__UserClient<UserGetPayload<T>>
    >;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>
    ): PrismaPromise<
      T extends _Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>
    ): PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs["orderBy"] }
        : { orderBy?: UserGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    );
    readonly [Symbol.toStringTag]: "PrismaClientPromise";

    group<T extends GroupArgs = {}>(
      args?: Subset<T, GroupArgs>
    ): CheckSelect<
      T,
      Prisma__GroupClient<Group | null>,
      Prisma__GroupClient<GroupGetPayload<T> | null>
    >;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     **/
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: UserInclude | null;
    /**
     * Throw an Error if a User can't be found
     **/
    rejectOnNotFound?: RejectOnNotFound;
    /**
     * Filter, which User to fetch.
     **/
    where: UserWhereUniqueInput;
  };

  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     **/
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: UserInclude | null;
    /**
     * Throw an Error if a User can't be found
     **/
    rejectOnNotFound?: RejectOnNotFound;
    /**
     * Filter, which User to fetch.
     **/
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     **/
    orderBy?: Enumerable<UserOrderByInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Users.
     **/
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     **/
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     **/
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Users.
     **/
    distinct?: Enumerable<UserScalarFieldEnum>;
  };

  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     **/
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: UserInclude | null;
    /**
     * Filter, which Users to fetch.
     **/
    where?: UserWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Users to fetch.
     **/
    orderBy?: Enumerable<UserOrderByInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Users.
     **/
    cursor?: UserWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Users from the position of the cursor.
     **/
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Users.
     **/
    skip?: number;
    distinct?: Enumerable<UserScalarFieldEnum>;
  };

  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     **/
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: UserInclude | null;
    /**
     * The data needed to create a User.
     **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>;
  };

  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>;
    skipDuplicates?: boolean;
  };

  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     **/
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: UserInclude | null;
    /**
     * The data needed to update a User.
     **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
    /**
     * Choose, which User to update.
     **/
    where: UserWhereUniqueInput;
  };

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>;
    where?: UserWhereInput;
  };

  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     **/
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: UserInclude | null;
    /**
     * The filter to search for the User to update in case it exists.
     **/
    where: UserWhereUniqueInput;
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>;
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>;
  };

  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     **/
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: UserInclude | null;
    /**
     * Filter which User to delete.
     **/
    where: UserWhereUniqueInput;
  };

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput;
  };

  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     **/
    select?: UserSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: UserInclude | null;
  };

  /**
   * Model Post
   */

  export type AggregatePost = {
    count: PostCountAggregateOutputType | null;
    min: PostMinAggregateOutputType | null;
    max: PostMaxAggregateOutputType | null;
  };

  export type PostMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    groupId: string | null;
  };

  export type PostMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    groupId: string | null;
  };

  export type PostCountAggregateOutputType = {
    id: number;
    title: number;
    groupId: number;
    _all: number;
  };

  export type PostMinAggregateInputType = {
    id?: true;
    title?: true;
    groupId?: true;
  };

  export type PostMaxAggregateInputType = {
    id?: true;
    title?: true;
    groupId?: true;
  };

  export type PostCountAggregateInputType = {
    id?: true;
    title?: true;
    groupId?: true;
    _all?: true;
  };

  export type PostAggregateArgs = {
    /**
     * Filter which Post to aggregate.
     **/
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     **/
    orderBy?: Enumerable<PostOrderByInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     **/
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     **/
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     **/
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Posts
     **/
    count?: true | PostCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    min?: PostMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    max?: PostMaxAggregateInputType;
  };

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
    [P in keyof T & keyof AggregatePost]: P extends "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>;
  };

  export type PostGroupByArgs = {
    where?: PostWhereInput;
    orderBy?: Enumerable<PostOrderByInput>;
    by: Array<PostScalarFieldEnum>;
    having?: PostScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    count?: PostCountAggregateInputType | true;
    min?: PostMinAggregateInputType;
    max?: PostMaxAggregateInputType;
  };

  export type PostGroupByOutputType = {
    id: string;
    title: string;
    groupId: string;
    count: PostCountAggregateOutputType | null;
    min: PostMinAggregateOutputType | null;
    max: PostMaxAggregateOutputType | null;
  };

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Promise<
    Array<
      PickArray<PostGroupByOutputType, T["by"]> &
        {
          [P in keyof T & keyof PostGroupByOutputType]: GetScalarType<
            T[P],
            PostGroupByOutputType[P]
          >;
        }
    >
  >;

  export type PostSelect = {
    id?: boolean;
    title?: boolean;
    groupId?: boolean;
    group?: boolean | GroupArgs;
  };

  export type PostInclude = {
    group?: boolean | GroupArgs;
  };

  export type PostGetPayload<
    S extends boolean | null | undefined | PostArgs,
    U = keyof S
  > = S extends true
    ? Post
    : S extends undefined
    ? never
    : S extends PostArgs | PostFindManyArgs
    ? "include" extends U
      ? Post &
          {
            [P in TrueKeys<S["include"]>]: P extends "group"
              ? GroupGetPayload<S["include"][P]>
              : never;
          }
      : "select" extends U
      ? {
          [P in TrueKeys<S["select"]>]: P extends keyof Post
            ? Post[P]
            : P extends "group"
            ? GroupGetPayload<S["select"][P]>
            : never;
        }
      : Post
    : Post;

  type PostCountArgs = Merge<
    Omit<PostFindManyArgs, "select" | "include"> & {
      select?: PostCountAggregateInputType | true;
    }
  >;

  export interface PostDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends PostFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args: SelectSubset<T, PostFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "Post"
    > extends True
      ? CheckSelect<
          T,
          Prisma__PostClient<Post>,
          Prisma__PostClient<PostGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__PostClient<Post | null>,
          Prisma__PostClient<PostGetPayload<T> | null>
        >;

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends PostFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args?: SelectSubset<T, PostFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "Post"
    > extends True
      ? CheckSelect<
          T,
          Prisma__PostClient<Post>,
          Prisma__PostClient<PostGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__PostClient<Post | null>,
          Prisma__PostClient<PostGetPayload<T> | null>
        >;

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     *
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs>
    ): CheckSelect<
      T,
      PrismaPromise<Array<Post>>,
      PrismaPromise<Array<PostGetPayload<T>>>
    >;

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     *
     **/
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs>
    ): CheckSelect<
      T,
      Prisma__PostClient<Post>,
      Prisma__PostClient<PostGetPayload<T>>
    >;

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs>
    ): PrismaPromise<BatchPayload>;

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     *
     **/
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs>
    ): CheckSelect<
      T,
      Prisma__PostClient<Post>,
      Prisma__PostClient<PostGetPayload<T>>
    >;

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs>
    ): CheckSelect<
      T,
      Prisma__PostClient<Post>,
      Prisma__PostClient<PostGetPayload<T>>
    >;

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs>
    ): PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs>
    ): PrismaPromise<BatchPayload>;

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     **/
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs>
    ): CheckSelect<
      T,
      Prisma__PostClient<Post>,
      Prisma__PostClient<PostGetPayload<T>>
    >;

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
     **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>
    ): PrismaPromise<
      T extends _Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], PostCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends PostAggregateArgs>(
      args: Subset<T, PostAggregateArgs>
    ): PrismaPromise<GetPostAggregateType<T>>;

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs["orderBy"] }
        : { orderBy?: PostGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetPostGroupByPayload<T> : Promise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    );
    readonly [Symbol.toStringTag]: "PrismaClientPromise";

    group<T extends GroupArgs = {}>(
      args?: Subset<T, GroupArgs>
    ): CheckSelect<
      T,
      Prisma__GroupClient<Group | null>,
      Prisma__GroupClient<GroupGetPayload<T> | null>
    >;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Post
     **/
    select?: PostSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: PostInclude | null;
    /**
     * Throw an Error if a Post can't be found
     **/
    rejectOnNotFound?: RejectOnNotFound;
    /**
     * Filter, which Post to fetch.
     **/
    where: PostWhereUniqueInput;
  };

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Post
     **/
    select?: PostSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: PostInclude | null;
    /**
     * Throw an Error if a Post can't be found
     **/
    rejectOnNotFound?: RejectOnNotFound;
    /**
     * Filter, which Post to fetch.
     **/
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     **/
    orderBy?: Enumerable<PostOrderByInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Posts.
     **/
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     **/
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     **/
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Posts.
     **/
    distinct?: Enumerable<PostScalarFieldEnum>;
  };

  /**
   * Post findMany
   */
  export type PostFindManyArgs = {
    /**
     * Select specific fields to fetch from the Post
     **/
    select?: PostSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: PostInclude | null;
    /**
     * Filter, which Posts to fetch.
     **/
    where?: PostWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Posts to fetch.
     **/
    orderBy?: Enumerable<PostOrderByInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Posts.
     **/
    cursor?: PostWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Posts from the position of the cursor.
     **/
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Posts.
     **/
    skip?: number;
    distinct?: Enumerable<PostScalarFieldEnum>;
  };

  /**
   * Post create
   */
  export type PostCreateArgs = {
    /**
     * Select specific fields to fetch from the Post
     **/
    select?: PostSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: PostInclude | null;
    /**
     * The data needed to create a Post.
     **/
    data: XOR<PostCreateInput, PostUncheckedCreateInput>;
  };

  /**
   * Post createMany
   */
  export type PostCreateManyArgs = {
    data: Enumerable<PostCreateManyInput>;
    skipDuplicates?: boolean;
  };

  /**
   * Post update
   */
  export type PostUpdateArgs = {
    /**
     * Select specific fields to fetch from the Post
     **/
    select?: PostSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: PostInclude | null;
    /**
     * The data needed to update a Post.
     **/
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>;
    /**
     * Choose, which Post to update.
     **/
    where: PostWhereUniqueInput;
  };

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs = {
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>;
    where?: PostWhereInput;
  };

  /**
   * Post upsert
   */
  export type PostUpsertArgs = {
    /**
     * Select specific fields to fetch from the Post
     **/
    select?: PostSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: PostInclude | null;
    /**
     * The filter to search for the Post to update in case it exists.
     **/
    where: PostWhereUniqueInput;
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     **/
    create: XOR<PostCreateInput, PostUncheckedCreateInput>;
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     **/
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>;
  };

  /**
   * Post delete
   */
  export type PostDeleteArgs = {
    /**
     * Select specific fields to fetch from the Post
     **/
    select?: PostSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: PostInclude | null;
    /**
     * Filter which Post to delete.
     **/
    where: PostWhereUniqueInput;
  };

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs = {
    where?: PostWhereInput;
  };

  /**
   * Post without action
   */
  export type PostArgs = {
    /**
     * Select specific fields to fetch from the Post
     **/
    select?: PostSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: PostInclude | null;
  };

  /**
   * Model File
   */

  export type AggregateFile = {
    count: FileCountAggregateOutputType | null;
    min: FileMinAggregateOutputType | null;
    max: FileMaxAggregateOutputType | null;
  };

  export type FileMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    groupId: string | null;
  };

  export type FileMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    groupId: string | null;
  };

  export type FileCountAggregateOutputType = {
    id: number;
    title: number;
    groupId: number;
    _all: number;
  };

  export type FileMinAggregateInputType = {
    id?: true;
    title?: true;
    groupId?: true;
  };

  export type FileMaxAggregateInputType = {
    id?: true;
    title?: true;
    groupId?: true;
  };

  export type FileCountAggregateInputType = {
    id?: true;
    title?: true;
    groupId?: true;
    _all?: true;
  };

  export type FileAggregateArgs = {
    /**
     * Filter which File to aggregate.
     **/
    where?: FileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Files to fetch.
     **/
    orderBy?: Enumerable<FileOrderByInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     **/
    cursor?: FileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Files from the position of the cursor.
     **/
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Files.
     **/
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Files
     **/
    count?: true | FileCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    min?: FileMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    max?: FileMaxAggregateInputType;
  };

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
    [P in keyof T & keyof AggregateFile]: P extends "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>;
  };

  export type FileGroupByArgs = {
    where?: FileWhereInput;
    orderBy?: Enumerable<FileOrderByInput>;
    by: Array<FileScalarFieldEnum>;
    having?: FileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    count?: FileCountAggregateInputType | true;
    min?: FileMinAggregateInputType;
    max?: FileMaxAggregateInputType;
  };

  export type FileGroupByOutputType = {
    id: string;
    title: string;
    groupId: string;
    count: FileCountAggregateOutputType | null;
    min: FileMinAggregateOutputType | null;
    max: FileMaxAggregateOutputType | null;
  };

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Promise<
    Array<
      PickArray<FileGroupByOutputType, T["by"]> &
        {
          [P in keyof T & keyof FileGroupByOutputType]: GetScalarType<
            T[P],
            FileGroupByOutputType[P]
          >;
        }
    >
  >;

  export type FileSelect = {
    id?: boolean;
    title?: boolean;
    groupId?: boolean;
    group?: boolean | GroupArgs;
  };

  export type FileInclude = {
    group?: boolean | GroupArgs;
  };

  export type FileGetPayload<
    S extends boolean | null | undefined | FileArgs,
    U = keyof S
  > = S extends true
    ? File
    : S extends undefined
    ? never
    : S extends FileArgs | FileFindManyArgs
    ? "include" extends U
      ? File &
          {
            [P in TrueKeys<S["include"]>]: P extends "group"
              ? GroupGetPayload<S["include"][P]>
              : never;
          }
      : "select" extends U
      ? {
          [P in TrueKeys<S["select"]>]: P extends keyof File
            ? File[P]
            : P extends "group"
            ? GroupGetPayload<S["select"][P]>
            : never;
        }
      : File
    : File;

  type FileCountArgs = Merge<
    Omit<FileFindManyArgs, "select" | "include"> & {
      select?: FileCountAggregateInputType | true;
    }
  >;

  export interface FileDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends FileFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args: SelectSubset<T, FileFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "File"
    > extends True
      ? CheckSelect<
          T,
          Prisma__FileClient<File>,
          Prisma__FileClient<FileGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__FileClient<File | null>,
          Prisma__FileClient<FileGetPayload<T> | null>
        >;

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends FileFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args?: SelectSubset<T, FileFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "File"
    > extends True
      ? CheckSelect<
          T,
          Prisma__FileClient<File>,
          Prisma__FileClient<FileGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__FileClient<File | null>,
          Prisma__FileClient<FileGetPayload<T> | null>
        >;

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     *
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends FileFindManyArgs>(
      args?: SelectSubset<T, FileFindManyArgs>
    ): CheckSelect<
      T,
      PrismaPromise<Array<File>>,
      PrismaPromise<Array<FileGetPayload<T>>>
    >;

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     *
     **/
    create<T extends FileCreateArgs>(
      args: SelectSubset<T, FileCreateArgs>
    ): CheckSelect<
      T,
      Prisma__FileClient<File>,
      Prisma__FileClient<FileGetPayload<T>>
    >;

    /**
     * Create many Files.
     *     @param {FileCreateManyArgs} args - Arguments to create many Files.
     *     @example
     *     // Create many Files
     *     const file = await prisma.file.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends FileCreateManyArgs>(
      args?: SelectSubset<T, FileCreateManyArgs>
    ): PrismaPromise<BatchPayload>;

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     *
     **/
    delete<T extends FileDeleteArgs>(
      args: SelectSubset<T, FileDeleteArgs>
    ): CheckSelect<
      T,
      Prisma__FileClient<File>,
      Prisma__FileClient<FileGetPayload<T>>
    >;

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends FileUpdateArgs>(
      args: SelectSubset<T, FileUpdateArgs>
    ): CheckSelect<
      T,
      Prisma__FileClient<File>,
      Prisma__FileClient<FileGetPayload<T>>
    >;

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends FileDeleteManyArgs>(
      args?: SelectSubset<T, FileDeleteManyArgs>
    ): PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends FileUpdateManyArgs>(
      args: SelectSubset<T, FileUpdateManyArgs>
    ): PrismaPromise<BatchPayload>;

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     **/
    upsert<T extends FileUpsertArgs>(
      args: SelectSubset<T, FileUpsertArgs>
    ): CheckSelect<
      T,
      Prisma__FileClient<File>,
      Prisma__FileClient<FileGetPayload<T>>
    >;

    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
     **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>
    ): PrismaPromise<
      T extends _Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], FileCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FileAggregateArgs>(
      args: Subset<T, FileAggregateArgs>
    ): PrismaPromise<GetFileAggregateType<T>>;

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs["orderBy"] }
        : { orderBy?: FileGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors ? GetFileGroupByPayload<T> : Promise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FileClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    );
    readonly [Symbol.toStringTag]: "PrismaClientPromise";

    group<T extends GroupArgs = {}>(
      args?: Subset<T, GroupArgs>
    ): CheckSelect<
      T,
      Prisma__GroupClient<Group | null>,
      Prisma__GroupClient<GroupGetPayload<T> | null>
    >;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * File findUnique
   */
  export type FileFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the File
     **/
    select?: FileSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: FileInclude | null;
    /**
     * Throw an Error if a File can't be found
     **/
    rejectOnNotFound?: RejectOnNotFound;
    /**
     * Filter, which File to fetch.
     **/
    where: FileWhereUniqueInput;
  };

  /**
   * File findFirst
   */
  export type FileFindFirstArgs = {
    /**
     * Select specific fields to fetch from the File
     **/
    select?: FileSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: FileInclude | null;
    /**
     * Throw an Error if a File can't be found
     **/
    rejectOnNotFound?: RejectOnNotFound;
    /**
     * Filter, which File to fetch.
     **/
    where?: FileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Files to fetch.
     **/
    orderBy?: Enumerable<FileOrderByInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Files.
     **/
    cursor?: FileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Files from the position of the cursor.
     **/
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Files.
     **/
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Files.
     **/
    distinct?: Enumerable<FileScalarFieldEnum>;
  };

  /**
   * File findMany
   */
  export type FileFindManyArgs = {
    /**
     * Select specific fields to fetch from the File
     **/
    select?: FileSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: FileInclude | null;
    /**
     * Filter, which Files to fetch.
     **/
    where?: FileWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Files to fetch.
     **/
    orderBy?: Enumerable<FileOrderByInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Files.
     **/
    cursor?: FileWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Files from the position of the cursor.
     **/
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Files.
     **/
    skip?: number;
    distinct?: Enumerable<FileScalarFieldEnum>;
  };

  /**
   * File create
   */
  export type FileCreateArgs = {
    /**
     * Select specific fields to fetch from the File
     **/
    select?: FileSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: FileInclude | null;
    /**
     * The data needed to create a File.
     **/
    data: XOR<FileCreateInput, FileUncheckedCreateInput>;
  };

  /**
   * File createMany
   */
  export type FileCreateManyArgs = {
    data: Enumerable<FileCreateManyInput>;
    skipDuplicates?: boolean;
  };

  /**
   * File update
   */
  export type FileUpdateArgs = {
    /**
     * Select specific fields to fetch from the File
     **/
    select?: FileSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: FileInclude | null;
    /**
     * The data needed to update a File.
     **/
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>;
    /**
     * Choose, which File to update.
     **/
    where: FileWhereUniqueInput;
  };

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs = {
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>;
    where?: FileWhereInput;
  };

  /**
   * File upsert
   */
  export type FileUpsertArgs = {
    /**
     * Select specific fields to fetch from the File
     **/
    select?: FileSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: FileInclude | null;
    /**
     * The filter to search for the File to update in case it exists.
     **/
    where: FileWhereUniqueInput;
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     **/
    create: XOR<FileCreateInput, FileUncheckedCreateInput>;
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     **/
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>;
  };

  /**
   * File delete
   */
  export type FileDeleteArgs = {
    /**
     * Select specific fields to fetch from the File
     **/
    select?: FileSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: FileInclude | null;
    /**
     * Filter which File to delete.
     **/
    where: FileWhereUniqueInput;
  };

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs = {
    where?: FileWhereInput;
  };

  /**
   * File without action
   */
  export type FileArgs = {
    /**
     * Select specific fields to fetch from the File
     **/
    select?: FileSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: FileInclude | null;
  };

  /**
   * Model Event
   */

  export type AggregateEvent = {
    count: EventCountAggregateOutputType | null;
    min: EventMinAggregateOutputType | null;
    max: EventMaxAggregateOutputType | null;
  };

  export type EventMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    scheduledAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    groupId: string | null;
  };

  export type EventMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    scheduledAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    groupId: string | null;
  };

  export type EventCountAggregateOutputType = {
    id: number;
    title: number;
    scheduledAt: number;
    createdAt: number;
    updatedAt: number;
    groupId: number;
    _all: number;
  };

  export type EventMinAggregateInputType = {
    id?: true;
    title?: true;
    scheduledAt?: true;
    createdAt?: true;
    updatedAt?: true;
    groupId?: true;
  };

  export type EventMaxAggregateInputType = {
    id?: true;
    title?: true;
    scheduledAt?: true;
    createdAt?: true;
    updatedAt?: true;
    groupId?: true;
  };

  export type EventCountAggregateInputType = {
    id?: true;
    title?: true;
    scheduledAt?: true;
    createdAt?: true;
    updatedAt?: true;
    groupId?: true;
    _all?: true;
  };

  export type EventAggregateArgs = {
    /**
     * Filter which Event to aggregate.
     **/
    where?: EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     **/
    orderBy?: Enumerable<EventOrderByInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     **/
    cursor?: EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     **/
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     **/
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Events
     **/
    count?: true | EventCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    min?: EventMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    max?: EventMaxAggregateInputType;
  };

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
    [P in keyof T & keyof AggregateEvent]: P extends "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>;
  };

  export type EventGroupByArgs = {
    where?: EventWhereInput;
    orderBy?: Enumerable<EventOrderByInput>;
    by: Array<EventScalarFieldEnum>;
    having?: EventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    count?: EventCountAggregateInputType | true;
    min?: EventMinAggregateInputType;
    max?: EventMaxAggregateInputType;
  };

  export type EventGroupByOutputType = {
    id: string;
    title: string;
    scheduledAt: Date;
    createdAt: Date;
    updatedAt: Date;
    groupId: string;
    count: EventCountAggregateOutputType | null;
    min: EventMinAggregateOutputType | null;
    max: EventMaxAggregateOutputType | null;
  };

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Promise<
    Array<
      PickArray<EventGroupByOutputType, T["by"]> &
        {
          [P in keyof T & keyof EventGroupByOutputType]: GetScalarType<
            T[P],
            EventGroupByOutputType[P]
          >;
        }
    >
  >;

  export type EventSelect = {
    id?: boolean;
    title?: boolean;
    scheduledAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    groupId?: boolean;
    group?: boolean | GroupArgs;
  };

  export type EventInclude = {
    group?: boolean | GroupArgs;
  };

  export type EventGetPayload<
    S extends boolean | null | undefined | EventArgs,
    U = keyof S
  > = S extends true
    ? Event
    : S extends undefined
    ? never
    : S extends EventArgs | EventFindManyArgs
    ? "include" extends U
      ? Event &
          {
            [P in TrueKeys<S["include"]>]: P extends "group"
              ? GroupGetPayload<S["include"][P]>
              : never;
          }
      : "select" extends U
      ? {
          [P in TrueKeys<S["select"]>]: P extends keyof Event
            ? Event[P]
            : P extends "group"
            ? GroupGetPayload<S["select"][P]>
            : never;
        }
      : Event
    : Event;

  type EventCountArgs = Merge<
    Omit<EventFindManyArgs, "select" | "include"> & {
      select?: EventCountAggregateInputType | true;
    }
  >;

  export interface EventDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<
      T extends EventFindUniqueArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args: SelectSubset<T, EventFindUniqueArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findUnique",
      "Event"
    > extends True
      ? CheckSelect<
          T,
          Prisma__EventClient<Event>,
          Prisma__EventClient<EventGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__EventClient<Event | null>,
          Prisma__EventClient<EventGetPayload<T> | null>
        >;

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<
      T extends EventFindFirstArgs,
      LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound
        ? T["rejectOnNotFound"]
        : undefined
    >(
      args?: SelectSubset<T, EventFindFirstArgs>
    ): HasReject<
      GlobalRejectSettings,
      LocalRejectSettings,
      "findFirst",
      "Event"
    > extends True
      ? CheckSelect<
          T,
          Prisma__EventClient<Event>,
          Prisma__EventClient<EventGetPayload<T>>
        >
      : CheckSelect<
          T,
          Prisma__EventClient<Event | null>,
          Prisma__EventClient<EventGetPayload<T> | null>
        >;

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     *
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends EventFindManyArgs>(
      args?: SelectSubset<T, EventFindManyArgs>
    ): CheckSelect<
      T,
      PrismaPromise<Array<Event>>,
      PrismaPromise<Array<EventGetPayload<T>>>
    >;

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     *
     **/
    create<T extends EventCreateArgs>(
      args: SelectSubset<T, EventCreateArgs>
    ): CheckSelect<
      T,
      Prisma__EventClient<Event>,
      Prisma__EventClient<EventGetPayload<T>>
    >;

    /**
     * Create many Events.
     *     @param {EventCreateManyArgs} args - Arguments to create many Events.
     *     @example
     *     // Create many Events
     *     const event = await prisma.event.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends EventCreateManyArgs>(
      args?: SelectSubset<T, EventCreateManyArgs>
    ): PrismaPromise<BatchPayload>;

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     *
     **/
    delete<T extends EventDeleteArgs>(
      args: SelectSubset<T, EventDeleteArgs>
    ): CheckSelect<
      T,
      Prisma__EventClient<Event>,
      Prisma__EventClient<EventGetPayload<T>>
    >;

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends EventUpdateArgs>(
      args: SelectSubset<T, EventUpdateArgs>
    ): CheckSelect<
      T,
      Prisma__EventClient<Event>,
      Prisma__EventClient<EventGetPayload<T>>
    >;

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends EventDeleteManyArgs>(
      args?: SelectSubset<T, EventDeleteManyArgs>
    ): PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends EventUpdateManyArgs>(
      args: SelectSubset<T, EventUpdateManyArgs>
    ): PrismaPromise<BatchPayload>;

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     **/
    upsert<T extends EventUpsertArgs>(
      args: SelectSubset<T, EventUpsertArgs>
    ): CheckSelect<
      T,
      Prisma__EventClient<Event>,
      Prisma__EventClient<EventGetPayload<T>>
    >;

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
     **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>
    ): PrismaPromise<
      T extends _Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], EventCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends EventAggregateArgs>(
      args: Subset<T, EventAggregateArgs>
    ): PrismaPromise<GetEventAggregateType<T>>;

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs["orderBy"] }
        : { orderBy?: EventGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends TupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [
                  Error,
                  "Field ",
                  P,
                  ` in "having" needs to be provided in "by"`
                ];
          }[HavingFields]
        : "take" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : "skip" extends Keys<T>
        ? "orderBy" extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields]
    >(
      args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors
    ): {} extends InputErrors
      ? GetEventGroupByPayload<T>
      : Promise<InputErrors>;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EventClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(
      _dmmf: runtime.DMMFClass,
      _fetcher: PrismaClientFetcher,
      _queryType: "query" | "mutation",
      _rootField: string,
      _clientMethod: string,
      _args: any,
      _dataPath: string[],
      _errorFormat: ErrorFormat,
      _measurePerformance?: boolean | undefined,
      _isList?: boolean
    );
    readonly [Symbol.toStringTag]: "PrismaClientPromise";

    group<T extends GroupArgs = {}>(
      args?: Subset<T, GroupArgs>
    ): CheckSelect<
      T,
      Prisma__GroupClient<Group | null>,
      Prisma__GroupClient<GroupGetPayload<T> | null>
    >;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null
    ): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null
    ): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Event
     **/
    select?: EventSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: EventInclude | null;
    /**
     * Throw an Error if a Event can't be found
     **/
    rejectOnNotFound?: RejectOnNotFound;
    /**
     * Filter, which Event to fetch.
     **/
    where: EventWhereUniqueInput;
  };

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Event
     **/
    select?: EventSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: EventInclude | null;
    /**
     * Throw an Error if a Event can't be found
     **/
    rejectOnNotFound?: RejectOnNotFound;
    /**
     * Filter, which Event to fetch.
     **/
    where?: EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     **/
    orderBy?: Enumerable<EventOrderByInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Events.
     **/
    cursor?: EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     **/
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     **/
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Events.
     **/
    distinct?: Enumerable<EventScalarFieldEnum>;
  };

  /**
   * Event findMany
   */
  export type EventFindManyArgs = {
    /**
     * Select specific fields to fetch from the Event
     **/
    select?: EventSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: EventInclude | null;
    /**
     * Filter, which Events to fetch.
     **/
    where?: EventWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Events to fetch.
     **/
    orderBy?: Enumerable<EventOrderByInput>;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Events.
     **/
    cursor?: EventWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Events from the position of the cursor.
     **/
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Events.
     **/
    skip?: number;
    distinct?: Enumerable<EventScalarFieldEnum>;
  };

  /**
   * Event create
   */
  export type EventCreateArgs = {
    /**
     * Select specific fields to fetch from the Event
     **/
    select?: EventSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: EventInclude | null;
    /**
     * The data needed to create a Event.
     **/
    data: XOR<EventCreateInput, EventUncheckedCreateInput>;
  };

  /**
   * Event createMany
   */
  export type EventCreateManyArgs = {
    data: Enumerable<EventCreateManyInput>;
    skipDuplicates?: boolean;
  };

  /**
   * Event update
   */
  export type EventUpdateArgs = {
    /**
     * Select specific fields to fetch from the Event
     **/
    select?: EventSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: EventInclude | null;
    /**
     * The data needed to update a Event.
     **/
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>;
    /**
     * Choose, which Event to update.
     **/
    where: EventWhereUniqueInput;
  };

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs = {
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>;
    where?: EventWhereInput;
  };

  /**
   * Event upsert
   */
  export type EventUpsertArgs = {
    /**
     * Select specific fields to fetch from the Event
     **/
    select?: EventSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: EventInclude | null;
    /**
     * The filter to search for the Event to update in case it exists.
     **/
    where: EventWhereUniqueInput;
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     **/
    create: XOR<EventCreateInput, EventUncheckedCreateInput>;
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     **/
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>;
  };

  /**
   * Event delete
   */
  export type EventDeleteArgs = {
    /**
     * Select specific fields to fetch from the Event
     **/
    select?: EventSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: EventInclude | null;
    /**
     * Filter which Event to delete.
     **/
    where: EventWhereUniqueInput;
  };

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs = {
    where?: EventWhereInput;
  };

  /**
   * Event without action
   */
  export type EventArgs = {
    /**
     * Select specific fields to fetch from the Event
     **/
    select?: EventSelect | null;
    /**
     * Choose, which related nodes to fetch as well.
     **/
    include?: EventInclude | null;
  };

  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const GroupScalarFieldEnum: {
    id: "id";
    name: "name";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    parentGroupId: "parentGroupId";
  };

  export type GroupScalarFieldEnum = typeof GroupScalarFieldEnum[keyof typeof GroupScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: "id";
    email: "email";
    name: "name";
    password: "password";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    groupId: "groupId";
  };

  export type UserScalarFieldEnum = typeof UserScalarFieldEnum[keyof typeof UserScalarFieldEnum];

  export const PostScalarFieldEnum: {
    id: "id";
    title: "title";
    groupId: "groupId";
  };

  export type PostScalarFieldEnum = typeof PostScalarFieldEnum[keyof typeof PostScalarFieldEnum];

  export const FileScalarFieldEnum: {
    id: "id";
    title: "title";
    groupId: "groupId";
  };

  export type FileScalarFieldEnum = typeof FileScalarFieldEnum[keyof typeof FileScalarFieldEnum];

  export const EventScalarFieldEnum: {
    id: "id";
    title: "title";
    scheduledAt: "scheduledAt";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
    groupId: "groupId";
  };

  export type EventScalarFieldEnum = typeof EventScalarFieldEnum[keyof typeof EventScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = typeof SortOrder[keyof typeof SortOrder];

  export const QueryMode: {
    default: "default";
    insensitive: "insensitive";
  };

  export type QueryMode = typeof QueryMode[keyof typeof QueryMode];

  /**
   * Deep Input Types
   */

  export type GroupWhereInput = {
    AND?: Enumerable<GroupWhereInput>;
    OR?: Enumerable<GroupWhereInput>;
    NOT?: Enumerable<GroupWhereInput>;
    id?: StringFilter | string;
    name?: StringFilter | string;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
    users?: UserListRelationFilter;
    posts?: PostListRelationFilter;
    files?: FileListRelationFilter;
    events?: EventListRelationFilter;
    parentGroupId?: StringNullableFilter | string | null;
    parentGroup?: XOR<GroupRelationFilter, GroupWhereInput> | null;
    childGroups?: GroupListRelationFilter;
  };

  export type GroupOrderByInput = {
    id?: SortOrder;
    name?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    parentGroupId?: SortOrder;
  };

  export type GroupWhereUniqueInput = {
    id?: string;
  };

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: Enumerable<GroupScalarWhereWithAggregatesInput>;
    OR?: Enumerable<GroupScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<GroupScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter | string;
    name?: StringWithAggregatesFilter | string;
    createdAt?: DateTimeWithAggregatesFilter | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter | Date | string;
    parentGroupId?: StringNullableWithAggregatesFilter | string | null;
  };

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>;
    OR?: Enumerable<UserWhereInput>;
    NOT?: Enumerable<UserWhereInput>;
    id?: StringFilter | string;
    email?: StringFilter | string;
    name?: StringFilter | string;
    password?: StringFilter | string;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
    groupId?: StringFilter | string;
    group?: XOR<GroupRelationFilter, GroupWhereInput>;
  };

  export type UserOrderByInput = {
    id?: SortOrder;
    email?: SortOrder;
    name?: SortOrder;
    password?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    groupId?: SortOrder;
  };

  export type UserWhereUniqueInput = {
    id?: string;
    email?: string;
  };

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>;
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter | string;
    email?: StringWithAggregatesFilter | string;
    name?: StringWithAggregatesFilter | string;
    password?: StringWithAggregatesFilter | string;
    createdAt?: DateTimeWithAggregatesFilter | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter | Date | string;
    groupId?: StringWithAggregatesFilter | string;
  };

  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>;
    OR?: Enumerable<PostWhereInput>;
    NOT?: Enumerable<PostWhereInput>;
    id?: StringFilter | string;
    title?: StringFilter | string;
    groupId?: StringFilter | string;
    group?: XOR<GroupRelationFilter, GroupWhereInput>;
  };

  export type PostOrderByInput = {
    id?: SortOrder;
    title?: SortOrder;
    groupId?: SortOrder;
  };

  export type PostWhereUniqueInput = {
    id?: string;
  };

  export type PostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostScalarWhereWithAggregatesInput>;
    OR?: Enumerable<PostScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<PostScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter | string;
    title?: StringWithAggregatesFilter | string;
    groupId?: StringWithAggregatesFilter | string;
  };

  export type FileWhereInput = {
    AND?: Enumerable<FileWhereInput>;
    OR?: Enumerable<FileWhereInput>;
    NOT?: Enumerable<FileWhereInput>;
    id?: StringFilter | string;
    title?: StringFilter | string;
    groupId?: StringFilter | string;
    group?: XOR<GroupRelationFilter, GroupWhereInput>;
  };

  export type FileOrderByInput = {
    id?: SortOrder;
    title?: SortOrder;
    groupId?: SortOrder;
  };

  export type FileWhereUniqueInput = {
    id?: string;
  };

  export type FileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FileScalarWhereWithAggregatesInput>;
    OR?: Enumerable<FileScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<FileScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter | string;
    title?: StringWithAggregatesFilter | string;
    groupId?: StringWithAggregatesFilter | string;
  };

  export type EventWhereInput = {
    AND?: Enumerable<EventWhereInput>;
    OR?: Enumerable<EventWhereInput>;
    NOT?: Enumerable<EventWhereInput>;
    id?: StringFilter | string;
    title?: StringFilter | string;
    scheduledAt?: DateTimeFilter | Date | string;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
    groupId?: StringFilter | string;
    group?: XOR<GroupRelationFilter, GroupWhereInput>;
  };

  export type EventOrderByInput = {
    id?: SortOrder;
    title?: SortOrder;
    scheduledAt?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    groupId?: SortOrder;
  };

  export type EventWhereUniqueInput = {
    id?: string;
  };

  export type EventScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EventScalarWhereWithAggregatesInput>;
    OR?: Enumerable<EventScalarWhereWithAggregatesInput>;
    NOT?: Enumerable<EventScalarWhereWithAggregatesInput>;
    id?: StringWithAggregatesFilter | string;
    title?: StringWithAggregatesFilter | string;
    scheduledAt?: DateTimeWithAggregatesFilter | Date | string;
    createdAt?: DateTimeWithAggregatesFilter | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter | Date | string;
    groupId?: StringWithAggregatesFilter | string;
  };

  export type GroupCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserCreateNestedManyWithoutGroupInput;
    posts?: PostCreateNestedManyWithoutGroupInput;
    files?: FileCreateNestedManyWithoutGroupInput;
    events?: EventCreateNestedManyWithoutGroupInput;
    parentGroup?: GroupCreateNestedOneWithoutChildGroupsInput;
    childGroups?: GroupCreateNestedManyWithoutParentGroupInput;
  };

  export type GroupUncheckedCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentGroupId?: string | null;
    users?: UserUncheckedCreateNestedManyWithoutGroupInput;
    posts?: PostUncheckedCreateNestedManyWithoutGroupInput;
    files?: FileUncheckedCreateNestedManyWithoutGroupInput;
    events?: EventUncheckedCreateNestedManyWithoutGroupInput;
    childGroups?: GroupUncheckedCreateNestedManyWithoutParentGroupInput;
  };

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUpdateManyWithoutGroupInput;
    posts?: PostUpdateManyWithoutGroupInput;
    files?: FileUpdateManyWithoutGroupInput;
    events?: EventUpdateManyWithoutGroupInput;
    parentGroup?: GroupUpdateOneWithoutChildGroupsInput;
    childGroups?: GroupUpdateManyWithoutParentGroupInput;
  };

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parentGroupId?: NullableStringFieldUpdateOperationsInput | string | null;
    users?: UserUncheckedUpdateManyWithoutGroupInput;
    posts?: PostUncheckedUpdateManyWithoutGroupInput;
    files?: FileUncheckedUpdateManyWithoutGroupInput;
    events?: EventUncheckedUpdateManyWithoutGroupInput;
    childGroups?: GroupUncheckedUpdateManyWithoutParentGroupInput;
  };

  export type GroupCreateManyInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentGroupId?: string | null;
  };

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parentGroupId?: NullableStringFieldUpdateOperationsInput | string | null;
  };

  export type UserCreateInput = {
    id?: string;
    email: string;
    name: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    group: GroupCreateNestedOneWithoutUsersInput;
  };

  export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    name: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    groupId: string;
  };

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    group?: GroupUpdateOneRequiredWithoutUsersInput;
  };

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: StringFieldUpdateOperationsInput | string;
  };

  export type UserCreateManyInput = {
    id?: string;
    email: string;
    name: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    groupId: string;
  };

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: StringFieldUpdateOperationsInput | string;
  };

  export type PostCreateInput = {
    id?: string;
    title: string;
    group: GroupCreateNestedOneWithoutPostsInput;
  };

  export type PostUncheckedCreateInput = {
    id?: string;
    title: string;
    groupId: string;
  };

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    group?: GroupUpdateOneRequiredWithoutPostsInput;
  };

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    groupId?: StringFieldUpdateOperationsInput | string;
  };

  export type PostCreateManyInput = {
    id?: string;
    title: string;
    groupId: string;
  };

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
  };

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    groupId?: StringFieldUpdateOperationsInput | string;
  };

  export type FileCreateInput = {
    id?: string;
    title: string;
    group: GroupCreateNestedOneWithoutFilesInput;
  };

  export type FileUncheckedCreateInput = {
    id?: string;
    title: string;
    groupId: string;
  };

  export type FileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    group?: GroupUpdateOneRequiredWithoutFilesInput;
  };

  export type FileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    groupId?: StringFieldUpdateOperationsInput | string;
  };

  export type FileCreateManyInput = {
    id?: string;
    title: string;
    groupId: string;
  };

  export type FileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
  };

  export type FileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    groupId?: StringFieldUpdateOperationsInput | string;
  };

  export type EventCreateInput = {
    id?: string;
    title: string;
    scheduledAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    group: GroupCreateNestedOneWithoutEventsInput;
  };

  export type EventUncheckedCreateInput = {
    id?: string;
    title: string;
    scheduledAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    groupId: string;
  };

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    group?: GroupUpdateOneRequiredWithoutEventsInput;
  };

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: StringFieldUpdateOperationsInput | string;
  };

  export type EventCreateManyInput = {
    id?: string;
    title: string;
    scheduledAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    groupId: string;
  };

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    groupId?: StringFieldUpdateOperationsInput | string;
  };

  export type StringFilter = {
    equals?: string;
    in?: Enumerable<string>;
    notIn?: Enumerable<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: QueryMode;
    not?: NestedStringFilter | string;
  };

  export type DateTimeFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string>;
    notIn?: Enumerable<Date> | Enumerable<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeFilter | Date | string;
  };

  export type UserListRelationFilter = {
    every?: UserWhereInput;
    some?: UserWhereInput;
    none?: UserWhereInput;
  };

  export type PostListRelationFilter = {
    every?: PostWhereInput;
    some?: PostWhereInput;
    none?: PostWhereInput;
  };

  export type FileListRelationFilter = {
    every?: FileWhereInput;
    some?: FileWhereInput;
    none?: FileWhereInput;
  };

  export type EventListRelationFilter = {
    every?: EventWhereInput;
    some?: EventWhereInput;
    none?: EventWhereInput;
  };

  export type StringNullableFilter = {
    equals?: string | null;
    in?: Enumerable<string> | null;
    notIn?: Enumerable<string> | null;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: QueryMode;
    not?: NestedStringNullableFilter | string | null;
  };

  export type GroupRelationFilter = {
    is?: GroupWhereInput;
    isNot?: GroupWhereInput;
  };

  export type GroupListRelationFilter = {
    every?: GroupWhereInput;
    some?: GroupWhereInput;
    none?: GroupWhereInput;
  };

  export type StringWithAggregatesFilter = {
    equals?: string;
    in?: Enumerable<string>;
    notIn?: Enumerable<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter | string;
    count?: NestedIntFilter;
    min?: NestedStringFilter;
    max?: NestedStringFilter;
  };

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string>;
    notIn?: Enumerable<Date> | Enumerable<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeWithAggregatesFilter | Date | string;
    count?: NestedIntFilter;
    min?: NestedDateTimeFilter;
    max?: NestedDateTimeFilter;
  };

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null;
    in?: Enumerable<string> | null;
    notIn?: Enumerable<string> | null;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter | string | null;
    count?: NestedIntNullableFilter;
    min?: NestedStringNullableFilter;
    max?: NestedStringNullableFilter;
  };

  export type UserCreateNestedManyWithoutGroupInput = {
    create?: XOR<
      Enumerable<UserCreateWithoutGroupInput>,
      Enumerable<UserUncheckedCreateWithoutGroupInput>
    >;
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutGroupInput>;
    createMany?: UserCreateManyGroupInputEnvelope;
    connect?: Enumerable<UserWhereUniqueInput>;
  };

  export type PostCreateNestedManyWithoutGroupInput = {
    create?: XOR<
      Enumerable<PostCreateWithoutGroupInput>,
      Enumerable<PostUncheckedCreateWithoutGroupInput>
    >;
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutGroupInput>;
    createMany?: PostCreateManyGroupInputEnvelope;
    connect?: Enumerable<PostWhereUniqueInput>;
  };

  export type FileCreateNestedManyWithoutGroupInput = {
    create?: XOR<
      Enumerable<FileCreateWithoutGroupInput>,
      Enumerable<FileUncheckedCreateWithoutGroupInput>
    >;
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutGroupInput>;
    createMany?: FileCreateManyGroupInputEnvelope;
    connect?: Enumerable<FileWhereUniqueInput>;
  };

  export type EventCreateNestedManyWithoutGroupInput = {
    create?: XOR<
      Enumerable<EventCreateWithoutGroupInput>,
      Enumerable<EventUncheckedCreateWithoutGroupInput>
    >;
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutGroupInput>;
    createMany?: EventCreateManyGroupInputEnvelope;
    connect?: Enumerable<EventWhereUniqueInput>;
  };

  export type GroupCreateNestedOneWithoutChildGroupsInput = {
    create?: XOR<
      GroupCreateWithoutChildGroupsInput,
      GroupUncheckedCreateWithoutChildGroupsInput
    >;
    connectOrCreate?: GroupCreateOrConnectWithoutChildGroupsInput;
    connect?: GroupWhereUniqueInput;
  };

  export type GroupCreateNestedManyWithoutParentGroupInput = {
    create?: XOR<
      Enumerable<GroupCreateWithoutParentGroupInput>,
      Enumerable<GroupUncheckedCreateWithoutParentGroupInput>
    >;
    connectOrCreate?: Enumerable<GroupCreateOrConnectWithoutParentGroupInput>;
    createMany?: GroupCreateManyParentGroupInputEnvelope;
    connect?: Enumerable<GroupWhereUniqueInput>;
  };

  export type UserUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<
      Enumerable<UserCreateWithoutGroupInput>,
      Enumerable<UserUncheckedCreateWithoutGroupInput>
    >;
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutGroupInput>;
    createMany?: UserCreateManyGroupInputEnvelope;
    connect?: Enumerable<UserWhereUniqueInput>;
  };

  export type PostUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<
      Enumerable<PostCreateWithoutGroupInput>,
      Enumerable<PostUncheckedCreateWithoutGroupInput>
    >;
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutGroupInput>;
    createMany?: PostCreateManyGroupInputEnvelope;
    connect?: Enumerable<PostWhereUniqueInput>;
  };

  export type FileUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<
      Enumerable<FileCreateWithoutGroupInput>,
      Enumerable<FileUncheckedCreateWithoutGroupInput>
    >;
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutGroupInput>;
    createMany?: FileCreateManyGroupInputEnvelope;
    connect?: Enumerable<FileWhereUniqueInput>;
  };

  export type EventUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<
      Enumerable<EventCreateWithoutGroupInput>,
      Enumerable<EventUncheckedCreateWithoutGroupInput>
    >;
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutGroupInput>;
    createMany?: EventCreateManyGroupInputEnvelope;
    connect?: Enumerable<EventWhereUniqueInput>;
  };

  export type GroupUncheckedCreateNestedManyWithoutParentGroupInput = {
    create?: XOR<
      Enumerable<GroupCreateWithoutParentGroupInput>,
      Enumerable<GroupUncheckedCreateWithoutParentGroupInput>
    >;
    connectOrCreate?: Enumerable<GroupCreateOrConnectWithoutParentGroupInput>;
    createMany?: GroupCreateManyParentGroupInputEnvelope;
    connect?: Enumerable<GroupWhereUniqueInput>;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type UserUpdateManyWithoutGroupInput = {
    create?: XOR<
      Enumerable<UserCreateWithoutGroupInput>,
      Enumerable<UserUncheckedCreateWithoutGroupInput>
    >;
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutGroupInput>;
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutGroupInput>;
    createMany?: UserCreateManyGroupInputEnvelope;
    connect?: Enumerable<UserWhereUniqueInput>;
    set?: Enumerable<UserWhereUniqueInput>;
    disconnect?: Enumerable<UserWhereUniqueInput>;
    delete?: Enumerable<UserWhereUniqueInput>;
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutGroupInput>;
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutGroupInput>;
    deleteMany?: Enumerable<UserScalarWhereInput>;
  };

  export type PostUpdateManyWithoutGroupInput = {
    create?: XOR<
      Enumerable<PostCreateWithoutGroupInput>,
      Enumerable<PostUncheckedCreateWithoutGroupInput>
    >;
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutGroupInput>;
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutGroupInput>;
    createMany?: PostCreateManyGroupInputEnvelope;
    connect?: Enumerable<PostWhereUniqueInput>;
    set?: Enumerable<PostWhereUniqueInput>;
    disconnect?: Enumerable<PostWhereUniqueInput>;
    delete?: Enumerable<PostWhereUniqueInput>;
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutGroupInput>;
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutGroupInput>;
    deleteMany?: Enumerable<PostScalarWhereInput>;
  };

  export type FileUpdateManyWithoutGroupInput = {
    create?: XOR<
      Enumerable<FileCreateWithoutGroupInput>,
      Enumerable<FileUncheckedCreateWithoutGroupInput>
    >;
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutGroupInput>;
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutGroupInput>;
    createMany?: FileCreateManyGroupInputEnvelope;
    connect?: Enumerable<FileWhereUniqueInput>;
    set?: Enumerable<FileWhereUniqueInput>;
    disconnect?: Enumerable<FileWhereUniqueInput>;
    delete?: Enumerable<FileWhereUniqueInput>;
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutGroupInput>;
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutGroupInput>;
    deleteMany?: Enumerable<FileScalarWhereInput>;
  };

  export type EventUpdateManyWithoutGroupInput = {
    create?: XOR<
      Enumerable<EventCreateWithoutGroupInput>,
      Enumerable<EventUncheckedCreateWithoutGroupInput>
    >;
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutGroupInput>;
    upsert?: Enumerable<EventUpsertWithWhereUniqueWithoutGroupInput>;
    createMany?: EventCreateManyGroupInputEnvelope;
    connect?: Enumerable<EventWhereUniqueInput>;
    set?: Enumerable<EventWhereUniqueInput>;
    disconnect?: Enumerable<EventWhereUniqueInput>;
    delete?: Enumerable<EventWhereUniqueInput>;
    update?: Enumerable<EventUpdateWithWhereUniqueWithoutGroupInput>;
    updateMany?: Enumerable<EventUpdateManyWithWhereWithoutGroupInput>;
    deleteMany?: Enumerable<EventScalarWhereInput>;
  };

  export type GroupUpdateOneWithoutChildGroupsInput = {
    create?: XOR<
      GroupCreateWithoutChildGroupsInput,
      GroupUncheckedCreateWithoutChildGroupsInput
    >;
    connectOrCreate?: GroupCreateOrConnectWithoutChildGroupsInput;
    upsert?: GroupUpsertWithoutChildGroupsInput;
    connect?: GroupWhereUniqueInput;
    disconnect?: boolean;
    delete?: boolean;
    update?: XOR<
      GroupUpdateWithoutChildGroupsInput,
      GroupUncheckedUpdateWithoutChildGroupsInput
    >;
  };

  export type GroupUpdateManyWithoutParentGroupInput = {
    create?: XOR<
      Enumerable<GroupCreateWithoutParentGroupInput>,
      Enumerable<GroupUncheckedCreateWithoutParentGroupInput>
    >;
    connectOrCreate?: Enumerable<GroupCreateOrConnectWithoutParentGroupInput>;
    upsert?: Enumerable<GroupUpsertWithWhereUniqueWithoutParentGroupInput>;
    createMany?: GroupCreateManyParentGroupInputEnvelope;
    connect?: Enumerable<GroupWhereUniqueInput>;
    set?: Enumerable<GroupWhereUniqueInput>;
    disconnect?: Enumerable<GroupWhereUniqueInput>;
    delete?: Enumerable<GroupWhereUniqueInput>;
    update?: Enumerable<GroupUpdateWithWhereUniqueWithoutParentGroupInput>;
    updateMany?: Enumerable<GroupUpdateManyWithWhereWithoutParentGroupInput>;
    deleteMany?: Enumerable<GroupScalarWhereInput>;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type UserUncheckedUpdateManyWithoutGroupInput = {
    create?: XOR<
      Enumerable<UserCreateWithoutGroupInput>,
      Enumerable<UserUncheckedCreateWithoutGroupInput>
    >;
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutGroupInput>;
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutGroupInput>;
    createMany?: UserCreateManyGroupInputEnvelope;
    connect?: Enumerable<UserWhereUniqueInput>;
    set?: Enumerable<UserWhereUniqueInput>;
    disconnect?: Enumerable<UserWhereUniqueInput>;
    delete?: Enumerable<UserWhereUniqueInput>;
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutGroupInput>;
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutGroupInput>;
    deleteMany?: Enumerable<UserScalarWhereInput>;
  };

  export type PostUncheckedUpdateManyWithoutGroupInput = {
    create?: XOR<
      Enumerable<PostCreateWithoutGroupInput>,
      Enumerable<PostUncheckedCreateWithoutGroupInput>
    >;
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutGroupInput>;
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutGroupInput>;
    createMany?: PostCreateManyGroupInputEnvelope;
    connect?: Enumerable<PostWhereUniqueInput>;
    set?: Enumerable<PostWhereUniqueInput>;
    disconnect?: Enumerable<PostWhereUniqueInput>;
    delete?: Enumerable<PostWhereUniqueInput>;
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutGroupInput>;
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutGroupInput>;
    deleteMany?: Enumerable<PostScalarWhereInput>;
  };

  export type FileUncheckedUpdateManyWithoutGroupInput = {
    create?: XOR<
      Enumerable<FileCreateWithoutGroupInput>,
      Enumerable<FileUncheckedCreateWithoutGroupInput>
    >;
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutGroupInput>;
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutGroupInput>;
    createMany?: FileCreateManyGroupInputEnvelope;
    connect?: Enumerable<FileWhereUniqueInput>;
    set?: Enumerable<FileWhereUniqueInput>;
    disconnect?: Enumerable<FileWhereUniqueInput>;
    delete?: Enumerable<FileWhereUniqueInput>;
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutGroupInput>;
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutGroupInput>;
    deleteMany?: Enumerable<FileScalarWhereInput>;
  };

  export type EventUncheckedUpdateManyWithoutGroupInput = {
    create?: XOR<
      Enumerable<EventCreateWithoutGroupInput>,
      Enumerable<EventUncheckedCreateWithoutGroupInput>
    >;
    connectOrCreate?: Enumerable<EventCreateOrConnectWithoutGroupInput>;
    upsert?: Enumerable<EventUpsertWithWhereUniqueWithoutGroupInput>;
    createMany?: EventCreateManyGroupInputEnvelope;
    connect?: Enumerable<EventWhereUniqueInput>;
    set?: Enumerable<EventWhereUniqueInput>;
    disconnect?: Enumerable<EventWhereUniqueInput>;
    delete?: Enumerable<EventWhereUniqueInput>;
    update?: Enumerable<EventUpdateWithWhereUniqueWithoutGroupInput>;
    updateMany?: Enumerable<EventUpdateManyWithWhereWithoutGroupInput>;
    deleteMany?: Enumerable<EventScalarWhereInput>;
  };

  export type GroupUncheckedUpdateManyWithoutParentGroupInput = {
    create?: XOR<
      Enumerable<GroupCreateWithoutParentGroupInput>,
      Enumerable<GroupUncheckedCreateWithoutParentGroupInput>
    >;
    connectOrCreate?: Enumerable<GroupCreateOrConnectWithoutParentGroupInput>;
    upsert?: Enumerable<GroupUpsertWithWhereUniqueWithoutParentGroupInput>;
    createMany?: GroupCreateManyParentGroupInputEnvelope;
    connect?: Enumerable<GroupWhereUniqueInput>;
    set?: Enumerable<GroupWhereUniqueInput>;
    disconnect?: Enumerable<GroupWhereUniqueInput>;
    delete?: Enumerable<GroupWhereUniqueInput>;
    update?: Enumerable<GroupUpdateWithWhereUniqueWithoutParentGroupInput>;
    updateMany?: Enumerable<GroupUpdateManyWithWhereWithoutParentGroupInput>;
    deleteMany?: Enumerable<GroupScalarWhereInput>;
  };

  export type GroupCreateNestedOneWithoutUsersInput = {
    create?: XOR<
      GroupCreateWithoutUsersInput,
      GroupUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput;
    connect?: GroupWhereUniqueInput;
  };

  export type GroupUpdateOneRequiredWithoutUsersInput = {
    create?: XOR<
      GroupCreateWithoutUsersInput,
      GroupUncheckedCreateWithoutUsersInput
    >;
    connectOrCreate?: GroupCreateOrConnectWithoutUsersInput;
    upsert?: GroupUpsertWithoutUsersInput;
    connect?: GroupWhereUniqueInput;
    update?: XOR<
      GroupUpdateWithoutUsersInput,
      GroupUncheckedUpdateWithoutUsersInput
    >;
  };

  export type GroupCreateNestedOneWithoutPostsInput = {
    create?: XOR<
      GroupCreateWithoutPostsInput,
      GroupUncheckedCreateWithoutPostsInput
    >;
    connectOrCreate?: GroupCreateOrConnectWithoutPostsInput;
    connect?: GroupWhereUniqueInput;
  };

  export type GroupUpdateOneRequiredWithoutPostsInput = {
    create?: XOR<
      GroupCreateWithoutPostsInput,
      GroupUncheckedCreateWithoutPostsInput
    >;
    connectOrCreate?: GroupCreateOrConnectWithoutPostsInput;
    upsert?: GroupUpsertWithoutPostsInput;
    connect?: GroupWhereUniqueInput;
    update?: XOR<
      GroupUpdateWithoutPostsInput,
      GroupUncheckedUpdateWithoutPostsInput
    >;
  };

  export type GroupCreateNestedOneWithoutFilesInput = {
    create?: XOR<
      GroupCreateWithoutFilesInput,
      GroupUncheckedCreateWithoutFilesInput
    >;
    connectOrCreate?: GroupCreateOrConnectWithoutFilesInput;
    connect?: GroupWhereUniqueInput;
  };

  export type GroupUpdateOneRequiredWithoutFilesInput = {
    create?: XOR<
      GroupCreateWithoutFilesInput,
      GroupUncheckedCreateWithoutFilesInput
    >;
    connectOrCreate?: GroupCreateOrConnectWithoutFilesInput;
    upsert?: GroupUpsertWithoutFilesInput;
    connect?: GroupWhereUniqueInput;
    update?: XOR<
      GroupUpdateWithoutFilesInput,
      GroupUncheckedUpdateWithoutFilesInput
    >;
  };

  export type GroupCreateNestedOneWithoutEventsInput = {
    create?: XOR<
      GroupCreateWithoutEventsInput,
      GroupUncheckedCreateWithoutEventsInput
    >;
    connectOrCreate?: GroupCreateOrConnectWithoutEventsInput;
    connect?: GroupWhereUniqueInput;
  };

  export type GroupUpdateOneRequiredWithoutEventsInput = {
    create?: XOR<
      GroupCreateWithoutEventsInput,
      GroupUncheckedCreateWithoutEventsInput
    >;
    connectOrCreate?: GroupCreateOrConnectWithoutEventsInput;
    upsert?: GroupUpsertWithoutEventsInput;
    connect?: GroupWhereUniqueInput;
    update?: XOR<
      GroupUpdateWithoutEventsInput,
      GroupUncheckedUpdateWithoutEventsInput
    >;
  };

  export type NestedStringFilter = {
    equals?: string;
    in?: Enumerable<string>;
    notIn?: Enumerable<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringFilter | string;
  };

  export type NestedDateTimeFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string>;
    notIn?: Enumerable<Date> | Enumerable<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeFilter | Date | string;
  };

  export type NestedStringNullableFilter = {
    equals?: string | null;
    in?: Enumerable<string> | null;
    notIn?: Enumerable<string> | null;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringNullableFilter | string | null;
  };

  export type NestedStringWithAggregatesFilter = {
    equals?: string;
    in?: Enumerable<string>;
    notIn?: Enumerable<string>;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringWithAggregatesFilter | string;
    count?: NestedIntFilter;
    min?: NestedStringFilter;
    max?: NestedStringFilter;
  };

  export type NestedIntFilter = {
    equals?: number;
    in?: Enumerable<number>;
    notIn?: Enumerable<number>;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntFilter | number;
  };

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string;
    in?: Enumerable<Date> | Enumerable<string>;
    notIn?: Enumerable<Date> | Enumerable<string>;
    lt?: Date | string;
    lte?: Date | string;
    gt?: Date | string;
    gte?: Date | string;
    not?: NestedDateTimeWithAggregatesFilter | Date | string;
    count?: NestedIntFilter;
    min?: NestedDateTimeFilter;
    max?: NestedDateTimeFilter;
  };

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null;
    in?: Enumerable<string> | null;
    notIn?: Enumerable<string> | null;
    lt?: string;
    lte?: string;
    gt?: string;
    gte?: string;
    contains?: string;
    startsWith?: string;
    endsWith?: string;
    not?: NestedStringNullableWithAggregatesFilter | string | null;
    count?: NestedIntNullableFilter;
    min?: NestedStringNullableFilter;
    max?: NestedStringNullableFilter;
  };

  export type NestedIntNullableFilter = {
    equals?: number | null;
    in?: Enumerable<number> | null;
    notIn?: Enumerable<number> | null;
    lt?: number;
    lte?: number;
    gt?: number;
    gte?: number;
    not?: NestedIntNullableFilter | number | null;
  };

  export type UserCreateWithoutGroupInput = {
    id?: string;
    email: string;
    name: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUncheckedCreateWithoutGroupInput = {
    id?: string;
    email: string;
    name: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserCreateOrConnectWithoutGroupInput = {
    where: UserWhereUniqueInput;
    create: XOR<
      UserCreateWithoutGroupInput,
      UserUncheckedCreateWithoutGroupInput
    >;
  };

  export type UserCreateManyGroupInputEnvelope = {
    data: Enumerable<UserCreateManyGroupInput>;
    skipDuplicates?: boolean;
  };

  export type PostCreateWithoutGroupInput = {
    id?: string;
    title: string;
  };

  export type PostUncheckedCreateWithoutGroupInput = {
    id?: string;
    title: string;
  };

  export type PostCreateOrConnectWithoutGroupInput = {
    where: PostWhereUniqueInput;
    create: XOR<
      PostCreateWithoutGroupInput,
      PostUncheckedCreateWithoutGroupInput
    >;
  };

  export type PostCreateManyGroupInputEnvelope = {
    data: Enumerable<PostCreateManyGroupInput>;
    skipDuplicates?: boolean;
  };

  export type FileCreateWithoutGroupInput = {
    id?: string;
    title: string;
  };

  export type FileUncheckedCreateWithoutGroupInput = {
    id?: string;
    title: string;
  };

  export type FileCreateOrConnectWithoutGroupInput = {
    where: FileWhereUniqueInput;
    create: XOR<
      FileCreateWithoutGroupInput,
      FileUncheckedCreateWithoutGroupInput
    >;
  };

  export type FileCreateManyGroupInputEnvelope = {
    data: Enumerable<FileCreateManyGroupInput>;
    skipDuplicates?: boolean;
  };

  export type EventCreateWithoutGroupInput = {
    id?: string;
    title: string;
    scheduledAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type EventUncheckedCreateWithoutGroupInput = {
    id?: string;
    title: string;
    scheduledAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type EventCreateOrConnectWithoutGroupInput = {
    where: EventWhereUniqueInput;
    create: XOR<
      EventCreateWithoutGroupInput,
      EventUncheckedCreateWithoutGroupInput
    >;
  };

  export type EventCreateManyGroupInputEnvelope = {
    data: Enumerable<EventCreateManyGroupInput>;
    skipDuplicates?: boolean;
  };

  export type GroupCreateWithoutChildGroupsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserCreateNestedManyWithoutGroupInput;
    posts?: PostCreateNestedManyWithoutGroupInput;
    files?: FileCreateNestedManyWithoutGroupInput;
    events?: EventCreateNestedManyWithoutGroupInput;
    parentGroup?: GroupCreateNestedOneWithoutChildGroupsInput;
  };

  export type GroupUncheckedCreateWithoutChildGroupsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentGroupId?: string | null;
    users?: UserUncheckedCreateNestedManyWithoutGroupInput;
    posts?: PostUncheckedCreateNestedManyWithoutGroupInput;
    files?: FileUncheckedCreateNestedManyWithoutGroupInput;
    events?: EventUncheckedCreateNestedManyWithoutGroupInput;
  };

  export type GroupCreateOrConnectWithoutChildGroupsInput = {
    where: GroupWhereUniqueInput;
    create: XOR<
      GroupCreateWithoutChildGroupsInput,
      GroupUncheckedCreateWithoutChildGroupsInput
    >;
  };

  export type GroupCreateWithoutParentGroupInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserCreateNestedManyWithoutGroupInput;
    posts?: PostCreateNestedManyWithoutGroupInput;
    files?: FileCreateNestedManyWithoutGroupInput;
    events?: EventCreateNestedManyWithoutGroupInput;
    childGroups?: GroupCreateNestedManyWithoutParentGroupInput;
  };

  export type GroupUncheckedCreateWithoutParentGroupInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserUncheckedCreateNestedManyWithoutGroupInput;
    posts?: PostUncheckedCreateNestedManyWithoutGroupInput;
    files?: FileUncheckedCreateNestedManyWithoutGroupInput;
    events?: EventUncheckedCreateNestedManyWithoutGroupInput;
    childGroups?: GroupUncheckedCreateNestedManyWithoutParentGroupInput;
  };

  export type GroupCreateOrConnectWithoutParentGroupInput = {
    where: GroupWhereUniqueInput;
    create: XOR<
      GroupCreateWithoutParentGroupInput,
      GroupUncheckedCreateWithoutParentGroupInput
    >;
  };

  export type GroupCreateManyParentGroupInputEnvelope = {
    data: Enumerable<GroupCreateManyParentGroupInput>;
    skipDuplicates?: boolean;
  };

  export type UserUpsertWithWhereUniqueWithoutGroupInput = {
    where: UserWhereUniqueInput;
    update: XOR<
      UserUpdateWithoutGroupInput,
      UserUncheckedUpdateWithoutGroupInput
    >;
    create: XOR<
      UserCreateWithoutGroupInput,
      UserUncheckedCreateWithoutGroupInput
    >;
  };

  export type UserUpdateWithWhereUniqueWithoutGroupInput = {
    where: UserWhereUniqueInput;
    data: XOR<
      UserUpdateWithoutGroupInput,
      UserUncheckedUpdateWithoutGroupInput
    >;
  };

  export type UserUpdateManyWithWhereWithoutGroupInput = {
    where: UserScalarWhereInput;
    data: XOR<
      UserUpdateManyMutationInput,
      UserUncheckedUpdateManyWithoutUsersInput
    >;
  };

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>;
    OR?: Enumerable<UserScalarWhereInput>;
    NOT?: Enumerable<UserScalarWhereInput>;
    id?: StringFilter | string;
    email?: StringFilter | string;
    name?: StringFilter | string;
    password?: StringFilter | string;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
    groupId?: StringFilter | string;
  };

  export type PostUpsertWithWhereUniqueWithoutGroupInput = {
    where: PostWhereUniqueInput;
    update: XOR<
      PostUpdateWithoutGroupInput,
      PostUncheckedUpdateWithoutGroupInput
    >;
    create: XOR<
      PostCreateWithoutGroupInput,
      PostUncheckedCreateWithoutGroupInput
    >;
  };

  export type PostUpdateWithWhereUniqueWithoutGroupInput = {
    where: PostWhereUniqueInput;
    data: XOR<
      PostUpdateWithoutGroupInput,
      PostUncheckedUpdateWithoutGroupInput
    >;
  };

  export type PostUpdateManyWithWhereWithoutGroupInput = {
    where: PostScalarWhereInput;
    data: XOR<
      PostUpdateManyMutationInput,
      PostUncheckedUpdateManyWithoutPostsInput
    >;
  };

  export type PostScalarWhereInput = {
    AND?: Enumerable<PostScalarWhereInput>;
    OR?: Enumerable<PostScalarWhereInput>;
    NOT?: Enumerable<PostScalarWhereInput>;
    id?: StringFilter | string;
    title?: StringFilter | string;
    groupId?: StringFilter | string;
  };

  export type FileUpsertWithWhereUniqueWithoutGroupInput = {
    where: FileWhereUniqueInput;
    update: XOR<
      FileUpdateWithoutGroupInput,
      FileUncheckedUpdateWithoutGroupInput
    >;
    create: XOR<
      FileCreateWithoutGroupInput,
      FileUncheckedCreateWithoutGroupInput
    >;
  };

  export type FileUpdateWithWhereUniqueWithoutGroupInput = {
    where: FileWhereUniqueInput;
    data: XOR<
      FileUpdateWithoutGroupInput,
      FileUncheckedUpdateWithoutGroupInput
    >;
  };

  export type FileUpdateManyWithWhereWithoutGroupInput = {
    where: FileScalarWhereInput;
    data: XOR<
      FileUpdateManyMutationInput,
      FileUncheckedUpdateManyWithoutFilesInput
    >;
  };

  export type FileScalarWhereInput = {
    AND?: Enumerable<FileScalarWhereInput>;
    OR?: Enumerable<FileScalarWhereInput>;
    NOT?: Enumerable<FileScalarWhereInput>;
    id?: StringFilter | string;
    title?: StringFilter | string;
    groupId?: StringFilter | string;
  };

  export type EventUpsertWithWhereUniqueWithoutGroupInput = {
    where: EventWhereUniqueInput;
    update: XOR<
      EventUpdateWithoutGroupInput,
      EventUncheckedUpdateWithoutGroupInput
    >;
    create: XOR<
      EventCreateWithoutGroupInput,
      EventUncheckedCreateWithoutGroupInput
    >;
  };

  export type EventUpdateWithWhereUniqueWithoutGroupInput = {
    where: EventWhereUniqueInput;
    data: XOR<
      EventUpdateWithoutGroupInput,
      EventUncheckedUpdateWithoutGroupInput
    >;
  };

  export type EventUpdateManyWithWhereWithoutGroupInput = {
    where: EventScalarWhereInput;
    data: XOR<
      EventUpdateManyMutationInput,
      EventUncheckedUpdateManyWithoutEventsInput
    >;
  };

  export type EventScalarWhereInput = {
    AND?: Enumerable<EventScalarWhereInput>;
    OR?: Enumerable<EventScalarWhereInput>;
    NOT?: Enumerable<EventScalarWhereInput>;
    id?: StringFilter | string;
    title?: StringFilter | string;
    scheduledAt?: DateTimeFilter | Date | string;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
    groupId?: StringFilter | string;
  };

  export type GroupUpsertWithoutChildGroupsInput = {
    update: XOR<
      GroupUpdateWithoutChildGroupsInput,
      GroupUncheckedUpdateWithoutChildGroupsInput
    >;
    create: XOR<
      GroupCreateWithoutChildGroupsInput,
      GroupUncheckedCreateWithoutChildGroupsInput
    >;
  };

  export type GroupUpdateWithoutChildGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUpdateManyWithoutGroupInput;
    posts?: PostUpdateManyWithoutGroupInput;
    files?: FileUpdateManyWithoutGroupInput;
    events?: EventUpdateManyWithoutGroupInput;
    parentGroup?: GroupUpdateOneWithoutChildGroupsInput;
  };

  export type GroupUncheckedUpdateWithoutChildGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parentGroupId?: NullableStringFieldUpdateOperationsInput | string | null;
    users?: UserUncheckedUpdateManyWithoutGroupInput;
    posts?: PostUncheckedUpdateManyWithoutGroupInput;
    files?: FileUncheckedUpdateManyWithoutGroupInput;
    events?: EventUncheckedUpdateManyWithoutGroupInput;
  };

  export type GroupUpsertWithWhereUniqueWithoutParentGroupInput = {
    where: GroupWhereUniqueInput;
    update: XOR<
      GroupUpdateWithoutParentGroupInput,
      GroupUncheckedUpdateWithoutParentGroupInput
    >;
    create: XOR<
      GroupCreateWithoutParentGroupInput,
      GroupUncheckedCreateWithoutParentGroupInput
    >;
  };

  export type GroupUpdateWithWhereUniqueWithoutParentGroupInput = {
    where: GroupWhereUniqueInput;
    data: XOR<
      GroupUpdateWithoutParentGroupInput,
      GroupUncheckedUpdateWithoutParentGroupInput
    >;
  };

  export type GroupUpdateManyWithWhereWithoutParentGroupInput = {
    where: GroupScalarWhereInput;
    data: XOR<
      GroupUpdateManyMutationInput,
      GroupUncheckedUpdateManyWithoutChildGroupsInput
    >;
  };

  export type GroupScalarWhereInput = {
    AND?: Enumerable<GroupScalarWhereInput>;
    OR?: Enumerable<GroupScalarWhereInput>;
    NOT?: Enumerable<GroupScalarWhereInput>;
    id?: StringFilter | string;
    name?: StringFilter | string;
    createdAt?: DateTimeFilter | Date | string;
    updatedAt?: DateTimeFilter | Date | string;
    parentGroupId?: StringNullableFilter | string | null;
  };

  export type GroupCreateWithoutUsersInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    posts?: PostCreateNestedManyWithoutGroupInput;
    files?: FileCreateNestedManyWithoutGroupInput;
    events?: EventCreateNestedManyWithoutGroupInput;
    parentGroup?: GroupCreateNestedOneWithoutChildGroupsInput;
    childGroups?: GroupCreateNestedManyWithoutParentGroupInput;
  };

  export type GroupUncheckedCreateWithoutUsersInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentGroupId?: string | null;
    posts?: PostUncheckedCreateNestedManyWithoutGroupInput;
    files?: FileUncheckedCreateNestedManyWithoutGroupInput;
    events?: EventUncheckedCreateNestedManyWithoutGroupInput;
    childGroups?: GroupUncheckedCreateNestedManyWithoutParentGroupInput;
  };

  export type GroupCreateOrConnectWithoutUsersInput = {
    where: GroupWhereUniqueInput;
    create: XOR<
      GroupCreateWithoutUsersInput,
      GroupUncheckedCreateWithoutUsersInput
    >;
  };

  export type GroupUpsertWithoutUsersInput = {
    update: XOR<
      GroupUpdateWithoutUsersInput,
      GroupUncheckedUpdateWithoutUsersInput
    >;
    create: XOR<
      GroupCreateWithoutUsersInput,
      GroupUncheckedCreateWithoutUsersInput
    >;
  };

  export type GroupUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    posts?: PostUpdateManyWithoutGroupInput;
    files?: FileUpdateManyWithoutGroupInput;
    events?: EventUpdateManyWithoutGroupInput;
    parentGroup?: GroupUpdateOneWithoutChildGroupsInput;
    childGroups?: GroupUpdateManyWithoutParentGroupInput;
  };

  export type GroupUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parentGroupId?: NullableStringFieldUpdateOperationsInput | string | null;
    posts?: PostUncheckedUpdateManyWithoutGroupInput;
    files?: FileUncheckedUpdateManyWithoutGroupInput;
    events?: EventUncheckedUpdateManyWithoutGroupInput;
    childGroups?: GroupUncheckedUpdateManyWithoutParentGroupInput;
  };

  export type GroupCreateWithoutPostsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserCreateNestedManyWithoutGroupInput;
    files?: FileCreateNestedManyWithoutGroupInput;
    events?: EventCreateNestedManyWithoutGroupInput;
    parentGroup?: GroupCreateNestedOneWithoutChildGroupsInput;
    childGroups?: GroupCreateNestedManyWithoutParentGroupInput;
  };

  export type GroupUncheckedCreateWithoutPostsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentGroupId?: string | null;
    users?: UserUncheckedCreateNestedManyWithoutGroupInput;
    files?: FileUncheckedCreateNestedManyWithoutGroupInput;
    events?: EventUncheckedCreateNestedManyWithoutGroupInput;
    childGroups?: GroupUncheckedCreateNestedManyWithoutParentGroupInput;
  };

  export type GroupCreateOrConnectWithoutPostsInput = {
    where: GroupWhereUniqueInput;
    create: XOR<
      GroupCreateWithoutPostsInput,
      GroupUncheckedCreateWithoutPostsInput
    >;
  };

  export type GroupUpsertWithoutPostsInput = {
    update: XOR<
      GroupUpdateWithoutPostsInput,
      GroupUncheckedUpdateWithoutPostsInput
    >;
    create: XOR<
      GroupCreateWithoutPostsInput,
      GroupUncheckedCreateWithoutPostsInput
    >;
  };

  export type GroupUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUpdateManyWithoutGroupInput;
    files?: FileUpdateManyWithoutGroupInput;
    events?: EventUpdateManyWithoutGroupInput;
    parentGroup?: GroupUpdateOneWithoutChildGroupsInput;
    childGroups?: GroupUpdateManyWithoutParentGroupInput;
  };

  export type GroupUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parentGroupId?: NullableStringFieldUpdateOperationsInput | string | null;
    users?: UserUncheckedUpdateManyWithoutGroupInput;
    files?: FileUncheckedUpdateManyWithoutGroupInput;
    events?: EventUncheckedUpdateManyWithoutGroupInput;
    childGroups?: GroupUncheckedUpdateManyWithoutParentGroupInput;
  };

  export type GroupCreateWithoutFilesInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserCreateNestedManyWithoutGroupInput;
    posts?: PostCreateNestedManyWithoutGroupInput;
    events?: EventCreateNestedManyWithoutGroupInput;
    parentGroup?: GroupCreateNestedOneWithoutChildGroupsInput;
    childGroups?: GroupCreateNestedManyWithoutParentGroupInput;
  };

  export type GroupUncheckedCreateWithoutFilesInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentGroupId?: string | null;
    users?: UserUncheckedCreateNestedManyWithoutGroupInput;
    posts?: PostUncheckedCreateNestedManyWithoutGroupInput;
    events?: EventUncheckedCreateNestedManyWithoutGroupInput;
    childGroups?: GroupUncheckedCreateNestedManyWithoutParentGroupInput;
  };

  export type GroupCreateOrConnectWithoutFilesInput = {
    where: GroupWhereUniqueInput;
    create: XOR<
      GroupCreateWithoutFilesInput,
      GroupUncheckedCreateWithoutFilesInput
    >;
  };

  export type GroupUpsertWithoutFilesInput = {
    update: XOR<
      GroupUpdateWithoutFilesInput,
      GroupUncheckedUpdateWithoutFilesInput
    >;
    create: XOR<
      GroupCreateWithoutFilesInput,
      GroupUncheckedCreateWithoutFilesInput
    >;
  };

  export type GroupUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUpdateManyWithoutGroupInput;
    posts?: PostUpdateManyWithoutGroupInput;
    events?: EventUpdateManyWithoutGroupInput;
    parentGroup?: GroupUpdateOneWithoutChildGroupsInput;
    childGroups?: GroupUpdateManyWithoutParentGroupInput;
  };

  export type GroupUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parentGroupId?: NullableStringFieldUpdateOperationsInput | string | null;
    users?: UserUncheckedUpdateManyWithoutGroupInput;
    posts?: PostUncheckedUpdateManyWithoutGroupInput;
    events?: EventUncheckedUpdateManyWithoutGroupInput;
    childGroups?: GroupUncheckedUpdateManyWithoutParentGroupInput;
  };

  export type GroupCreateWithoutEventsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    users?: UserCreateNestedManyWithoutGroupInput;
    posts?: PostCreateNestedManyWithoutGroupInput;
    files?: FileCreateNestedManyWithoutGroupInput;
    parentGroup?: GroupCreateNestedOneWithoutChildGroupsInput;
    childGroups?: GroupCreateNestedManyWithoutParentGroupInput;
  };

  export type GroupUncheckedCreateWithoutEventsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    parentGroupId?: string | null;
    users?: UserUncheckedCreateNestedManyWithoutGroupInput;
    posts?: PostUncheckedCreateNestedManyWithoutGroupInput;
    files?: FileUncheckedCreateNestedManyWithoutGroupInput;
    childGroups?: GroupUncheckedCreateNestedManyWithoutParentGroupInput;
  };

  export type GroupCreateOrConnectWithoutEventsInput = {
    where: GroupWhereUniqueInput;
    create: XOR<
      GroupCreateWithoutEventsInput,
      GroupUncheckedCreateWithoutEventsInput
    >;
  };

  export type GroupUpsertWithoutEventsInput = {
    update: XOR<
      GroupUpdateWithoutEventsInput,
      GroupUncheckedUpdateWithoutEventsInput
    >;
    create: XOR<
      GroupCreateWithoutEventsInput,
      GroupUncheckedCreateWithoutEventsInput
    >;
  };

  export type GroupUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUpdateManyWithoutGroupInput;
    posts?: PostUpdateManyWithoutGroupInput;
    files?: FileUpdateManyWithoutGroupInput;
    parentGroup?: GroupUpdateOneWithoutChildGroupsInput;
    childGroups?: GroupUpdateManyWithoutParentGroupInput;
  };

  export type GroupUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    parentGroupId?: NullableStringFieldUpdateOperationsInput | string | null;
    users?: UserUncheckedUpdateManyWithoutGroupInput;
    posts?: PostUncheckedUpdateManyWithoutGroupInput;
    files?: FileUncheckedUpdateManyWithoutGroupInput;
    childGroups?: GroupUncheckedUpdateManyWithoutParentGroupInput;
  };

  export type UserCreateManyGroupInput = {
    id?: string;
    email: string;
    name: string;
    password: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type PostCreateManyGroupInput = {
    id?: string;
    title: string;
  };

  export type FileCreateManyGroupInput = {
    id?: string;
    title: string;
  };

  export type EventCreateManyGroupInput = {
    id?: string;
    title: string;
    scheduledAt?: Date | string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type GroupCreateManyParentGroupInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    password?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type PostUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
  };

  export type PostUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
  };

  export type PostUncheckedUpdateManyWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
  };

  export type FileUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
  };

  export type FileUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
  };

  export type FileUncheckedUpdateManyWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
  };

  export type EventUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type EventUncheckedUpdateManyWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    title?: StringFieldUpdateOperationsInput | string;
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type GroupUpdateWithoutParentGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUpdateManyWithoutGroupInput;
    posts?: PostUpdateManyWithoutGroupInput;
    files?: FileUpdateManyWithoutGroupInput;
    events?: EventUpdateManyWithoutGroupInput;
    childGroups?: GroupUpdateManyWithoutParentGroupInput;
  };

  export type GroupUncheckedUpdateWithoutParentGroupInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    users?: UserUncheckedUpdateManyWithoutGroupInput;
    posts?: PostUncheckedUpdateManyWithoutGroupInput;
    files?: FileUncheckedUpdateManyWithoutGroupInput;
    events?: EventUncheckedUpdateManyWithoutGroupInput;
    childGroups?: GroupUncheckedUpdateManyWithoutParentGroupInput;
  };

  export type GroupUncheckedUpdateManyWithoutChildGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.DMMF.Document;
}
