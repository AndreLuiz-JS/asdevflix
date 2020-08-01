import { BACKEND_URL } from '../config';

const getAll = () => {
  return fetch(`${BACKEND_URL}/categorias`).then(async (response) => {
    const data = await response.json();
    if (response.ok) return data;

    throw new Error(response.statusText);
  });
};
const getAllWithVideos = () => {
  return fetch(`${BACKEND_URL}/categorias?_embed=videos`).then(async (response) => {
    const data = await response.json();
    if (response.ok) return data;

    throw new Error(response.statusText);
  });
};

export default { getAllWithVideos, getAll };
