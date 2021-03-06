import type { User, Group, Prisma } from "@test/prisma";
import faker from "faker";
import { createUser } from "../src/user/controller";

export const createMockUser = (data: Partial<User>): User => {
  const id = data.id ?? faker.datatype.uuid();
  const name = data.name ?? faker.internet.userName();
  const email = data.email ?? faker.internet.email(name);
  const password = data.password ?? faker.internet.password();
  const createdAt = data.createdAt ?? faker.date.recent();
  const groupId = data.groupId ?? faker.datatype.uuid();

  return {
    id,
    email,
    name,
    password,
    createdAt,
    updatedAt: createdAt,
    groupId,
  };
};

if (
  !process.env.ADMIN_USERMAIL ||
  !process.env.ADMIN_USERNAME ||
  !process.env.ADMIN_PASSWORD
) {
  throw new Error(
    "Expect env file to contain valid expressions for ADMIN_USERMAIL, ADMIN_USERNAME and ADMIN_PASSWORD"
  );
}

const defaultUsers: (Omit<Prisma.UserCreateInput, "group"> & {
  groupName: string;
})[] = [
  {
    email: process.env.ADMIN_USERMAIL,
    name: process.env.ADMIN_USERNAME,
    password: process.env.ADMIN_PASSWORD,
    groupName: "admin",
  },
];

export const createDefaultUsers = async (groups: Group[]): Promise<User[]> =>
  Promise.all(
    defaultUsers.map(async (data) => {
      const { groupName, ...userData } = data;
      const groupId = groups.find((group) => group.name === groupName)?.id;
      const user = await createUser({
        ...userData,
        group: { connect: { id: groupId } },
      });
      return user;
    })
  );

export const omitUsersPassword = (users: User[]): Omit<User, "password">[] =>
  users.map((user) => {
    const { password, ...other } = user;
    return other;
  });
