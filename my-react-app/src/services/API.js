// src/services/API.js
import axios from 'axios';

//const API_URL = 'http://localhost:5000/chat';
const API_URL = 'https://react-app-back-end-qe44.onrender.com/chat';

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(API_URL, { message });
    return response;
  } catch (error) {
    // console.error('Error in API call', error);
    
    return { data: { response: 'Sorry, something went wrong. Please try again later.' } };
  }
};
