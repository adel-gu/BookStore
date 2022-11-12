import axios from 'axios';

// API
const APP_ID = 'VTajB0F8HFH8ssRHytO8';
export const API_URL = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`;

export default axios.create({
  baseURL: API_URL,
});
