import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectToken } from '../../redux/auth/selectors';
import { addNotices } from '../../redux/notices/operations';

import { StepOne } from 'components/modalAddNotice/noticeFormStepOne/StepOneNotice';
import { StepTwo } from 'components/modalAddNotice/noticeFormStepTwo/StepTwoNotice';

const initialState = {
  name: '',
  title: '',
  breed: '',
  date: '',
  sex: '',
  comments: '',
  price: '',
  location: '',
  photo: null,
};

export const ModalAddNotice = ({ setIsOpen }) => {
  const [state, setState] = useState(initialState);
  const [isStepNext, setIsStepNext] = useState(false);
  const [isUseSell, setIsUseSell] = useState(true);

  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (state.photo) {
      const key = Object.keys(JSON.parse(localStorage.getItem('btn')));

      localStorage.removeItem('prev');
      localStorage.removeItem('btn');

      dispatch(addNotices({ ...state, token, key }));
    }
  }, [dispatch, state, token]);

  return (
    <>
      {isStepNext ? (
        <StepTwo
          step={setIsStepNext}
          state={setState}
          setIsOpen={setIsOpen}
          isUseSell={isUseSell}
        />
      ) : (
        <StepOne
          step={setIsStepNext}
          state={setState}
          setIsOpen={setIsOpen}
          setIsUseSell={setIsUseSell}
        />
      )}
    </>
  );
};
