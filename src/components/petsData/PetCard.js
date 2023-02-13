import { Container } from 'components/petsData/PetContainer';
import CardImg from 'images/noImage/noImage.jpg';
import { DeleteButton } from 'components/petsData/DeleteButton';
import { CardMarkUp } from 'components/petsData/PetCardMarkup';

export const PetCard = ({ cardData }) => {
  const { userPets, onDeletePet, isPetsLoading } = cardData;
  console.log('cardData in pets card', cardData);
  return (
    <Container>
      <ul>
        {userPets
          ? userPets.map(
              ({
                // urlAvatar,
                _id,
                owner,
                createdAt,
                updatedAt,
                ...userPets
              }) => (
                <li key={createdAt}>
                  {/* <CardImg petImg={urlAvatar} /> */}
                  <DeleteButton
                    id={_id}
                    onDeletePet={onDeletePet}
                    isPetsLoading={isPetsLoading}
                  />
                  <CardMarkUp cardData={userPets} id={_id} />
                </li>
              )
            )
          : 'no pets yet'}
      </ul>
    </Container>
  );
};
