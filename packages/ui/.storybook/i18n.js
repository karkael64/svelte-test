import {
  register,
  init,
  getLocaleFromNavigator,
  locale as $locale,
} from "svelte-i18n";

const INIT_OPTIONS = {
  fallbackLocale: "en",
  initialLocale: null,
  loadingDelay: 200,
  formats: {},
  warnOnMissingMessages: true,
};

export function startClient() {
  register("en", () => import("../src/i18n/en.json"));
  register("fr", () => import("../src/i18n/fr.json"));

  init({
    ...INIT_OPTIONS,
    initialLocale: getLocaleFromNavigator(),
  });
}

export function setLocale(locale) {
  init(INIT_OPTIONS);
  $locale.set(locale);
}
