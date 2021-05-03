export default function arrayFlat<T>(list: T[][]): T[] {
  return list.reduce((acc, val) => acc.concat(val), []);
}
