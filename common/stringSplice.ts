export default function stringSplice(
  text: string,
  start: number,
  length?: number,
  ...insert: string[]
): string {
  const _start =
    start < 0 ? Math.max(0, text.length - start) : Math.min(start, text.length);
  const begin = text.slice(0, _start);
  const middle = insert.join("");
  const last = length === undefined ? "" : text.slice(_start + length);

  return `${begin}${middle}${last}`;
}
