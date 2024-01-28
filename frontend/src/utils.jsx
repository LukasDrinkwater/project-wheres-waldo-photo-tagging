export function getBaseImageUrl() {
  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
  return new URL(backendUrl).toString();
}
