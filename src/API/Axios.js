// api.js

import axios from 'axios';

const baseURL = 'https://picsum.photos/v2/';

export const fetchImages = async (page, limit) => {
  try {
    const response = await axios.get(`list?page=${page}&limit=${limit}`, { baseURL });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error; // Re-throw the error to handle it in the component
  }
};
