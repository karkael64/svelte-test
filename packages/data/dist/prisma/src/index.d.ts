import { PrismaClient, PrismaPromise } from "../client";
export declare const prisma: PrismaClient<import("../client").Prisma.PrismaClientOptions, never, import("../client").Prisma.RejectOnNotFound | import("../client").Prisma.RejectPerOperation>;
export declare const dbTransaction: (promises: PrismaPromise<any>[]) => Promise<PromiseConstructor[]>;
