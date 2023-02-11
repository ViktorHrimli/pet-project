import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
	WrapperContainer,
	WrapperPetPhoto,
  WrapperInfoBlock,
  PetPhoto,
  TitleModalNotice,
	ReferenceList,
  InfoItem,
  CommentsItem,
  LableNotice,
  DateModalNotice,
	NoticeComments,
	ButtonModalWrapper,
	ContactButton,
	AddToFavoriteButton,
	IconRedHeart,
  CloseBtn,
  CrossLine
} from 'components/modalNotice/ModalNotice.styled';

import defaultPetPhoto from '../../images/defaultPetPhoto.png';

export const ModalNotice = ({
  image,
  name,
  birthday,
  breed,
  lovation,
  sex,
  email,
  phone,
  comments,
  favorite,
  isOpenModalNotice}) => {

  const dispath = useDispatch();

  useEffect(() => {
    return () => {};
  }, [isOpenModalNotice]);

  return (
    <>
    <WrapperContainer>
      <WrapperInfoBlock>
        <CloseBtn>
          <CrossLine/>
        </CloseBtn>
        <WrapperPetPhoto>
          {image ? (
          <PetPhoto src={image} alt='Pet photo'/>
          ) : (
          <PetPhoto src={defaultPetPhoto} alt='Not pet photo'/>)}
        </WrapperPetPhoto>
        <ReferenceList>
        <TitleModalNotice>Сute dog looking for a home</TitleModalNotice>
          <InfoItem>
            <LableNotice>Name:</LableNotice>
            <DateModalNotice>{name}</DateModalNotice>
          </InfoItem>
          <InfoItem>
            <LableNotice>Birthday:</LableNotice>
            <DateModalNotice>{birthday}</DateModalNotice>
          </InfoItem>
          <InfoItem>
            <LableNotice>Breed:</LableNotice>
            <DateModalNotice>{breed}</DateModalNotice>
          </InfoItem>
          <InfoItem>
            <LableNotice>Lovation:</LableNotice>
            <DateModalNotice>{lovation}</DateModalNotice>
          </InfoItem>
				  <InfoItem>
            <LableNotice>The sex:</LableNotice>
            <DateModalNotice>{sex}</DateModalNotice>
          </InfoItem>
					<InfoItem>
            <LableNotice>Email:</LableNotice>
            <a href={email} ><DateModalNotice>{email}</DateModalNotice></a>
          </InfoItem>
					<InfoItem>
            <LableNotice>Phone:</LableNotice>
            <a href={phone}><DateModalNotice>{phone}</DateModalNotice></a>
          </InfoItem>
        </ReferenceList>
      </WrapperInfoBlock>
      <CommentsItem>
        <LableNotice>Comments:</LableNotice>
        <NoticeComments>{comments}</NoticeComments>
      </CommentsItem>
      <ButtonModalWrapper>
        <ContactButton type="button"
          onClick={() => dispath(isOpenModalNotice(false))}
        >
        Contact
        </ContactButton>
				<AddToFavoriteButton type="button"
          onClick={() => dispath(isOpenModalNotice(false))}
        >
          Add to
					<IconRedHeart/>
        </AddToFavoriteButton>
      </ButtonModalWrapper>
    </WrapperContainer>
    </>
  );
};
