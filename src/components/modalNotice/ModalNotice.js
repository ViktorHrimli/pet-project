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
  FirstPartOfWord,
  SecondPartOfWord,
  DeleteFromFavoriteButton,
  WrapperFavoriteButton,
  IconWhiteHeart,
  Link
} from 'components/modalNotice/ModalNotice.styled';

import { selectUser } from 'redux/auth/selectors';
import { selectFavoriteItems } from 'redux/notices/selectors';
import {
  addFavoriteNotices,
  deleteNotices,
  removeFavoriteNotices,
} from 'redux/notices/operations';

export const ModalNotice = ({ data, onClose }) => {

  const {
    _id,
    title,
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
    comments,
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
  let favoriteItem = useSelector(selectFavoriteItems)
  .filter(item => item._id === _id);


  const isPrivate = userEmail.email === email;

  return (
    <>
      <WrapperContainer>
        <WrapperInfoBlock>
          <WrapperPetPhoto>
            {imageURL && <PetPhoto src={imageURL} alt="Pet photo" />}
            <CategoryNotice>
              {category && <TitleCategory>
                <FirstPartOfWord>{category.slice(0, 1)}</FirstPartOfWord>
                <SecondPartOfWord>{
                category.split("")
                .map(letter => letter === "-" ? letter = " " : letter )
                .join("")
                .slice(1, category.length)
                }</SecondPartOfWord>
                </TitleCategory>}
            </CategoryNotice>
          </WrapperPetPhoto>
          <ReferenceList>
            {title && <TitleModalNotice>{title}</TitleModalNotice>}
            <InfoItem>
              <LableNotice>Name:</LableNotice>
              {name && <DateModalNotice>{name}</DateModalNotice>}
            </InfoItem>
            <InfoItem>
              <LableNotice>Birthday:</LableNotice>
              {birthday && <DateModalNotice>{birthday}</DateModalNotice>}
            </InfoItem>
            <InfoItem>
              <LableNotice>Breed:</LableNotice>
              {breed && <DateModalNotice>{breed}</DateModalNotice>}
            </InfoItem>
            <InfoItem>
              <LableNotice>Place:</LableNotice>
              {city && <DateModalNotice>{city}</DateModalNotice>}
            </InfoItem>
            <InfoItem>
              <LableNotice>The sex:</LableNotice>
              {sex && <DateModalNotice>{sex}</DateModalNotice>}
            </InfoItem>
            <InfoItem>
              <LableNotice>Email:</LableNotice>
              {email && (
                <Link href={`mailto:${email}`}>
                  <DateModalNotice>{toFormatTitle()}</DateModalNotice>
                </Link>
              )}
            </InfoItem>
            <InfoItem>
              <LableNotice>Phone:</LableNotice>
              {phone && (
                <Link href={`tel:${phone}`}>
                  <DateModalNotice>{phone}</DateModalNotice>
                </Link>
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
          <WrapperFavoriteButton>
          {favoriteItem.length !== 1 ? (
          <AddToFavoriteButton
            type="button"
            onClick={() => token ? dispatch(addFavoriteNotices(_id)) : showErrorRegister()}
          >
            <TitleNoticeButton>Add to </TitleNoticeButton>
            <IconRedHeart />
          </AddToFavoriteButton>
          ) : (
          <DeleteFromFavoriteButton
            type="button"
            onClick={() => token ? dispatch(removeFavoriteNotices(_id)) : showErrorRegister()}
          >
            <TitleNoticeButton>Delete from </TitleNoticeButton>
            <IconWhiteHeart />
          </DeleteFromFavoriteButton>
          )}
          </WrapperFavoriteButton>
          {isPrivate && (
            <DeleteButton
              type="button"
              onClick={() => {
                onClose(false);
                document.body.style.overflow = '';
                dispatch(removeFavoriteNotices(_id));
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
  handleFavoriteNotice: PropTypes.func,
  showErrorRegister: PropTypes.func,
};
