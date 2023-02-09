import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, removeUserPet } from 'redux/user/operations';
import { resetIsAddedPetSuccess } from 'redux/user/slice';
import { getIsAddedPetSuccess, getUserError } from 'redux/user/selectors';
import { selectors } from './selectors';

import { UserForm } from 'components/userData/UserInfo';
import { PetCard } from 'components/petsData/PetCard';
import { Title } from 'components/userData/Title';

import { UserPageContainer, UserContainer, UserInfo, PetTitle, UserCardWrapper } from './UserPage.styles';

const UserPage = () => {
	const dispatch = useDispatch();

	const userInfo = useSelector(selectors.getUserInfo);
	const userAvatar = useSelector(selectors.getUserAvatar);
	const userPets = useSelector(selectors.getUserPets);
	const isPetsLoading = useSelector(selectors.getPetsLoading);
	const isUserLoading = useSelector(selectors.getUserLoading);
	const error = useSelector(getUserError);
	const isAddedPetSuccess = useSelector(getIsAddedPetSuccess);

	useEffect(() => {
		dispatch(getUserData());
	}, [dispatch]);

	useEffect(() => {
		if (isAddedPetSuccess) {

			dispatch(resetIsAddedPetSuccess());
		}

		if (error) {

		}
	}, [dispatch, isAddedPetSuccess, error]);

	const onDeletePet = e => {
		const petToRemove = e.currentTarget.id;
		dispatch(removeUserPet(petToRemove));
	};
	const formData = { userInfo, userAvatar, isUserLoading };
	const cardData = { userPets, onDeletePet, isPetsLoading };

	return (
    <UserPageContainer>
      <UserCardWrapper>
      <Title title="My information:"  />
      <UserInfo>

			    <UserContainer >
				    <UserForm formData={formData} />
			    </UserContainer>
      </UserInfo>
      </UserCardWrapper>

      <div>
        <PetTitle>My pets</PetTitle>
				<PetCard cardData={cardData} />
			</div>
		</UserPageContainer>


	);
};

export default UserPage;