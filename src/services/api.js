export async function fetchData() {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  const response = await fetch(`${baseUrl}/your-endpoint`);
  if (!response.ok) throw new Error("Failed to fetch data");
  return response.json();
}
