import { deleteAllGroups } from "../api/controllers/group";
import { deleteAllUsers } from "../api/controllers/user";
import { createDefaultGroups } from "../api/seed/groups";
import { createDefaultUsers } from "../api/seed/users";

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
