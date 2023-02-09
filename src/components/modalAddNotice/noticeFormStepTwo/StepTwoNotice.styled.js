import styled from '@emotion/styled';

import { Field } from 'formik';
import { VscAdd } from 'react-icons/vsc';

import { FormGlobal } from '../GlobalForm.styled';

const AddStepTwoFormPets = styled(FormGlobal)`
  margin-top: 20px;
`;

const NoticeTextDiscription = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.normal};

  width: 240px;
  text-align: center;
  margin-bottom: 20px;
  margin-top: 0;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
    line-height: ${p => p.theme.lineHeights.normal};
    width: 445px;
  }
`;

const NoticeConteinerButton = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  grid-gap: 10px;
  max-width: 240px;

  @media screen and (min-width: 768px) {
    max-width: 425px;
    margin-right: 20px;
  }
`;

const NoticeConteinerButtonNested = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;

  grid-gap: 10px;
  max-width: 240px;
`;

const NoticeButton = styled.button`
  display: inline-flex;

  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.normal};

  padding: 8px 24px;

  color: ${p => p.theme.colors.text};
  background-color: transparent;

  border: 1px solid ${p => p.theme.colors.primary};
  border-radius: 40px;

  :focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary};
  }

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
    margin-right: 0;
  }
`;

const NoticeConteinerSex = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
`;

const NoticeLableText = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 18px;
  line-height: ${p => p.theme.lineHeights.normal};

  margin: 0;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

const NoticeSexRadioBtnConteiner = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 50px;

  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 30px;
    gap: 90px;
  }
`;

const NoticeIconFemale = styled.img`
  width: 36px;
  height: 40px;
  margin-right: 0;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 17px;

    width: 36px;
    height: 60px;
  }
`;

const NoticeIconMale = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 0;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    margin-bottom: 23px;

    width: 54px;
    height: 54px;
  }
`;

const NoticeSexTextMale = styled(NoticeLableText)`
  color: ${({ isMale, theme }) => {
    return isMale ? theme.colors.primary : theme.colors.text;
  }};
`;

const NoticeSexTextFemale = styled(NoticeLableText)`
  color: ${({ isMale, theme }) => {
    return !isMale ? theme.colors.primary : theme.colors.text;
  }};
`;

const NoticeLableSex = styled.label`
  color: ${p => p.theme.colors.text};

  :hover,
  :focus {
    color: ${p => p.theme.colors.primary};
  }
`;

const NoticeRadioSexBtn = styled(Field)`
  :checked {
    color: ${p => p.theme.colors.primary};
  }
`;

const NoticeAddPhotoConteiner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  grid-gap: 8px;

  @media screen and (min-width: 768px) {
    grid-gap: 12px;
  }
`;

const NoticeAddPhoto = styled.label`
  position: relative;
  display: block;
  width: 116px;
  height: 116px;

  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};

  :hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

const ImageSss = styled.img`
  display: block;

  width: 116px;
  height: 116px;

  border-radius: ${p => p.theme.radii.normal};

  :hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 140px;
    height: 140px;
  }
`;

const AddIconsPhoto = styled(VscAdd)`
  position: absolute;
  width: 48px;
  height: 48px;

  color: rgba(17, 17, 17, 0.6);

  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

const AddErrorMessage = styled.span`
  position: absolute;
  width: 100%;

  font-size: ${p => p.theme.fontSizes.xxs};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.normal};

  bottom: -18px;
  left: 18px;
  color: red;

  @media screen and (min-width: 768px) {
    bottom: -26px;
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;

const AddComments = styled(Field)`
  width: 240px;

  padding: 10px;

  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: ${p => p.theme.lineHeights.normal};

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.normal};

  background-color: ${p => p.theme.colors.background};
  color: ${p => p.theme.colors.text};

  border: 1px solid rgba(245, 146, 86, 0.5);
  resize: none;

  ::placeholder {
    color: ${p => p.theme.colors.muted};
  }

  :focus::placeholder {
    color: transparent;
  }

  @media screen and (min-width: 768px) {
    width: 448px;
    height: 113px;
  }
`;

export {
  NoticeConteinerButtonNested,
  NoticeTextDiscription,
  NoticeConteinerButton,
  NoticeButton,
  NoticeSexRadioBtnConteiner,
  NoticeConteinerSex,
  NoticeIconMale,
  NoticeIconFemale,
  NoticeLableSex,
  NoticeRadioSexBtn,
  NoticeAddPhotoConteiner,
  NoticeLableText,
  AddStepTwoFormPets,
  NoticeAddPhoto,
  AddComments,
  AddIconsPhoto,
  AddErrorMessage,
  NoticeSexTextFemale,
  NoticeSexTextMale,
  ImageSss,
};
