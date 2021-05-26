type KeyOf<T, K> = T extends Record<infer U, any> ? U : K;
type ValueOf<T, V> = T extends Record<any, infer U> ? U : V;

export default function objectSort<T extends Record<any, any>, C = T[keyof T]>(
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

declare global {
  interface Object {
    sort<
      Type extends Record<any, any> = this,
      Value = Type[keyof Type],
      Key = keyof Type
    >(
      fn?: (
        item: ValueOf<Type, Value>,
        key: KeyOf<Type, Key>,
        object: Type
      ) => any
    ): Type;
  }
}

if (Object.prototype.sort === undefined) {
  Object.defineProperty(Object.prototype, "sort", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (fn?: any) {
      return objectSort(this, fn);
    },
  });
}
