import type { SvelteComponentTyped } from "svelte";

export declare class Header extends SvelteComponentTyped<
  {
    user?: Record<any, any> | null;
  },
  {
    "on:login"(event: Event): any;
    "on:logout"(event: Event): any;
    "on:createAccount"(event: Event): any;
  }
> {}
