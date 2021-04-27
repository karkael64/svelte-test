import { deleteAllGroups } from "../bff/controllers/group";
import { deleteAllUsers } from "../bff/controllers/user";
import { createDefaultGroups } from "../bff/seed/groups";
import { createDefaultUsers } from "../bff/seed/users";

const purge = async () => {
  console.log(`purge users: ${await deleteAllUsers()} items`);
  console.log(`purge groups: ${await deleteAllGroups()} items`);
};

const seed = async () => {
  const groups = await createDefaultGroups();
  console.log("groups", groups);
  const users = await createDefaultUsers(groups);
  console.log("users", users);
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

main.then(() => console.log("Seed end")).catch(console.error);
