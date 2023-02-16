import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteItems, selectItemById } from 'redux/notices/selectors';
import {
  addFavoriteNotices,
  removeFavoriteNotices,
  getNoticesById,
} from 'redux/notices/operations';
import { useAuth } from 'hooks/useAuth';

import { intToEnglish } from 'components/noticesCategoryItem/intToEnglish';

import {
  CardItem,
  CardImage,
  CardTitle,
  InfoList,
  InfoItem,
  CardButton,
  DeleteButton,
  Notiece,
  Pick,
  PickIcon,
  Try,
  Buttonlist,
  FirstPartOfWord,
  SecondPartOfWord,
  ImageWrapper
} from 'components/noticesCategoryItem/NoticesCategoryItem.styled';
import { IconWasteBasket } from 'components/modalNotice/ModalNotice.styled';

import ModalNoticeLayout from 'components/modalsLayout/modalNoticeLayout/ModalNoticeLayout';
import { ModalNotice } from 'components/modalNotice/ModalNotice';

export const NoticeCategoryItem = ({ item }) => {
  const { _id, category, title, birthday, breed, city, imageURL, price } = item;
  const dispatch = useDispatch();
  const { token } = useAuth();
  const [isModalOpen, seIsModalOpen] = useState(false);
  const allFavorite = useSelector(selectFavoriteItems);
  const selectItem = useSelector(selectItemById);

  const showErrorRegister = () => {
    toast.error(
      'Only registered users can add on our site, so first log in or register.',
      {
        position: 'top-center',
      }
    );
  };
  const isFavorite = allFavorite.find(card => card._id === _id);
  function toFormatTitle() {
    return title.length < 30 ? title : title.slice(0, 30) + '...';
  }
  function toFormatData() {
    const toAge = getCurrentAge(
      new Date(birthday.split('.').reverse().join('.'))
    );
    const transferNumberToWord = intToEnglish(toAge);
    function getCurrentAge(date) {
      return (
        ((new Date().getTime() - date.getTime()) /
          (24 * 3600 * 365.25 * 1000)) |
        0
      );
    }
    const toCurrentWord = () => (toAge > 1 ? 'years' : 'year');
    return toAge < 1
      ? 'less than a year'
      : `${transferNumberToWord} ${toCurrentWord()} `;
  }

  const correctCategory = category
  .split("")
  .map(letter => letter === "-" ? letter = " " : letter )
  .join("");

  return (
    <CardItem key={_id}>
      <ImageWrapper>
        <CardImage src={imageURL} alt="Pet photo" />
      </ImageWrapper>
      <Notiece>
        <span>
          <FirstPartOfWord>{correctCategory.slice(0, 1)}</FirstPartOfWord>
          <SecondPartOfWord>{correctCategory.slice(1, category.length)}</SecondPartOfWord>
        </span>
      </Notiece>
      <Pick
        onClick={() =>
          token ? dispatch(addFavoriteNotices(_id)) : showErrorRegister()
        }
      >
        <PickIcon />
      </Pick>
      <CardTitle>{toFormatTitle()}</CardTitle>
      <InfoList>
        <InfoItem>
          <span>Breed:</span>
          <Try>{breed}</Try>
        </InfoItem>
        <InfoItem>
          <span>Place:</span>
          <Try>{city}</Try>
        </InfoItem>
        <InfoItem>
          <span>Age:</span>
          <Try>{toFormatData()}</Try>
        </InfoItem>{' '}
        {price >= 1 ? (
          <InfoItem>
            <span>Price:</span>
            <Try>{price}&#8372;</Try>
          </InfoItem>
        ) : null}
      </InfoList>
      <Buttonlist>
        <div>
          <CardButton
            type="button"
            onClick={() => {
              dispatch(getNoticesById(_id));
              seIsModalOpen(true);
              document.body.style.overflow = 'hidden';
            }}
          >
            Learn more
          </CardButton>
        </div>
        {token && isFavorite && (
          <DeleteButton
            type="button"
            onClick={() => dispatch(removeFavoriteNotices(_id))}
          >
            Delete
            <IconWasteBasket />
          </DeleteButton>
        )}
      </Buttonlist>
      {isModalOpen && (
        <ModalNoticeLayout onClose={seIsModalOpen}>
          <ModalNotice data={selectItem} onClose={seIsModalOpen} />
        </ModalNoticeLayout>
      )}
    </CardItem>
  );
};
