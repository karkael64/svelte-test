function objectMap<
  T = Record<any, any>,
  C = T[keyof T],
  U = Record<keyof T, any>
>(object: T, fn: (item: C, key: keyof T, object: T) => any, thisArg?: any) {
  const keys = Object.entries(object) as [keyof T, C][];

  return keys.reduce((acc, [key, item]) => {
    acc[key] = fn.call(thisArg, item, key, object);
    return acc;
  }, {} as any) as U;
}

// declare global {
//   interface Object {
//     map<C = this[keyof this], U = Record<keyof this, any>>(
//       fn: (item: C, key: keyof this, object: this) => any,
//       thisArg?: any
//     ): U;
//   }
// }

// Object.defineProperty(Object.prototype, "map", {
//   enumerable: false,
//   configurable: true,
//   value: function (fn: any, thisArg: any) {
//     return objectMap(this, fn, thisArg);
//   },
// });

export default objectMap;
