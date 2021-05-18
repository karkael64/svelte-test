import type { User, Group } from "@test/prisma";
export declare const createMockUser: (data: Partial<User>) => User;
export declare const createDefaultUsers: (groups: Group[]) => Promise<User[]>;
export declare const omitUsersPassword: (users: User[]) => Omit<User, "password">[];
