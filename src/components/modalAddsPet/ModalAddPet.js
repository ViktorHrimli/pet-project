import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StepOne } from './addFormStepOne/AddFormStepOne';
import { StepTwo } from './addFormStepTwo/AddFormStepTwo';

import { addUserPet } from '../../redux/user/operations';
import { selectToken } from '../../redux/auth/selectors';

const initialState = {
  name: '',
  breed: '',
  date: '',
  comments: '',
  photo: null,
};

export const ModalAddPet = ({ setIsOpen }) => {
  const [state, setState] = useState(initialState);
  const [isStepNext, setIsStepNext] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (state.photo) {
      localStorage.removeItem('prev');

      delete window.handleMyObject;

      dispatch(addUserPet({ ...state, token }));
    }
  }, [dispatch, state, token]);

  return (
    <>
      {isStepNext ? (
        <StepTwo step={setIsStepNext} state={setState} setIsOpen={setIsOpen} />
      ) : (
        <StepOne step={setIsStepNext} state={setState} setIsOpen={setIsOpen} />
      )}
    </>
  );
};
