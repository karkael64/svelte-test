import bcrypt from "bcrypt";

const saltRounds = 11;

export const hashPassword = async (plain: string): Promise<string> =>
  bcrypt.hash(plain, saltRounds);

export const comparePassword = async (
  plain: string,
  hashed: string
): Promise<boolean> => bcrypt.compare(plain, hashed);
