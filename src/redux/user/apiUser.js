import API from '../../redux/user/api';

export const getUserData = async () => {
	const { data } = await API.get('/user');
	return data;
};

export const updateUserData = async data => {
	const { data: result } = await API.put('/user/update', data);
	return result;
};

export const addUserPet = async data => {
	const { data: result } = await API.post('/pets/add', data);
	return result;
};

export const removeUserPet = async id => {
	const { data } = await API.delete(`/pets/remove/${id}`);
	return data;
};
