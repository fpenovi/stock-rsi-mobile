import axios from 'axios';
import env from 'react-native-config';

const api = axios.create({
  baseURL: env.API_URL,
  timeout: Number.parseInt(env.TIMEOUT),
  headers: { 'Content-Type': 'application/json' }
});

export { api };
