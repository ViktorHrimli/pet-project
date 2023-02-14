import { useMediaQuery } from 'react-responsive';
import noImage from 'images/noImage/noImage.jpg';
import {PetImage} from 'components/petsData/styles/PetsData.styled'

export const CardImg = ({ petImg }) => {
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  return (
    <div>
      {isTablet ? (
        <PetImage src={petImg ? petImg : noImage} alt="big cat" />
      ) : (
        <PetImage src={petImg ? petImg : noImage} alt="small cat" />
      )}
    </div>
  );
};
