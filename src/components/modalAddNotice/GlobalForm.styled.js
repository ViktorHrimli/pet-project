import styled from '@emotion/styled';

import { Form, Field } from 'formik';

const FormGlobal = styled(Form)`
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

const InputGlobal = styled(Field)`
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

const LabelGlobal = styled.label`
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

const TextGlobal = styled.h3`
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

const AddErrorMessageGlobal = styled.span`
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

export {
  FormGlobal,
  InputGlobal,
  LabelGlobal,
  TextGlobal,
  AddErrorMessageGlobal,
};
