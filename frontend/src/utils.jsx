export function getBaseImageUrl() {
  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
  console.log(backendUrl);
  return new URL(backendUrl).toString();
}
