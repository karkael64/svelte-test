function arrayGroupBy<T extends Record<K, any>, K extends keyof T = keyof T>(
  list: T[],
  field: K
): Record<any, Omit<T, K>[]> {
  return list.reduce((acc, item) => {
    const { [field]: name, ...rest } = item;
    if (!Array.isArray(acc[name])) {
      acc[name] = [];
    }
    acc[name].push(rest);
    return acc;
  }, {} as Record<any, Omit<T, K>[]>);
}

// declare global {
//   interface Array<T> {
//     groupBy<K extends keyof T = keyof T>(field: K): Record<any, Omit<T, K>[]>;
//   }
// }

// Object.defineProperty(Array.prototype, "groupBy", {
//   enumerable: false,
//   configurable: true,
//   value: function (field: any) {
//     return arrayGroupBy(this as Array<any>, field);
//   },
// });

export default arrayGroupBy;
