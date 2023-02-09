import styled from '@emotion/styled';

import { Form, Field } from 'formik';
import { VscAdd } from 'react-icons/vsc';

const AddFormPets = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${p => p.theme.space[5]};
  margin-bottom: 0;
  grid-gap: ${p => p.theme.space[3]};

  @media screen and (min-width: 768px) {
    grid-gap: ${p => p.theme.space[5]};
  }
`;

const AddStepTwoFormPets = styled(AddFormPets)`
  margin-top: 20px;
`;

const AddInputPets = styled(Field)`
  min-width: 240px;

  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: ${p => p.theme.lineHeights.normal};

  padding: 11px 14px;

  background-color: ${p => p.theme.colors.background};

  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.big};

  @media screen and (min-width: 768px) {
    line-height: 1.55;
    min-width: 448px;
  }

  :focus::placeholder {
    color: transparent;
  }

  ::placeholder {
    color: ${p => p.theme.colors.muted};
    font-size: ${p => p.theme.fontSizes.xxs};
  }

  @media screen and (min-width: 768px) {
    line-height: 1.55;

    ::placeholder {
      color: ${p => p.theme.colors.muted};
      font-size: ${p => p.theme.fontSizes.xs};
    }
  }
`;

const AddLablePets = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: 18px;
  line-height: ${p => p.theme.lineHeights.normal};

  grid-gap: ${p => p.theme.space[2]};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
    line-height: ${p => p.theme.lineHeights.normal};
    grid-gap: 12px;
  }
`;

const AddTextPets = styled.h3`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.normal};

  margin-top: ${p => p.theme.space[4]};
  margin-bottom: 20px;

  color: ${p => p.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
    line-height: ${p => p.theme.lineHeights.normal};
  }
`;

const AddButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.normal};

  width: 240px;

  padding: 9px 0;

  border-radius: ${p => p.theme.radii.big};

  cursor: pointer;

  :hover {
    box-shadow: ${p => p.theme.shadows.normal};
  }

  @media screen and (min-width: 768px) {
    width: 180px;
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

const AddButtonsNext = styled(AddButton)`
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
`;

const AddButtonsCancel = styled(AddButton)`
  background-color: transparent;
  color: ${p => p.theme.colors.text};
  border: 2px solid ${p => p.theme.colors.primary};
`;

const AddButtonConteiner = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;

  margin-top: ${p => p.theme.space[5]};
  margin-bottom: ${p => p.theme.space[4]};

  grid-gap: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const AddStepTwoParagraph = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.normal};

  margin-bottom: 0;

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
  }
`;

const AddPhoto = styled.label`
  position: relative;
  width: 208px;
  height: 208px;

  background-color: ${p => p.theme.colors.background};
  border-radius: ${p => p.theme.radii.normal};

  :hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
  }
`;

const ImageSss = styled.img`
  display: block;

  width: 208px;
  height: 208px;

  border-radius: ${p => p.theme.radii.normal};

  :hover {
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
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
  height: 100px;

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
    width: 394px;
    height: 116px;
  }
`;

export {
  AddTextPets,
  AddFormPets,
  AddStepTwoFormPets,
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
};
