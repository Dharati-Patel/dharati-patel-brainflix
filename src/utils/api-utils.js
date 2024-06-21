import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const fetchVideoList = async () => {
    const response = await axios.get(`${API_URL}videos`);
    return response.data;
};

export const fetchVideoDetails = async (id) => {
    const response = await axios.get(`${API_URL}videos/${id}`);
    return response.data;
};
