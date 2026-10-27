export function publicUrl(path) {
  return `${import.meta.env.BASE_URL}${String(path).replace(/^\//, "")}`;
}
