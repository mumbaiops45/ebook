import { cookies } from "next/headers";

export async function getServerTranslation(namespace) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("app_lang")?.value || "en";

  let translations;
  try {
    translations = (await import(`@/locales/${lang}/${namespace}.json`)).default;
  } catch {
    translations = (await import(`@/locales/en/${namespace}.json`)).default;
  }

  const t = (key) => translations[key] ?? key;
  return { t, lang };
}
