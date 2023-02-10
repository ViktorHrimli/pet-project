import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  AddTextPets,
  AddFormPets,
  AddLablePets,
  AddInputPets,
  AddButtonsCancel,
  AddButtonsNext,
  AddButtonConteiner,
  AddPhoto,
  AddComments,
  AddStepTwoParagraph,
  AddIconsPhoto,
  AddErrorMessage,
  ImageSss,
  AddStepTwoFormPets,
} from 'components/modalAddsPet/ModalAddPet.styled';

import { addPet } from '../../redux/pets/operations';
import { selectToken } from '../../redux/auth/selectors';

const initialState = {
  name: '',
  breed: '',
  date: '',
  comments: '',
  photo: null,
};

const regexDate = /(^0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[0-2]).(\d{4}$)/;

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .max(16)
    .required()
    .matches(/^[a-zA-zа-яіїєА-ЯІЇЄ,.! ]+$/),
  breed: Yup.string().min(2).max(16).required(),
  date: Yup.string()
    .matches(regexDate, 'Date should be a (DD.MM.yyyy)')
    .required('This field is required'),
});

export const ModalAddPet = ({ setIsOpen }) => {
  const [state, setState] = useState(initialState);
  const [isStepNext, setIsStepNext] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (state.photo) {
      localStorage.removeItem('prev');
      dispatch(addPet({ ...state, token }));
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

const StepOne = ({ step, state, setIsOpen }) => {
  const [prevDate] = useState(JSON.parse(localStorage.getItem('prev')) || '');

  const handleSubmit = (values, action) => {
    localStorage.setItem('prev', JSON.stringify(values));

    state(prev => ({ ...prev, ...values }));
    step(true);
    action.resetForm();
  };

  return (
    <>
      <AddTextPets>Add pet</AddTextPets>

      <Formik
        initialValues={prevDate || { name: '', date: '', breed: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, isValid }) => (
          <AddFormPets>
            <div style={{ position: 'relative' }}>
              <AddLablePets>
                Name pet
                <AddInputPets placeholder="Enter name pet" name="name" />
              </AddLablePets>
              {touched.name && errors.name && (
                <AddErrorMessage>{errors?.name}</AddErrorMessage>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <AddLablePets>
                Date of birth
                <AddInputPets placeholder="Enter date of birth" name="date" />
              </AddLablePets>
              {touched.date && errors.date && (
                <AddErrorMessage>{errors?.date}</AddErrorMessage>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <AddLablePets>
                Breed
                <AddInputPets placeholder="Enter breed" name="breed" />
              </AddLablePets>
              {touched.breed && errors.breed && (
                <AddErrorMessage>{errors?.breed || 'Errors'}</AddErrorMessage>
              )}
            </div>

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
          </AddFormPets>
        )}
      </Formik>
    </>
  );
};

const shamaStepTwo = Yup.object().shape({
  comments: Yup.string()
    .required()
    .min(8, 'Should be at 8 characters')
    .max(120),
});

const StepTwo = ({ step, state, setIsOpen }) => {
  const [file, setFile] = useState(null);
  const [isErrorFile, setIsErrorFile] = useState(true);

  const handleSubmit = (values, action) => {
    if (file) {
      state(prev => ({ ...prev, ...values, photo: file.avatar }));

      action.resetForm();
      setIsErrorFile(true);
      setIsOpen(false);
    } else {
      setIsErrorFile(false);
    }
  };

  return (
    <>
      <AddTextPets>Add pet</AddTextPets>

      <AddStepTwoParagraph>Add photo and some comments</AddStepTwoParagraph>

      <Formik
        onSubmit={handleSubmit}
        initialValues={{ comments: '' }}
        validationSchema={shamaStepTwo}
      >
        {({ errors, touched, isValid }) => (
          <AddStepTwoFormPets>
            {!file ? (
              <AddPhoto>
                <AddIconsPhoto />
                <input
                  as="input"
                  type="file"
                  name="avatar"
                  hidden={true}
                  size={50000}
                  accept=".png, .jpg, .jpeg, .webp"
                  onChange={e => {
                    setFile({
                      url: URL.createObjectURL(e.target.files[0]),
                      avatar: e.target.files[0],
                    });
                  }}
                />
              </AddPhoto>
            ) : (
              <ImageSss src={file.url} alt="pet" width="208" height="208" />
            )}

            {!isErrorFile && !file && (
              <div style={{ color: 'red' }}>{'Field reqiured!'}</div>
            )}

            <div style={{ position: 'relative' }}>
              <AddLablePets>
                Comments
                <AddComments
                  as="textarea"
                  placeholder="Enter comments"
                  rows={4}
                  name="comments"
                />
              </AddLablePets>
              {touched.comments && errors.comments && (
                <AddErrorMessage>
                  {errors?.comments || 'Errors'}
                </AddErrorMessage>
              )}
            </div>

            <AddButtonConteiner>
              <AddButtonsCancel onClick={() => step(false)} type="button">
                Back
              </AddButtonsCancel>
              <AddButtonsNext type="submit" disabled={!isValid}>
                Done
              </AddButtonsNext>
            </AddButtonConteiner>
          </AddStepTwoFormPets>
        )}
      </Formik>
    </>
  );
};
