import axios from 'axios';

const API=axios.create({
    baseURL: process.env.React_app_api_url
});

export default API;
