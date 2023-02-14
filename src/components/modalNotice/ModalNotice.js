import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  LableComments,
  ButtonModalWrapper,
  ContactButton,
  AddToFavoriteButton,
  IconRedHeart,
  TitleCategory,
  CategoryNotice,
  DeleteButton,
  IconWasteBasket,
  TitleNoticeButton,
} from 'components/modalNotice/ModalNotice.styled';

import { selectUser } from 'redux/auth/selectors';
import { addFavoriteNotices, deleteNotices } from 'redux/notices/operations';
import defaultPetPhoto from '../../images/defaultPetPhoto.png';

export const ModalNotice = ({ data, onClose }) => {
  const {
    _id,
    category,
    imageURL,
    name,
    price,
    birthday,
    breed,
    city,
    sex,
    phone,
    email,
    comments
  } = data;

  const dispatch = useDispatch();
  const { token } = useAuth();

  const showErrorRegister = () => {
    toast.error(
      'Only registered users can add on our site, so first log in or register.',
      {
        position: 'top-center',
      }
    );
  };

  function toFormatTitle() {
    return email.length < 20 ? email : email.slice(0, 20) + '...';
  }

  const userEmail = useSelector(selectUser);

  const isPrivate = userEmail.email === email;

  return (
    <>
      <WrapperContainer>
        <WrapperInfoBlock>
          <WrapperPetPhoto>
            {imageURL ? (
              <PetPhoto src={imageURL} alt="Pet photo" />
            ) : (
              <PetPhoto src={defaultPetPhoto} alt="Not pet photo" />
            )}
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
              <LableNotice>Place:</LableNotice>
              <DateModalNotice>{city}</DateModalNotice>
            </InfoItem>
            <InfoItem>
              <LableNotice>The sex:</LableNotice>
              <DateModalNotice>{sex}</DateModalNotice>
            </InfoItem>
            <InfoItem>
              <LableNotice>Email:</LableNotice>
              {email && <a href={`mailto:${email}`}>
                <DateModalNotice>{toFormatTitle()}</DateModalNotice>
              </a>}
            </InfoItem>
            <InfoItem>
              <LableNotice>Phone:</LableNotice>
              {phone && (
                <a href={`tel:${phone}`}>
                  <DateModalNotice>{phone}</DateModalNotice>
                </a>
              )}
            </InfoItem>
            {price >= 1 && (
              <InfoItem>
                <LableNotice>Price:</LableNotice>
                <DateModalNotice>{price}&#8372;</DateModalNotice>
              </InfoItem>
            )}
          </ReferenceList>
        </WrapperInfoBlock>
        <CommentsItem>
          <NoticeComments>
            <LableComments>Comments: </LableComments>
            {comments}
          </NoticeComments>
        </CommentsItem>
        <ButtonModalWrapper>
          <a href={`tel:${phone}`}>
            <ContactButton type="button">
              <TitleNoticeButton>Contact </TitleNoticeButton>
            </ContactButton>
          </a>
          <AddToFavoriteButton
            type="button"
            onClick={() =>
              token ? dispatch(addFavoriteNotices(_id)) : showErrorRegister()
            }
          >
            <TitleNoticeButton>Add to </TitleNoticeButton>
            <IconRedHeart />
          </AddToFavoriteButton>
          {isPrivate && (
            <DeleteButton
              type="button"
              onClick={() => {
                onClose(false);
                dispatch(deleteNotices(_id));
              }}
            >
              <TitleNoticeButton>Delete </TitleNoticeButton>
              <IconWasteBasket />
            </DeleteButton>
          )}
        </ButtonModalWrapper>
      </WrapperContainer>
    </>
  );
};

ModalNotice.propTypes = {
	onClick: PropTypes.func,
  onClose: PropTypes.func,
  _id: PropTypes.string,
  category: PropTypes.string,
  imageURL: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  birthday: PropTypes.object,
  breed: PropTypes.string,
  city: PropTypes.string,
  sex: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  comments: PropTypes.string,
  token: PropTypes.string,
  defaultPetPhoto: PropTypes.string,
};