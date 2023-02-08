import axios from 'axios';

const API = axios.create({
	baseURL: "https://pets-support-webapp.onrender.com/api",
});

export default API;
