import { escapedEllipsis } from "./ellipsis";

export function stringShouldMatch(
  text: string,
  rx: RegExp,
  errorMessage: string
): string {
  if (text.match(rx)) {
    return text;
  }
  throw new Error(errorMessage);
}

export function shouldBeVariableName(text: string): string {
  return stringShouldMatch(
    text,
    /^[_A-Za-z]\w*$/,
    `Syntax error, string ${escapedEllipsis(text)} is not a variable name`
  );
}

export function shouldBeResolvePath(text: string): string {
  return stringShouldMatch(
    text,
    /^@?[./\w-]+$/,
    `Syntax error, string ${escapedEllipsis(
      text
    )} can not be resolved in import`
  );
}
