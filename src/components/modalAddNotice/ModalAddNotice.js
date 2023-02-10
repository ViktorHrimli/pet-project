import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectToken } from '../../redux/auth/selectors';

import { StepOne } from 'components/modalAddNotice/noticeFormStepOne/StepOneNotice';
import { StepTwo } from 'components/modalAddNotice/noticeFormStepTwo/StepTwoNotice';

const initialState = {
  name: '',
  title: '',
  breed: '',
  date: '',
  sex: '',
  comments: '',
  price: 0,
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
      localStorage.removeItem('prev');
      // dispatch(addPet({ ...state, token }));
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
