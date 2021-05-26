import { client, Group, Prisma, User } from "@test/prisma";
import { isEmail, isPassword, isUsername } from "@test/common";

export const createUser = async (
  data: Prisma.UserCreateInput
): Promise<User> => {
  const { password, ...rest } = data;

  if (!isEmail(rest.email)) {
    throw new Error(`Syntax error on email ${JSON.stringify(rest.email)}.`);
  }
  if (!isPassword(password)) {
    throw new Error(`Syntax error on password ${JSON.stringify(password)}.`);
  }
  if (!isUsername(rest.name)) {
    throw new Error(`Syntax error on username ${JSON.stringify(rest.name)}.`);
  }

  const passwordHashed = password;

  return client.user.create({ data: { ...rest, password: passwordHashed } });
};

export const deleteAllUsers = async (): Promise<number> =>
  (await client.user.deleteMany()).count;

const selectedFields = {
  id: true,
  email: true,
  name: true,
  createdAt: true,
  updatedAt: true,
  groupId: true,
  group: true,
};

export type SelectedUser = Pick<
  User & { group: Group },
  keyof typeof selectedFields
>;

export const findUserById = (id: string): Promise<SelectedUser> =>
  client.user.findUnique({
    select: selectedFields,
    where: { id },
  }) as any;

export const findAllUsers = (): Promise<SelectedUser[]> =>
  client.user.findMany({
    select: selectedFields,
  });
