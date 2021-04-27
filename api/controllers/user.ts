import { Prisma, User, Group } from ".prisma/client";
import { isEmail, isPassword, isUsername } from "../../common";
import { prisma } from "../../prisma";

export const createUser = (data: Prisma.UserCreateInput): Promise<User> => {
  if (!isEmail(data.email)) {
    throw new Error(`Syntax error on email ${data.email}.`);
  }
  if (!isPassword(data.password)) {
    throw new Error(`Syntax error on password ${data.password}.`);
  }
  if (!isUsername(data.name)) {
    throw new Error(`Syntax error on username ${data.name}.`);
  }
  return prisma.user.create({ data });
};

export const deleteAllUsers = async (): Promise<number> =>
  (await prisma.user.deleteMany()).count;

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

export const findUserById = async (id: string): Promise<SelectedUser> =>
  await prisma.user.findUnique({
    select: selectedFields,
    where: { id },
  });

export const findAllUsers = async (): Promise<SelectedUser[]> =>
  await prisma.user.findMany({
    select: selectedFields,
  });
