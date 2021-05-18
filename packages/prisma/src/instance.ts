import dotenv from "dotenv";
dotenv.config();

import { PrismaClient, PrismaPromise } from "../client";

export const client = new PrismaClient();

export const dbTransaction = (
  promises: PrismaPromise<any>[]
): Promise<PromiseConstructor[]> => client.$transaction(promises);
