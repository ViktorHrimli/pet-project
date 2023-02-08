import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';

import * as Yup from 'yup';

import {
	Container,
	PetPhoto,
  TitleModalNotice,
	FormNotice,
  LableNotice,
  InputModalNotice,
	AddNoticeComments,
	ButtonModalWrapper,
	ContactButton,
	AddToFavoriteButton,
  ErrorMessageModalNotice,
	IconRedHeart
} from './ModalNotice.styled';

const initialState = {
  name: '',
  birthday: '',
	breed: '',
	lovation: '',
  sex: '',
  email: '',
  phone: '',
	comments: '',
	favorite: false,
};

const regexDate = /(^0[1-9]|[12][0-9]|3[01]).(0[1-9]|1[0-2]).(\d{4}$)/;

const schema = Yup.object().shape({
  name: Yup.string().min(2).max(16).required(),
  birthday: Yup.string()
    .matches(regexDate, 'The value must be a date (DD.MM.yyyy)')
    .typeError('The value must be a date (DD.MM.yyyy)')
    .required('This field is required'),
	breed: Yup.string().min(2).max(16).required(),
	email: Yup.string().email().required('Email is required'),
	phone: Yup.string().required(),
	comments: Yup.string().required().min(8).max(120),
});

export const ModalNotice = () => {
  const [isOpenModalNotice, setIsOpenModalNotice] = useState(false);
  const [state, setState] = useState(initialState);
  console.log(state);

  useEffect(() => {
    return () => {};
  }, []);

  const handleSubmit = (values, action) => {
    setState(values);
    action.resetForm();
  };
	console.log(state);
  return (
    <Container>
			<PetPhoto/>
      <TitleModalNotice>Сute dog looking for a home</TitleModalNotice>

      <Formik
        initialValues={initialState}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors, isSubmitting }) => (
          <FormNotice>
            <div style={{ position: 'relative' }}>
              <LableNotice>
                Name
                <InputModalNotice placeholder="Type name pet" name="name" />
              </LableNotice>
              {touched.name && errors.name && (
                <ErrorMessageModalNotice>{errors?.name}</ErrorMessageModalNotice>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <LableNotice>
                Birthday
                <InputModalNotice placeholder="Type date of birth" name="date" />
              </LableNotice>
              {touched.date && errors.date && (
                <ErrorMessageModalNotice>{errors?.date}</ErrorMessageModalNotice>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <LableNotice>
                Breed
                <InputModalNotice placeholder="Type breed" name="breed" />
              </LableNotice>
              {touched.breed && errors.breed && (
                <ErrorMessageModalNotice>{errors?.breed || 'Errors'}</ErrorMessageModalNotice>
              )}
            </div>
						<div style={{ position: 'relative' }}>
              <LableNotice>
							Lovation
                <InputModalNotice placeholder="Type lovation" name="lovation" />
              </LableNotice>
              {touched.breed && errors.lovation && (
                <ErrorMessageModalNotice>{errors?.lovation || 'Errors'}</ErrorMessageModalNotice>
              )}
            </div>
						<div style={{ position: 'relative' }}>
              <LableNotice>
                The sex
                <InputModalNotice placeholder="Type sex" name="sex" />
              </LableNotice>
              {touched.sex && errors.sex && (
                <ErrorMessageModalNotice>{errors?.sex || 'Errors'}</ErrorMessageModalNotice>
              )}
            </div>
						<div style={{ position: 'relative' }}>
              <LableNotice>
                Email
                <InputModalNotice type="email" placeholder="Type email" name="email" />
              </LableNotice>
              {touched.email && errors.email && (
                <ErrorMessageModalNotice>{errors?.email || 'Errors'}</ErrorMessageModalNotice>
              )}
            </div>
						<div style={{ position: 'relative' }}>
              <LableNotice>
                Phone
                <InputModalNotice placeholder="Type phone" name="phone" />
              </LableNotice>
              {touched.phone && errors.phone && (
                <ErrorMessageModalNotice>{errors?.phone || 'Errors'}</ErrorMessageModalNotice>
              )}
            </div>
						<div style={{ position: 'relative' }}>
              <LableNotice>
                Comments
                <AddNoticeComments
                  as="textarea"
                  placeholder="Type comments"
                  rows={4}
                  name="comments"
                />
              </LableNotice>
              {touched.comments && errors.comments && (
                <ErrorMessageModalNotice>
                  {errors?.comments || 'Errors'}
                </ErrorMessageModalNotice>
              )}
            </div>
            <ButtonModalWrapper>
              <ContactButton type="submit" disabled={isSubmitting}>
                Contact
              </ContactButton>
							<AddToFavoriteButton type="button" onClick={() => setIsOpenModalNotice(false)}>
                <p>Add to</p>
								<IconRedHeart/>
              </AddToFavoriteButton>
            </ButtonModalWrapper>
          </FormNotice>
        )}
      </Formik>
    </Container>
  );
};