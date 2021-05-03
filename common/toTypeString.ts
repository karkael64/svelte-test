import { isArray, isFunction, isNumber, isObject, isSymbol } from "./types";

export default function toTypeString(item: unknown): string {
  if (isNumber(item)) {
    if (Number.isNaN(item)) return "NaN";
    if (!Number.isFinite(item)) return item > 0 ? "Infinity" : "-Infinity";
    return JSON.stringify(item);
  }
  if (isFunction(item)) {
    return `[function ${item.name.trim().length ? item.name : "(anonymous)"}]`;
  }
  if (isArray(item)) {
    return `[array Array]`;
  }
  if (isObject(item)) {
    return `[object ${item.constructor.name}]`;
  }
  if (isSymbol(item)) {
    return `[symbol]`;
  }
  return JSON.stringify(item) ?? `${item}`;
}
