import { isString, isArray, isObject } from "types";
import { shouldBeVariableName, shouldBeResolvePath } from "./syntax";

export default function injectImports<T extends string>(
  source: Record<T, string | Record<string, string> | any>,
  isTypeOnly = false
): string[] {
  const paths = Object.entries(source) as [string, any][];
  const t = isTypeOnly ? "import type" : "import";
  return paths.map(([path, value]): string => {
    shouldBeResolvePath(path);
    if (isString(value)) {
      return `${t} ${shouldBeVariableName(value)} from "${path}"`;
    }
    if (isArray<string | Record<string, string>>(value) && value.length) {
      return `${t} { ${value
        .map((sub): string | void => {
          if (isString(sub)) {
            return shouldBeVariableName(sub);
          }
          if (isObject<string, string>(sub)) {
            const firstKey = Object.keys(sub)[0];
            return `${shouldBeVariableName(firstKey)} as ${shouldBeVariableName(
              sub[firstKey]
            )}`;
          }
        })
        .filter(isString)
        .join(", ")} } from "${path}";`;
    }
    if (isObject<string, string>(value)) {
      if (isObject(value.type)) {
        return injectImports({ [path]: value.type }, true)[0];
      }
      if (value["*"]) {
        return `${t} * as ${shouldBeVariableName(value["*"])} from "${path}";`;
      }
      const subs = Object.entries(value);
      if (subs.length) {
        return `${t} { ${subs
          .map(
            ([name, alias]) =>
              `${shouldBeVariableName(name)} as ${shouldBeVariableName(alias)}`
          )
          .join(", ")} } from "${path}";`;
      }
    }
    return `${t} "${path}";`;
  });
}
