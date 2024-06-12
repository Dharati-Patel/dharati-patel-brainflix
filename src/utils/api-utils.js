import axios from 'axios';

const API_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const API_KEY = "a0c25360-d7d0-4ba5-b258-7c11a0ac5f5f";

export const fetchVideoList = async () => {
    const response = await axios.get(`${API_URL}/videos?api_key=${API_KEY}`);
    return response.data;
};

export const fetchVideoDetails = async (id) => {
    const response = await axios.get(`${API_URL}/videos/${id}?api_key=${API_KEY}`);
    return response.data;
};
  