import type { SvelteComponentTyped } from "svelte";

export declare class Button extends SvelteComponentTyped<
  {
    primary?: boolean;
    size?: "small" | "medium" | "large";
    label: string;
  },
  {
    click(event: Event): any;
  }
> {}
