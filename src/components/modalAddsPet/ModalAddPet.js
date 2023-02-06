import React, { useState, useEffect } from 'react';
import { Field, Formik } from 'formik';

import * as Yup from 'yup';

import { ModalsLayout } from 'components/modalsLayout/ModalsLayout';
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
} from './ModalAddPet.styled';

const initialState = {
  name: '',
  breed: '',
  date: '',
  comments: '',
  avatar: null,
};

const regexDate = /(^0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[0-2]).(\d{4}$)/;

const schema = Yup.object().shape({
  name: Yup.string().min(2).max(16).required(),
  breed: Yup.string().min(2).max(16).required(),
  date: Yup.string()
    .matches(regexDate, 'The value must be a date (DD.MM.yyyy)')
    .typeError('The value must be a date (DD.MM.yyyy)')
    .required('This field is required'),
});

export const ModalAddPet = () => {
  const [isOpen, setisOpen] = useState(false);
  const [state, setState] = useState(initialState);
  console.log(state);
  const [isStepNext, setIsStepNext] = useState(false);

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <ModalsLayout setIsOpen={setisOpen} isOpen={isOpen}>
      {isStepNext ? (
        <StepTwo step={setIsStepNext} state={setState} isOpen={setisOpen} />
      ) : (
        <StepOne step={setIsStepNext} state={setState} isOpen={setisOpen} />
      )}
    </ModalsLayout>
  );
};

const StepOne = ({ step, state, isOpen }) => {
  const [stateStepOne, setStateStepOne] = useState();

  console.log(stateStepOne);

  const handleSubmit = (values, action) => {
    state(prev => ({ ...prev, ...values }));
    setStateStepOne(values);
    step(true);
    action.resetForm();
  };

  return (
    <>
      <AddTextPets>Add pet</AddTextPets>

      <Formik
        initialValues={{ name: '', date: '', breed: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, isSubmitting }) => (
          <AddFormPets>
            <div style={{ position: 'relative' }}>
              <AddLablePets>
                Name pet
                <AddInputPets placeholder="Type name pet" name="name" />
              </AddLablePets>
              {touched.name && errors.name && (
                <AddErrorMessage>{errors?.name}</AddErrorMessage>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <AddLablePets>
                Date of birth
                <AddInputPets placeholder="Type date of birth" name="date" />
              </AddLablePets>
              {touched.date && errors.date && (
                <AddErrorMessage>{errors?.date}</AddErrorMessage>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <AddLablePets>
                Breed
                <AddInputPets placeholder="Type breed" name="breed" />
              </AddLablePets>
              {touched.breed && errors.breed && (
                <AddErrorMessage>{errors?.breed || 'Errors'}</AddErrorMessage>
              )}
            </div>

            <AddButtonConteiner>
              <AddButtonsCancel onClick={() => isOpen(false)} type="button">
                Cancel
              </AddButtonsCancel>
              <AddButtonsNext type="submit" disabled={isSubmitting}>
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
  comments: Yup.string().required().min(8).max(120),
});

const StepTwo = ({ step, state, isOpen }) => {
  const [file, setFile] = useState(null);
  const handleSubmit = (values, action) => {
    state(prev => ({ ...prev, ...values, avatar: file.avatar }));

    action.resetForm();
    isOpen(false);
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
        {({ errors, touched, isSubmitting }) => (
          <AddFormPets>
            {!file ? (
              <AddPhoto>
                <AddIconsPhoto />
                <Field
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

            <div style={{ position: 'relative' }}>
              <AddLablePets>
                Comments
                <AddComments
                  as="textarea"
                  placeholder="Type comments"
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
              <AddButtonsNext type="submit" disabled={!isSubmitting}>
                Done
              </AddButtonsNext>
            </AddButtonConteiner>
          </AddFormPets>
        )}
      </Formik>
    </>
  );
};
