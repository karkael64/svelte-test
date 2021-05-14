export default function injectImports<T extends string>(
  source: Record<T, string | Record<string, string> | any>,
  isTypeOnly?: boolean
): string[];
