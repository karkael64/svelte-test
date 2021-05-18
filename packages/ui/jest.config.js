module.exports = {
  transform: {
    "^.+\\.svelte$": [
      "svelte-jester",
      {
        preprocess: true,
      },
    ],
    "^.+\\.ts$": "ts-jest",
  },
  moduleFileExtensions: ["js", "ts", "svelte"],
  testRegex: "\\.spec\\.ts$",
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};