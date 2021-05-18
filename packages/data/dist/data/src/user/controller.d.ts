import { Group, Prisma, User } from "@test/prisma";
export declare const createUser: (data: Prisma.UserCreateInput) => Promise<User>;
export declare const deleteAllUsers: () => Promise<number>;
declare const selectedFields: {
    id: boolean;
    email: boolean;
    name: boolean;
    createdAt: boolean;
    updatedAt: boolean;
    groupId: boolean;
    group: boolean;
};
export declare type SelectedUser = Pick<User & {
    group: Group;
}, keyof typeof selectedFields>;
export declare const findUserById: (id: string) => Promise<SelectedUser>;
export declare const findAllUsers: () => Promise<SelectedUser[]>;
export {};
