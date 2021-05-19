export default function arrayGroupBy<
  Value extends string | number | symbol,
  Key extends string | number | symbol,
  Field extends string | number | symbol = keyof Key
>(
  list: Record<Key, Value>[],
  field: Field
): Record<Value, Record<Exclude<Key, Field>, Value>[]>;
declare type OnlyRecord<T> = T extends Record<infer K, infer V>
  ? V extends string | number | symbol
    ? Record<K, V>
    : never
  : never;
declare type ValueOf<T> = T extends Record<any, infer U> ? U : never;
declare global {
  interface Array<T> {
    groupBy<
      Value extends any = ValueOf<T>,
      Key extends string | number | symbol = keyof T,
      Field extends string | number | symbol = keyof Key
    >(
      field: Field
    ): Record<OnlyRecord<T>[Field], Record<Exclude<Key, Field>, Value>[]>;
  }
}
export {};
