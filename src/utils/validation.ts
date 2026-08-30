export function ensureNonEmpty(value: string, fieldName: string) {
  if (!value || !value.trim()) {
    throw new Error(`Field '${fieldName}' must not be empty.`);
  }
}
