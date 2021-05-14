import type { Group, Prisma } from "@prisma/client";
import { prisma } from "@test/prisma";

export const groupNames = [
  "deleted",
  "admin",
  "moderator",
  "member",
  "user",
  "guest",
] as const;

export type GroupName = typeof groupNames[number];

export const createGroup = (data: Prisma.GroupCreateInput): Promise<Group> =>
  prisma.group.create({ data });

export const deleteAllGroups = async (): Promise<number> =>
  (await prisma.group.deleteMany()).count;

export const findGroupById = (id: string): Promise<Group> =>
  prisma.group.findUnique({ where: { id } });

export const findAllGroups = (): Promise<Group[]> => prisma.group.findMany();
