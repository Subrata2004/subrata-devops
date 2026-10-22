export function isPlaceholder(value: string | undefined | null): boolean {
  if (!value) return true
  return value.startsWith('YOUR_')
}

export function displayLink(value: string, fallback: string): string {
  return isPlaceholder(value) ? fallback : value
}
