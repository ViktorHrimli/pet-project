import React, { useState } from 'react';
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
} from 'components/noticesCategoryItem/NoticesCategoryItem.styled';

import { ModalNoticeLayout } from 'components/modalsLayout/modalNoticeLayout/ModalNoticeLayout';
import { ModalNotice } from 'components/modalNotice/ModalNotice';
//   import Container from 'components/container/Container';

export const NoticeCategoryItem = ({ item }) => {
  const { _id, category, title, birthday, breed, city, imageURL, price } = item;
  const [isOpenModalNotice, setIsOpenModalNotice] = useState(false);

  return (
    <CardItem key={_id}>
      <CardImage src={imageURL} alt="Pet photo" />
      <Notiece>
        <span>{category} </span>
      </Notiece>
      <Pick>
        <PickIcon />
      </Pick>
      <CardTitle>{title}</CardTitle>
      <InfoList>
        <InfoItem>
          <p>Breed:</p>
          <Try>{breed}</Try>
        </InfoItem>
        <InfoItem>
          <p>Place:</p>
          <Try>{city}</Try>
        </InfoItem>
        <InfoItem>
          <p>Age:</p>
          <Try>{birthday}</Try>
        </InfoItem>
        <InfoItem>
          <p>Price:</p>
          <Try>{price}$</Try>
        </InfoItem>
      </InfoList>
      <CardButton onClick={() => setIsOpenModalNotice(true)} type="button">Learn more
      <ModalNoticeLayout isOpenModalNotice={isOpenModalNotice} setIsOpenModalNotice={setIsOpenModalNotice}>
        <ModalNotice data={_id} setIsOpenModalNotice={setIsOpenModalNotice} />
      </ModalNoticeLayout>
      </CardButton>
      <DeleteButton>Delete</DeleteButton>
    </CardItem>
  );
};