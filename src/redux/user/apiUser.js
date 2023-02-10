// import axios from "axios";
// axios.defaults.baseURL = 'https://pets-support-webapp.onrender.com/api';
import * as API from '../../redux/auth/operations';

export const getUserData = async () => {
	const { data } = await axios.get('/user/get');
	return data;
};

export const updateUserData = async data => {
	const { data: result } = await axios.put('/user/update', data);
	return result;
};

export const addUserPet = async data => {
	const { data: result } = await axios.post('/pets/add', data);
	return result;
};

export const removeUserPet = async id => {
	const { data } = await axios.delete(`/pets/remove/${id}`);
	return data;
};
