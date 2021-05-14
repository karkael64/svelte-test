export default function objectEntries<Key extends string, Value>(
  object: Record<Key, Value>
): [Key, Value][] {
  const keys = Object.keys(object) as Key[];
  return keys.map((key) => [key, object[key]]);
}

declare global {
  interface ObjectConstructor {
    entries<Key extends string, Value>(
      object: Record<Key, Value>
    ): [Key, Value][];
  }
}

if (Object.entries === undefined) {
  Object.defineProperty(Object, "entries", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (object: any) {
      return objectEntries(object);
    },
  });
}
