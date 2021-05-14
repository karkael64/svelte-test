import dotenv from "dotenv";
dotenv.config();

import { PrismaClient, PrismaPromise } from "../client";

export const prisma = new PrismaClient();

export const dbTransaction = (
  promises: PrismaPromise<any>[]
): Promise<PromiseConstructor[]> => prisma.$transaction(promises);
