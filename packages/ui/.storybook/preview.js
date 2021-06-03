import { startClient, setLocale } from "./i18n";

startClient();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (storyFn, context) => {
    setLocale(context.globals.locale);
    return storyFn();
  },
];

export const globalTypes = {
  locale: {
    name: "locale",
    description: "i18n locale",
    defaultValue: "en",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", right: "🇬🇧", title: "English" },
        { value: "fr", right: "🇫🇷", title: "Français" },
      ],
    },
  },
};
