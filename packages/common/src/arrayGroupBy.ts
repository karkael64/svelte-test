import { isNumber, isString, isSymbol, toTypeString } from "types";
import { escapedEllipsis } from "./ellipsis";

const isObjectKey = (item: unknown): item is string | number | symbol => {
  return isString(item) || isNumber(item) || isSymbol(item);
};

export default function arrayGroupBy<
  Value extends string | number | symbol,
  Key extends string | number | symbol,
  Field extends string | number | symbol = keyof Key
>(list: Record<Key, Value>[], field: Field) {
  return list.reduce((acc, item) => {
    const { [field]: name, ...rest } = item;
    if (isObjectKey(name)) {
      const key = name as string | number | symbol;
      if (!Array.isArray(acc[key])) {
        acc[key] = [];
      }
      acc[key].push(rest);
      return acc;
    }
    throw new Error(
      `Item at field ${escapedEllipsis(
        field
      )} should be a string, a number or a symbol, but found ${toTypeString(
        name
      )}.`
    );
  }, {} as Record<Value, Record<Exclude<Key, Field>, Value>[]>);
}

type OnlyRecord<T> = T extends Record<infer K, infer V>
  ? V extends string | number | symbol
    ? Record<K, V>
    : never
  : never;
type ValueOf<T> = T extends Record<any, infer U> ? U : never;

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

if (Array.prototype.groupBy === undefined) {
  Object.defineProperty(Array.prototype, "groupBy", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: function (field: any) {
      return arrayGroupBy(this as Array<any>, field);
    },
  });
}
