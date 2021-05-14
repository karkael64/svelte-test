export default function arrayFlat<Type>(list: Type[][], depth = 1): Type[] {
  if (depth < 1) return list as any;
  return arrayFlat(list, depth - 1).reduce(
    (acc, val) => (Array.isArray(val) ? acc.concat(val) : acc.push(val) && acc),
    []
  );
}

declare global {
  interface Array<T> {
    flat<Type>(list: Type[][]): Type[];
  }
}

if (Array.prototype.flat === undefined) {
  Object.defineProperty(Array.prototype, "flat", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (list: any) {
      return arrayFlat(this as Array<any>, list);
    },
  });
}
