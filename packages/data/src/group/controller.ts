import { client, Group, Prisma } from "@test/prisma";

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
  client.group.create({ data });

export const deleteAllGroups = async (): Promise<number> =>
  (await client.group.deleteMany()).count;

export const findGroupById = (id: string): Promise<Group> =>
  client.group.findUnique({ where: { id } });

export const findAllGroups = (): Promise<Group[]> => client.group.findMany();
