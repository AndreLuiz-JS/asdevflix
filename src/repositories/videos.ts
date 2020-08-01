import { BACKEND_URL } from '../config';

interface VideoData {
  title?: string;
  url?: string;
  categoriaId?: number;
}

const create = (data: VideoData): Promise<void> => {
  const body = JSON.stringify(data);
  const headers = { 'Content-type': 'application/json' };
  return fetch(`${BACKEND_URL}/videos`, { method: 'POST', headers, body }).then(async (response) => {
    const data = await response.json();
    if (response.ok) return data;

    throw new Error(response.statusText);
  });
};

export default { create };
