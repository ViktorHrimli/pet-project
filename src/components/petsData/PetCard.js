import { Container } from 'components/petsData/PetContainer';
import {CardImg} from 'components/petsData/CardImage.js';
import { DeleteButton } from 'components/petsData/DeleteButton';
import { CardMarkUp } from 'components/petsData/PetCardMarkup';
import {PetsContainer, PetsDataWrapper, DeleteBtnDiv, PetsListItem} from 'components/petsData/styles/PetsData.styled'

export const PetCard = ({ cardData }) => {
  const { userPets, onDeletePet, isPetsLoading } = cardData;
  console.log('cardData in pets card', cardData);
  return (
    <Container>
      <ul>
        {userPets
          ? userPets.map(
              ({
                urlAvatar,
                _id,
                owner,
                createdAt,
                updatedAt,
                ...userPets
              }) => (
                <PetsContainer>
                <PetsListItem key={createdAt}>
                  <CardImg petImg={urlAvatar} />
                  <PetsDataWrapper>
                    <DeleteBtnDiv>
                  <DeleteButton
                    id={_id}
                    onDeletePet={onDeletePet}
                    isPetsLoading={isPetsLoading}
                  />
                  </DeleteBtnDiv>
                  <CardMarkUp cardData={userPets} id={_id} />
                  </PetsDataWrapper>
                </PetsListItem>
                </PetsContainer>
              )
            )
          : 'no pets yet'}
      </ul>
    </Container>
  );
};
