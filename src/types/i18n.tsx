export type Lang = "en" | "vi";
export type I18nText = { en: string; vi: string };

// Small helper to pick the language-specific string
export function tr<T extends Record<string, string>>(m: T, lang: Lang) {
  return m[lang] ?? m.en;
}

