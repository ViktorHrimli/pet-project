import React from 'react';

import {
  AddButtonConteiner,
  AddButtonsCancel,
  AddButtonsNext,
  NoticeButton,
  NoticeConteinerButton,
  NoticeConteinerButtonNested,
} from './ButtonForm.styled';

const ButtonForm = ({ isValid, setIsOpen }) => {
  return (
    <AddButtonConteiner>
      <AddButtonsCancel
        onClick={() => {
          setIsOpen(false);
          localStorage.removeItem('prev');
        }}
        type="button"
      >
        Cancel
      </AddButtonsCancel>
      <AddButtonsNext type="submit" disabled={!isValid}>
        Next
      </AddButtonsNext>
    </AddButtonConteiner>
  );
};

const ButtonNoticeForm = () => {
  return (
    <NoticeConteinerButton>
      <NoticeConteinerButtonNested>
        <NoticeButton type="button">lost/found</NoticeButton>
      </NoticeConteinerButtonNested>
      <NoticeButton type="button">In good hands</NoticeButton>

      <NoticeButton type="button" autoFocus={true}>
        sell
      </NoticeButton>
    </NoticeConteinerButton>
  );
};

export { ButtonForm, ButtonNoticeForm };
