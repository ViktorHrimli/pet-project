import React, { useState, useEffect } from 'react';

import {
	WrapperContainer,
	WrapperPetPhoto,
  WrapperInfoBlock,
  PetPhoto,
  TitleModalNotice,
	ReferenceList,
  InfoItem,
  LableNotice,
  DateModalNotice,
	NoticeComments,
	ButtonModalWrapper,
	ContactButton,
	AddToFavoriteButton,
	IconRedHeart
} from './ModalNotice.styled';

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
  favorite
  }) => {

  const [isOpenModalNotice, setIsOpenModalNotice] = useState(false);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <>
    <WrapperContainer>
			<WrapperPetPhoto>
        {image ? (
        <PetPhoto src={image} alt='Pet photo'/>
        ) : (
        <PetPhoto src={defaultPetPhoto} alt='Not pet photo'/>)}
      </WrapperPetPhoto>
      <WrapperInfoBlock>
        <TitleModalNotice>Сute dog looking for a home</TitleModalNotice>
        <ReferenceList>
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
            <LableNotice>Phone</LableNotice>
            <a href={phone}><DateModalNotice>{phone}</DateModalNotice></a>
          </InfoItem>
					<InfoItem>
            <LableNotice>Comments</LableNotice>
            <NoticeComments>{comments}</NoticeComments>
          </InfoItem>
        </ReferenceList>
        <ButtonModalWrapper>
          <ContactButton type="button"
          onClick={() => setIsOpenModalNotice(false)}
          >
            Contact
          </ContactButton>
					<AddToFavoriteButton type="button"
          onClick={() => setIsOpenModalNotice(false)}>
            <p>Add to</p>
						<IconRedHeart/>
          </AddToFavoriteButton>
        </ButtonModalWrapper>
      </WrapperInfoBlock>
    </WrapperContainer>
    </>
  );
};