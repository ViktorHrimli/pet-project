import noImage from 'images/noImage/noImage.jpg';
import {
  PetImage,
  ImageWrapper,
} from 'components/petsData/styles/PetsData.styled';

export const CardImg = ({ petImg }) => {

  return (
    <ImageWrapper>
      {petImg
       ? <PetImage src={petImg} alt="your pet" />
       : <PetImage src={noImage} alt="Your pet can be here" />
       }
    </ImageWrapper>
  );
};
