import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { NoticeTextDiscription } from 'components/modalAddNotice/noticeFormStepOne/StepOneNotice.styled';

import {
  FormGlobal,
  TextGlobal,
  InputGlobal,
  LabelGlobal,
  AddErrorMessageGlobal,
  NoticeReqiredSymbol,
} from 'components/modalAddNotice/GlobalForm.styled';

import {
  ButtonFormNextCancel,
  ButtonNoticeForm,
} from 'components/modalAddNotice/buttonForm/ButtonForm';

const regexDate = /(^0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[0-2]).(\d{4}$)/;

const schema = Yup.object().shape({
  title: Yup.string()
    .min(2)
    .max(48)
    .required('Field required!')
    .matches(/^[a-zA-zа-яіїєА-ЯІЇЄ,.! ]+$/, 'Incorrect symbol!'),
  name: Yup.string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-zа-яіїєА-ЯІЇЄ,.! ]+$/, 'Incorrect symbol!')
    .required(),
  breed: Yup.string()
    .min(2)
    .max(16)
    .matches(/^[a-zA-zа-яіїєА-ЯІЇЄ,.! ]+$/, 'Incorrect symbol!')
    .required(),
  date: Yup.string()
    .matches(regexDate, 'Date should be a (DD.MM.yyyy)')
    .required(),
});

export const StepOne = ({ step, state, setIsOpen, setIsUseSell }) => {
  const [prevDate] = useState(
    JSON.parse(localStorage.getItem('prev')) || {
      title: '',
      name: '',
      date: '',
      breed: '',
    }
  );

  const handleSubmit = (values, action) => {
    localStorage.setItem('prev', JSON.stringify(values));

    state(prev => ({ ...prev, ...values }));
    step(true);
    action.resetForm();
  };

  return (
    <>
      <TextGlobal>Add pet</TextGlobal>

      <NoticeTextDiscription>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </NoticeTextDiscription>

      <ButtonNoticeForm setIsUseSell={setIsUseSell} />

      <Formik
        initialValues={prevDate || { title: '', name: '', date: '', breed: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ touched, errors }) => (
          <FormGlobal>
            <div style={{ position: 'relative' }}>
              <LabelGlobal>
                <div>
                  Title ad<NoticeReqiredSymbol>*</NoticeReqiredSymbol>
                </div>

                <InputGlobal placeholder="Enter title" name="title" />
              </LabelGlobal>
              {touched.title && errors.title && (
                <AddErrorMessageGlobal>{errors?.title}</AddErrorMessageGlobal>
              )}
            </div>
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
