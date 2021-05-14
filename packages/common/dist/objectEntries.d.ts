export default function objectEntries<Key extends string, Value>(
  object: Record<Key, Value>
): [Key, Value][];
declare global {
  interface ObjectConstructor {
    entries<Key extends string, Value>(
      object: Record<Key, Value>
    ): [Key, Value][];
  }
}
