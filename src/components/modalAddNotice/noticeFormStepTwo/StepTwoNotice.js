import React, { useState } from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';

import male from '../../../images/svg/male.svg';
import famale from '../../../images/svg/female.svg';

import {
  NoticeAddPhoto,
  AddComments,
  AddIconsPhoto,
  AddErrorMessage,
  ImageSss,
  NoticeAddPhotoConteiner,
  AddStepTwoFormPets,
  NoticeSexRadioBtnConteiner,
  NoticeConteinerSex,
  NoticeLableSex,
  NoticeRadioSexBtn,
  NoticeLableText,
  NoticeIconFemale,
  NoticeSexTextFemale,
  NoticeSexTextMale,
  NoticeIconMale,
} from './StepTwoNotice.styled';

import { InputGlobal, LabelGlobal, TextGlobal } from '../GlobalForm.styled';

import { ButtonForm } from '../buttonForm/ButtonForm';

const shamaStepTwo = Yup.object().shape({
  sex: Yup.string().required().equals(['male', 'female']),
  location: Yup.string().required(),
  comments: Yup.string()
    .required()
    .min(8, 'Should be at 8 characters')
    .max(120),
  price: Yup.number().required(),
});

export const StepTwo = ({ step, state, setIsOpen }) => {
  const [isEnterMale, setIsEnterMale] = useState(true);
  const [file, setFile] = useState(null);
  const [isErrorFile, setIsErrorFile] = useState(true);

  const handleSubmit = (values, action) => {
    console.log(values);
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
      <TextGlobal>Add pet</TextGlobal>

      <Formik
        onSubmit={handleSubmit}
        initialValues={{ comments: '', sex: '', price: '', location: '' }}
        validationSchema={shamaStepTwo}
      >
        {({ errors, touched, isValid }) => (
          <AddStepTwoFormPets>
            <NoticeConteinerSex>
              <NoticeLableText>The sex:</NoticeLableText>
              <NoticeSexRadioBtnConteiner>
                <div>
                  <NoticeIconMale
                    src={male}
                    width="36"
                    height="36"
                    alt="icon"
                    onClick={() => setIsEnterMale(true)}
                  />

                  <NoticeRadioSexBtn
                    type="radio"
                    name="sex"
                    id="male"
                    value="male"
                    hidden={true}
                  />
                  <NoticeLableSex htmlFor="male">
                    <NoticeSexTextMale
                      onClick={() => setIsEnterMale(true)}
                      isMale={isEnterMale}
                    >
                      Male
                    </NoticeSexTextMale>
                  </NoticeLableSex>
                </div>
                <div>
                  <NoticeIconFemale
                    src={famale}
                    width="36"
                    height="36"
                    alt="icon"
                    onClick={() => setIsEnterMale(false)}
                  />
                  <NoticeRadioSexBtn
                    type="radio"
                    name="sex"
                    id="female"
                    value="female"
                    hidden={true}
                  />
                  <NoticeLableSex htmlFor="female">
                    <NoticeSexTextFemale
                      onClick={() => setIsEnterMale(false)}
                      isMale={isEnterMale}
                    >
                      Female
                    </NoticeSexTextFemale>
                  </NoticeLableSex>
                </div>
              </NoticeSexRadioBtnConteiner>
              {touched.sex && errors.sex && (
                <AddErrorMessage>{errors?.sex}</AddErrorMessage>
              )}
            </NoticeConteinerSex>

            <div
              style={{ marginTop: '20px', display: 'grid', gridGap: '16px' }}
            >
              <div style={{ position: 'relative' }}>
                <LabelGlobal>
                  <NoticeLableText>Location:</NoticeLableText>
                  <InputGlobal
                    placeholder="Your pet location"
                    name="location"
                  />
                </LabelGlobal>
                {touched.location && errors.location && (
                  <AddErrorMessage>{errors?.location}</AddErrorMessage>
                )}
              </div>

              <div style={{ position: 'relative' }}>
                <LabelGlobal>
                  <NoticeLableText>Price:</NoticeLableText>
                  <InputGlobal placeholder="Your pet price" name="price" />
                </LabelGlobal>
                {touched.price && errors.price && (
                  <AddErrorMessage>{errors?.price}</AddErrorMessage>
                )}
              </div>
            </div>

            <NoticeAddPhotoConteiner>
              <NoticeLableText>Load the pet’s image</NoticeLableText>
              {!file ? (
                <NoticeAddPhoto>
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
                </NoticeAddPhoto>
              ) : (
                <ImageSss src={file.url} alt="pet" width="208" height="208" />
              )}

              {!isErrorFile && !file && (
                <div style={{ color: 'red' }}>{'Field reqiured!'}</div>
              )}
            </NoticeAddPhotoConteiner>

            <div style={{ position: 'relative' }}>
              <LabelGlobal>
                Comments
                <AddComments
                  as="textarea"
                  placeholder="Enter comments"
                  // rows={4}
                  name="comments"
                />
              </LabelGlobal>
              {touched.comments && errors.comments && (
                <AddErrorMessage>
                  {errors?.comments || 'Errors'}
                </AddErrorMessage>
              )}
            </div>

            <ButtonForm isValid={isValid} setIsOpen={setIsOpen} />
          </AddStepTwoFormPets>
        )}
      </Formik>
    </>
  );
};
