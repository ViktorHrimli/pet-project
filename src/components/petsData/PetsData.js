
import { useGetUserPetsQuery } from 'redux/user/userPetsApi';

import { AddButtonCircleLink } from 'components/petsData/AddButton';
import PetsList from './PetsList';
import {
  AddButton,
  Container,
  HeadPetsData,
  Title,
  Text,
  PetsDataContainer
} from './PetsData.styled';

export const PetsData = () => {
  const { data = [] } = useGetUserPetsQuery();

  return (
    <>
      <Container>
        <PetsDataContainer>
            <Title>My Pets:</Title>
            <AddButton
              onClick={e => {
              e.preventDefault();
              }}
            >
            <Text>Add pet</Text>
            <AddButtonCircleLink />
          </AddButton>
        </PetsDataContainer>
        <HeadPetsData>
        </HeadPetsData>
        {data && <PetsList data={data} />}
        {data.length === 0 && (
          <div>
            <p>'You have't added your pet yet'</p>
          </div>
        )}
      </Container>
    </>
  );
};

export default PetsData;
