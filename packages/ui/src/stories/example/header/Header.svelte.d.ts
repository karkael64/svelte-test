import type { SvelteComponentTyped } from "svelte";

declare class Header extends SvelteComponentTyped<
  {
    user?: Record<any, any> | null;
  },
  {
    login: Event;
    logout: Event;
    createAccount: Event;
  }
> {}

export default Header;
