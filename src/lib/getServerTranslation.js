export async function getServerTranslation(namespace) {
  const lang = "mr"; // 👈 change to your primary language
  let translations;
  try {
    translations = (await import(`@/locales/${lang}/${namespace}.json`)).default;
  } catch {
    translations = (await import(`@/locales/en/${namespace}.json`)).default;
  }
  const t = (key) => translations[key] ?? key;
  return { t, lang };
}