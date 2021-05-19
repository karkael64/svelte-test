import { Group, Prisma } from "@test/prisma";
export declare const groupNames: readonly [
  "deleted",
  "admin",
  "moderator",
  "member",
  "user",
  "guest"
];
export declare type GroupName = typeof groupNames[number];
export declare const createGroup: (
  data: Prisma.GroupCreateInput
) => Promise<Group>;
export declare const deleteAllGroups: () => Promise<number>;
export declare const findGroupById: (id: string) => Promise<Group>;
export declare const findAllGroups: () => Promise<Group[]>;
