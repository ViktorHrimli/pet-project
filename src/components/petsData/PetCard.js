import { Container } from 'components/petsData/PetContainer';
import {CardImg} from 'components/petsData/CardImage.js';
import { DeleteButton } from 'components/petsData/DeleteButton';
import { CardMarkUp } from 'components/petsData/PetCardMarkup';
import {NoPets} from 'components/petsData/NoPets'
import { PetsDataWrapper, DeleteBtnDiv, PetsListItem, PetsUl} from 'components/petsData/styles/PetsData.styled'

export const PetCard = ({ cardData }) => {
  const { userPets, onDeletePet, isPetsLoading } = cardData;

  return (
    <Container>
      <PetsUl>
        {userPets ?
           userPets.map(
              ({
                urlAvatar,
                _id,
                owner,
                createdAt,
                updatedAt,
                ref,
                ...userPets
              }) => (
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
              )
            ) : <NoPets/>
           }
      </PetsUl>
    </Container>
  );
};
