export function asset(path) {
  if (!path) return path
  const base = import.meta.env.BASE_URL || "/"
  return `${base}${path.replace(/^\//, "")}`
}
