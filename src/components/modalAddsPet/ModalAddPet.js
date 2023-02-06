import React, { useState } from 'react';
import { ErrorMessage, Formik, Field } from 'formik';

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
} from './ModalAddPet.styled';

const initialState = {
  name: '',
  breed: '',
  date: '',
  comments: '',
  avatar: null,
};

const schema = Yup.object().shape({
  name: Yup.string().min(2).max(16).required(),
  breed: Yup.string().min(2).max(16).required(),
  date: Yup.string().required(),
});

export const ModalAddPet = () => {
  const [isOpen, setisOpen] = useState(false);
  const [state, setState] = useState(initialState);
  console.log(state);
  const [isStepNext, setIsStepNext] = useState(false);

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
            <AddLablePets>
              Name pet
              <AddInputPets placeholder="Type name pet" name="name" />
            </AddLablePets>
            {touched.name && errors.name && <div>{errors?.name}</div>}

            <AddLablePets>
              Date of birth
              <AddInputPets placeholder="Type date of birth" name="date" />
            </AddLablePets>
            {touched.date && errors.date && <div>{errors?.date}</div>}

            <AddLablePets>
              Breed
              <AddInputPets placeholder="Type breed" name="breed" />
            </AddLablePets>
            {touched.breed && errors.breed && <div>{errors?.breed}</div>}

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

const StepTwo = ({ step, state, isOpen }) => {
  const [file, setFile] = useState(null);

  const handleSubmit = (values, action) => {
    state(prev => ({ ...prev, ...values, avatar: file }));

    action.resetForm();
    isOpen(false);
  };
  return (
    <>
      <AddTextPets>Add pet</AddTextPets>

      <AddStepTwoParagraph>Add photo and some comments</AddStepTwoParagraph>

      <Formik onSubmit={handleSubmit} initialValues={{ comments: '' }}>
        <AddFormPets>
          <AddPhoto>
            <AddIconsPhoto />
            <input
              as="input"
              type="file"
              name="avatar"
              hidden={true}
              size={50000}
              accept=".png, .jpg, .jpeg, .webp"
              onChange={e => setFile(e.target.files[0])}
            />
          </AddPhoto>

          <AddLablePets>
            Comments
            <AddComments
              as="textarea"
              placeholder="Type comments"
              rows={4}
              name="comments"
            />
          </AddLablePets>

          <AddButtonConteiner>
            <AddButtonsCancel onClick={() => step(false)} type="button">
              Back
            </AddButtonsCancel>
            <AddButtonsNext type="submit">Done</AddButtonsNext>
          </AddButtonConteiner>
        </AddFormPets>
      </Formik>
    </>
  );
};
