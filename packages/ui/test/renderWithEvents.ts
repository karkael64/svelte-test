import { render, RenderResult } from "@testing-library/svelte";
import type { SvelteComponentTyped } from "svelte/internal";

type RecordsWrappedInFunction<T> = {
  [k in keyof T]: (arg: T[k]) => void;
};

export const renderWithEvents = <Props, Events extends object, Slots>(
  Comp: new (...args: any) => SvelteComponentTyped<Props, Events, Slots>,
  props?: Props,
  events?: RecordsWrappedInFunction<Events>,
  renderOptions: { container?: HTMLElement } = {}
): RenderResult => {
  const { component, ...rest } = render(Comp as any, { props }, renderOptions);
  events &&
    Object.entries(events).forEach(([eventName, fn]) =>
      component.$on(eventName, fn as any)
    );
  return { component, ...rest };
};

export type GetSvelteProps<
  _T extends SvelteComponentTyped<Props, Events, Slots>,
  Props = any,
  Events = any,
  Slots = any
> = Props;

export type GetSvelteEvents<
  _T extends SvelteComponentTyped<Props, Events, Slots>,
  Props = any,
  Events extends object = any,
  Slots = any
> = RecordsWrappedInFunction<Events>;
