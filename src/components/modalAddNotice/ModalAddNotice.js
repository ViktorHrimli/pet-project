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

      if (key.includes('sell')) {
        dispatch(addNotices({ ...state, token, key }));
      }

      const objNoPrice = {
        title: state.title,
        name: state.name,
        date: state.date,
        breed: state.breed,
        sex: state.sex,
        location: state.location,
        comments: state.comments,
        photo: state.photo,
      };

      dispatch(addNotices({ ...objNoPrice, token, key }));

      localStorage.removeItem('btn');
    }
  }, [dispatch, state, token]);

  useEffect(() => {
    if (localStorage.getItem('btn') === null) {
      localStorage.setItem('btn', JSON.stringify({ sell: true }));
    }
  }, []);

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
