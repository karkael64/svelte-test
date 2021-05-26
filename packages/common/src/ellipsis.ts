import stringSplice from "./stringSplice";
import { toTypeString } from "types";

export function ellipsis(text: string, length = 40): string {
  return text.slice(0, length) + (text.length > length && "…");
}

export function ellipsisQuoted(text: string, length = 40): string {
  const _length = Math.max(4, length) - 1;
  const quoted = JSON.stringify(text);
  return quoted.length < _length + 2
    ? quoted
    : stringSplice(quoted, _length - 1, quoted.length - _length, "…");
}

export function escapedEllipsis(item: unknown, length = 40): string {
  const _length = Math.max(4, length) - 1;
  const text = toTypeString(item);
  return text.length < _length + 2
    ? text
    : stringSplice(text, _length - 1, text.length - _length, "…");
}
