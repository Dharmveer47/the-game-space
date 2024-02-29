export const API_URL = `https://api.rawg.io/api/`;
const BASE_URL = `https://api.rawg.io/api`;
const TYPE = `/games`;
const API_KEY = `?key=${process.env.apiKey}`;

export async function getGameList() {
  const url = `${BASE_URL}${TYPE}${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

export async function getGameDetails(id: number) {
  const url = `${BASE_URL}${TYPE}/${id}${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
}
