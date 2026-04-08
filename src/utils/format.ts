export function formatDate(date: Date, locale?: string): string {
  if (locale) {
    return date.toLocaleDateString(locale);
  }
  return date.toISOString();
}
