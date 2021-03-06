import type { Group } from "@test/prisma";
import faker from "faker";
import { createGroup, groupNames } from "../src/group/controller";

export const createMockGroup = (data: Partial<Group>): Group => {
  const id = data.id ?? faker.datatype.uuid();
  const name = data.name ?? faker.random.words(2);
  const parentGroupId =
    data.parentGroupId ??
    faker.random.arrayElement([null, faker.datatype.uuid()]);
  const createdAt = faker.date.recent();

  return {
    id,
    name,
    parentGroupId,
    createdAt,
    updatedAt: createdAt,
  };
};

export const createDefaultGroups = async () => {
  let currentParent = undefined;
  const groups = [];
  for (const name of groupNames) {
    const group: Group = await createGroup({
      name,
      parentGroup: currentParent?.id
        ? { connect: { id: currentParent.id } }
        : undefined,
    });
    currentParent = group;
    groups.push(group);
  }
  return groups;
};
