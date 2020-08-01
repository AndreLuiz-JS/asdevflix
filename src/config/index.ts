const BACKEND_URL = window.location.hostname.includes('localhost')
  ? 'http://localhost:3333'
  : 'https://asdevflix.glitch.me';

export { BACKEND_URL };
