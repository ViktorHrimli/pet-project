import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteItems, selectItemById } from 'redux/notices/selectors';
import {
  addFavoriteNotices,
  removeFavoriteNotices,
  getNoticesById,
} from 'redux/notices/operations';

import { useAuth } from 'hooks/useAuth';
import { intToEnglish } from 'components/noticesCategoryItem/date';
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
} from 'components/noticesCategoryItem/NoticesCategoryItem.styled';

import { ModalNoticeLayout } from 'components/modalsLayout/modalNoticeLayout/ModalNoticeLayout';
import { ModalNotice } from 'components/modalNotice/ModalNotice';

export const NoticeCategoryItem = ({ item }) => {
  const dispatch = useDispatch();
  const { token } = useAuth();
  const { _id, category, title, birthday, breed, city, imageURL, price } = item;
  const [isOpenModalNotice, setIsOpenModalNotice] = useState(false);

  const allFavorite = useSelector(selectFavoriteItems);
  const selectItem = useSelector(selectItemById);
  const isFavorite = allFavorite.find(card => card._id === _id);

  function formatData() {
    const data2 = birthday.split('.').reverse().join('.');
    const date1 = new Date(data2);
    const age = getCurrentAge(date1);
    const dateWords = intToEnglish(age);
    function getCurrentAge(date) {
      return (
        ((new Date().getTime() - date.getTime()) /
          (24 * 3600 * 365.25 * 1000)) |
        0
      );
    }
    return age < 1 ? 'less than a year' : `${dateWords} year`;
  }
  function formatTitle() {
    return title.length < 30 ? title : title.slice(0, 30) + '...';
  }

  return (
    <CardItem key={_id}>
      <CardImage src={imageURL} alt="Pet photo" />
      <Notiece>
        <span>{category} </span>
      </Notiece>
      <Pick onClick={() => dispatch(addFavoriteNotices(_id))}>
        <PickIcon />
      </Pick>
      <CardTitle>{formatTitle()}</CardTitle>
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
          <Try>{formatData()}</Try>
        </InfoItem>{' '}
        {price > 1 ? (
          <InfoItem>
            <span>Price:</span>
            <Try>{price}$</Try>
          </InfoItem>
        ) : null}
      </InfoList>
      <Buttonlist>
        <CardButton
          type="button"
          onClick={() => {
            setIsOpenModalNotice(true);
            dispatch(getNoticesById(_id));
          }}
        >
          Learn more
          <ModalNoticeLayout
            isOpenModalNotice={isOpenModalNotice}
            setIsOpenModalNotice={setIsOpenModalNotice}
          >
            <ModalNotice
              data={selectItem}
              setIsOpenModalNotice={setIsOpenModalNotice}
            />
          </ModalNoticeLayout>
        </CardButton>
        {token && isFavorite && (
          <DeleteButton
            type="button"
            onClick={() => dispatch(removeFavoriteNotices(_id))}
          >
            Delete
          </DeleteButton>
        )}
      </Buttonlist>
    </CardItem>
  );
};
