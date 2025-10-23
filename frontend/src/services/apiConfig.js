import axios from 'axios';

const defaultConfig = {
   baseURL: 'http://localhost:3000',
   headers: {
      'Content-Type': 'application/json',
   }
}
export const axiosInstance = axios.create(defaultConfig)

// apiHelper.js
export const requestHandler = async (apiCall) => {
   try {
      const response = await apiCall();
      return response.data; 
   } catch (error) {
      console.error("API Error:", error);

      return {
         statusCode: "500",
         message:
            error.response?.data?.message ||
            error.message ||
            "Something went wrong.",
         data: null,
      };
   }
};
