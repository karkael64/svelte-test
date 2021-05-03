export function isArray<T = any>(item: unknown): item is T[] {
  return Array.isArray(item);
}

export function isFunction<T = () => {}>(item: unknown): item is T {
  return typeof item === "function";
}
export function isNumber(item: unknown): item is number {
  return typeof item === "number";
}
export function isObject<
  K extends string | number | symbol = string | number | symbol,
  T = any
>(item: unknown): item is Record<K, T> {
  return !!(item && typeof item === "object");
}

export function isString(item: unknown): item is string {
  return typeof item === "string";
}

export function isSymbol(item: unknown): item is symbol {
  return typeof item === "symbol";
}
export function isUndefined(item: unknown): item is undefined {
  return typeof item === "undefined";
}
