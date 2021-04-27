import { PrismaClient, PrismaPromise } from "@prisma/client";

export const prisma = new PrismaClient();

export const dbTransation = (
  promises: PrismaPromise<any>[]
): Promise<PromiseConstructor[]> => prisma.$transaction(promises);
