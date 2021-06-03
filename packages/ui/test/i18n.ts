import { langs } from "../i18n";
import { register, init, waitLocale, locale } from "svelte-i18n";

export async function changeLang(lang: keyof typeof langs = "en") {
  init({
    fallbackLocale: lang,
    initialLocale: lang,
    loadingDelay: 200,
    formats: {},
    warnOnMissingMessages: true,
  });

  await waitLocale(lang);
  locale.set(lang);
}

beforeAll(async function beforeAll() {
  const keys = Object.keys(langs) as (keyof typeof langs)[];
  keys.forEach((ln) => register(ln, async () => langs[ln]));

  return changeLang("en");
});
