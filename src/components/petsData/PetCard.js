import { Container } from 'components/petsData/PetContainer';
import  CardImg  from 'images/noImage/noImage.jpg';
import { DeleteButton } from './DeleteButton';
import { CardMarkUp } from './PetCardMarkup';

export const PetCard = ({ cardData }) => {
	const { userPets, onDeletePet, isPetsLoading } = cardData;
	return (

		<Container>
			<ul >
				{userPets ? userPets.map(
					({ avatarURL, _id, owner, createdAt, updatedAt, ...userPets }) => (
						<li key={createdAt} >
							<CardImg petImg={avatarURL} />
							<DeleteButton
								id={_id}
								onDeletePet={onDeletePet}
								isPetsLoading={isPetsLoading}
							/>
							<CardMarkUp cardData={userPets} id={_id} />
						</li>
					)
				) : "no pets yet"}
			</ul>
		</Container>
	);
};
