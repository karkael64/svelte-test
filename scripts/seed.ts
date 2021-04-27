import { deleteAllGroups } from "../bff/controllers/group";
import { deleteAllUsers } from "../bff/controllers/user";
import { createDefaultGroups } from "../bff/seed/groups";
import { createDefaultUsers, omitUsersPassword } from "../bff/seed/users";

const purge = async () => {
  console.log(`✔ users purged (${await deleteAllUsers()} items)`);
  console.log(`✔ groups purged (${await deleteAllGroups()} items)`);
};

const seed = async () => {
  const groups = await createDefaultGroups();
  console.log(
    `✔ groups created (${groups.length} items):`,
    groups.map(({ id, name, parentGroupId }) => ({ id, name, parentGroupId }))
  );

  const users = await createDefaultUsers(groups);
  console.log(
    `✔ users created (${users.length} items):`,
    users.map(({ id, email, name, groupId }) => ({ id, email, name, groupId }))
  );
};

const main = new Promise<void>((resolve) => {
  purge().then(() => {
    setTimeout(() => {
      seed().then(() => {
        resolve();
      });
    }, 0);
  });
});

main
  .then(() => {
    console.log("✔ Seed end");
    process.exit(0);
  })
  .catch((err) => {
    console.error("✘ Seed error:", err);
    process.exit(1);
  });
