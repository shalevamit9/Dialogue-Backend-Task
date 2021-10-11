const { default: axios } = require("axios");

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  params: {
    api_key: process.env.API_KEY
  },
});

module.exports = axiosInstance;
