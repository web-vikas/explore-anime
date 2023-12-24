"use server";
export const fetchAnimeDetails = async (id: string) => {
  const response = await fetch(`https://shikimori.one/api/animes/${id}`);
  const data = await response.json();
  return data;
};
