"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ellipsis_1 = require("./ellipsis");
function stringPascalCase(text) {
  const words = text.match(/[A-Za-z0-9][a-z0-9]*/g);
  if (words.length) {
    return words
      .map(
        (word) =>
          word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
      )
      .join("");
  }
  throw new Error(
    `Can not translate ${ellipsis_1.escapedEllipsis(text, 40)} to pascal case`
  );
}
exports.default = stringPascalCase;
//# sourceMappingURL=stringPascalCase.js.map
