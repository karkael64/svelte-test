function objectSort<T = Record<any, any>, C = T[keyof T]>(
  object: T,
  fn: (a: any, b: any) => number = (a, b) => (a > b ? 1 : a < b ? -1 : 0)
): T {
  const keys = Object.entries(object) as [keyof T, C][];
  keys.sort(([a], [b]) => fn(a, b));

  return keys.reduce((acc, [key, item]) => {
    acc[key] = item;
    return acc;
  }, {} as any) as T;
}

// declare global {
//   interface Object {
//     sort<C = this[keyof this]>(
//       fn?: (item: C, key: keyof this, object: this) => any
//     ): this;
//   }
// }

// Object.defineProperty(Object.prototype, "sort", {
//   enumerable: false,
//   configurable: true,
//   value: function (fn?: any) {
//     return objectSort(this, fn);
//   },
// });

export default objectSort;
