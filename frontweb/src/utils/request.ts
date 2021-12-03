export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ??
  'http://192.168.0.183:8080' ??
  'http://localhost:8080';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'myclientid';

const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'myclientsecret';