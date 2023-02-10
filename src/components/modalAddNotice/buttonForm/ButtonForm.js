import React, { useReducer, useEffect } from 'react';

import {
  AddButtonConteiner,
  AddButtonsCancel,
  AddButtonsNext,
  NoticeButton,
  NoticeConteinerButton,
  NoticeConteinerButtonNested,
} from 'components/modalAddNotice/buttonForm/ButtonForm.styled';

const ButtonFormNextCancel = ({ isValid, setIsOpen }) => {
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

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'goodHands': {
      return { lost_found: false, sell: false, goodHands: payload };
    }
    case 'sell': {
      return { lost_found: false, sell: payload, goodHands: false };
    }
    case 'lost/found': {
      return { lost_found: payload, sell: false, goodHands: false };
    }

    default: {
      return state;
    }
  }
};

const ButtonNoticeForm = ({ setIsUseSell }) => {
  const [isUseGoodHands, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem('btn')) || {
      goodHands: false,
      sell: false,
      lost_found: false,
    }
  );
  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('btn')));
  }, [isUseGoodHands, dispatch]);

  const handleUsePrice = () => {
    setIsUseSell(true);
  };

  const handleUseGoodHands = () => {
    setIsUseSell(false);
  };

  return (
    <NoticeConteinerButton>
      <NoticeConteinerButtonNested>
        <NoticeButton
          type="button"
          onClick={() => {
            dispatch({ type: 'lost/found', payload: true });
            handleUseGoodHands();
            localStorage.setItem('btn', JSON.stringify(isUseGoodHands));
          }}
          active={isUseGoodHands.lost_found}
        >
          lost/found
        </NoticeButton>
      </NoticeConteinerButtonNested>
      <NoticeButton
        type="button"
        onClick={() => {
          dispatch({ type: 'goodHands', payload: true });
          localStorage.setItem('btn', JSON.stringify(isUseGoodHands));

          handleUseGoodHands();
        }}
        active={isUseGoodHands.goodHands}
      >
        In good hands
      </NoticeButton>

      <NoticeButton
        type="button"
        onClick={() => {
          dispatch({ type: 'sell', payload: true });
          localStorage.setItem('btn', JSON.stringify(isUseGoodHands));

          handleUsePrice();
        }}
        active={isUseGoodHands.sell}
      >
        sell
      </NoticeButton>
    </NoticeConteinerButton>
  );
};

const ButtonFormDoneCancel = ({ step, isValid }) => {
  return (
    <AddButtonConteiner>
      <AddButtonsCancel onClick={() => step(false)} type="button">
        Back
      </AddButtonsCancel>
      <AddButtonsNext type="submit" disabled={!isValid}>
        Done
      </AddButtonsNext>
    </AddButtonConteiner>
  );
};

export { ButtonFormNextCancel, ButtonNoticeForm, ButtonFormDoneCancel };
