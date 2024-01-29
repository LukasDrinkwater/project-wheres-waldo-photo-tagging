export function getBaseImageUrl() {
  const backendUrl =
    import.meta.env.VITE_BACKEND_URL ||
    "https://project-wheres-waldo.adaptable.app";
  console.log(backendUrl);
  return new URL(backendUrl).toString();
}
