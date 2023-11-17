import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://travelya.onrender.com',
});

export const Axios = async (category, queryName) => {
  try {
    const response = await axios.get(
      `https://travelya.onrender.com/get/${category}?queryName=${queryName}`
    );
    return response.data.data;
  } catch (error) {
    console.log('error');
    throw error;
  }
};
