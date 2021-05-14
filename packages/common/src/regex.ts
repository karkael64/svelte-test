const matchAll = (regexps: RegExp[] | RegExp) => (text: string = "") =>
  !(!Array.isArray(regexps) ? [regexps] : regexps).find(
    (rx) => !text.match(rx)
  );

export const isEmail = matchAll(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
export const isPassword = matchAll([/^.{8,}$/, /\d/, /\w/, /\W/]);
export const isUsername = matchAll(/^[\w\d._'-]{5,}$/);
