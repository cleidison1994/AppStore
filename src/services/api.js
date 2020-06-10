import 'dotenv/config';
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.APP_URL || 'http://134.122.20.25',
});
export default api;
