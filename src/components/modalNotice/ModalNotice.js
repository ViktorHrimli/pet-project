import { useDispatch, useSelector } from 'react-redux';

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
  TitleCategory,
  CategoryNotice,
  DeleteButton
} from 'components/modalNotice/ModalNotice.styled';

import { selectUser } from 'redux/auth/selectors';
import { removeFavoriteNotices } from 'redux/notices/operations';
import defaultPetPhoto from '../../images/defaultPetPhoto.png';

export const ModalNotice = ({data}) => {

  const {
    _id,
    category,
    imageURL,
    name,
    price,
    birthday,
    breed,
    region,
    sex,
    email,
    phone,
    comments
    } = data;
    
    const dispatch = useDispatch();

    const userEmail = useSelector(selectUser);
    
    const owner = userEmail.email === email ? 'owner' : null;
    
    return (
    <>
    <WrapperContainer>
      <WrapperInfoBlock>
        <WrapperPetPhoto>
          {imageURL ? (
          <PetPhoto src={imageURL} alt='Pet photo'/>
          ) : (
          <PetPhoto src={defaultPetPhoto} alt='Not pet photo'/>)}
          <CategoryNotice>
            <TitleCategory>{category}</TitleCategory>
          </CategoryNotice>
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
            <LableNotice>Location:</LableNotice>
            <DateModalNotice>{region}</DateModalNotice>
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
            <a href={`tel:${phone}`}><DateModalNotice>{phone}</DateModalNotice></a>
          </InfoItem>
          {price && (
            <InfoItem>
            <LableNotice>Price:</LableNotice>
            <DateModalNotice>{price}$</DateModalNotice>
          </InfoItem>
          )}
        </ReferenceList>
      </WrapperInfoBlock>
      <CommentsItem>
        <LableNotice>Comments:</LableNotice>
        <NoticeComments>{comments}</NoticeComments>
      </CommentsItem>
      <ButtonModalWrapper>
        {owner && (<DeleteButton type="button"
            onClick={() => dispatch(removeFavoriteNotices(_id))}>
          Delete
        </DeleteButton>)}
        <a href={`tel:${phone}`}><ContactButton type="button">
        Contact
        </ContactButton>
        </a>
				<AddToFavoriteButton type="button">
          Add to
					<IconRedHeart/>
        </AddToFavoriteButton>
      </ButtonModalWrapper>
    </WrapperContainer>
    </>
  );
};
