import React, { useState } from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  AddErrorMessageGlobal,
  FormGlobal,
  InputGlobal,
  LabelGlobal,
  TextGlobal,
} from 'components/modalAddNotice/GlobalForm.styled';

import { ButtonFormNextCancel } from 'components/modalAddNotice/buttonForm/ButtonForm';

const regexDate = /(^0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[0-2]).(\d{4}$)/;
const textMatch = /^[a-zA-zа-яіїєА-ЯІЇЄ,.! ]+$/;

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .max(16)
    .required('Required field!')
    .matches(textMatch, 'Incorrect symbol!'),
  breed: Yup.string().min(2).max(16).required('Required field!'),
  date: Yup.string()
    .matches(regexDate, 'Date should be a (DD.MM.yyyy)')
    .required('Required field!'),
});

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
      <TextGlobal>Add pet</TextGlobal>

      <Formik
        initialValues={prevDate || { name: '', date: '', breed: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <FormGlobal>
            <div style={{ position: 'relative' }}>
              <LabelGlobal>
                Name pet
                <InputGlobal placeholder="Enter name pet" name="name" />
              </LabelGlobal>
              {touched.name && errors.name && (
                <AddErrorMessageGlobal>{errors?.name}</AddErrorMessageGlobal>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <LabelGlobal>
                Date of birth
                <InputGlobal placeholder="Enter date of birth" name="date" />
              </LabelGlobal>
              {touched.date && errors.date && (
                <AddErrorMessageGlobal>{errors?.date}</AddErrorMessageGlobal>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <LabelGlobal>
                Breed
                <InputGlobal placeholder="Enter breed" name="breed" />
              </LabelGlobal>
              {touched.breed && errors.breed && (
                <AddErrorMessageGlobal>
                  {errors?.breed || 'Errors'}
                </AddErrorMessageGlobal>
              )}
            </div>

            <ButtonFormNextCancel setIsOpen={setIsOpen} />
          </FormGlobal>
        )}
      </Formik>
    </>
  );
};

export { StepOne };
