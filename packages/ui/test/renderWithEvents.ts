import { render, RenderResult } from "@testing-library/svelte";
import type { SvelteComponentDev, SvelteComponentTyped } from "svelte/internal";

export const renderWithEvents = <
  T extends SvelteComponentTyped,
  Props extends Record<string, any> = T["$$prop_def"],
  Events extends Record<string, any> = T["$$events_def"]
>(
  Comp: typeof SvelteComponentDev,
  props: Partial<Props> = {},
  events: Partial<Events> = {},
  renderOptions: { container?: HTMLElement } = {}
): RenderResult => {
  const { component, ...rest } = render(Comp as any, props, renderOptions);
  Object.entries(events).forEach(([eventName, fn]) =>
    component.$on(eventName, fn as any)
  );
  return { component, ...rest };
};
