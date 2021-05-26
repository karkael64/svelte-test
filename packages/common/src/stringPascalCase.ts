import { escapedEllipsis } from "./ellipsis";

export default function stringPascalCase(text: string): string {
  const words = text.match(/[A-Za-z0-9][a-z0-9]*/g);
  if (words?.length) {
    return words
      .map(
        (word) =>
          word[0].toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
      )
      .join("");
  }
  throw new Error(
    `Can not translate ${escapedEllipsis(text, 40)} to pascal case`
  );
}
