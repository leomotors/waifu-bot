export function parseAcceptLanguage(acceptLanguage: string) {
  const parsed = acceptLanguage?.split(",")[0]?.split(";")[0];

  return !parsed || parsed.includes("*") ? "default" : parsed;
}
