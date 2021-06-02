import type { SvelteComponentTyped } from "svelte";

export declare class Header extends SvelteComponentTyped<
  {
    user?: Record<any, any> | null;
  },
  {
    login(event: Event): any;
    logout(event: Event): any;
    createAccount(event: Event): any;
  }
> {}
