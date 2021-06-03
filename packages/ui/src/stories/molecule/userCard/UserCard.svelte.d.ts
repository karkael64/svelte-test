import { SvelteComponentTyped } from "svelte";

export type User = {
  name: string;
  email: string;
};

declare class UserCard extends SvelteComponentTyped<
  {
    user: User;
    isEditing?: boolean;
  },
  {
    submit: Event;
  }
> {}

export default UserCard;
