import styled from '@emotion/styled';

import { Form, Field } from 'formik';

const AddInputPets = styled(Field)`
  /* width: 240px; */
  /* height: 40px; */

  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.normal};

  padding: 11px 14px;

  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.normal} rgba(245, 146, 86, 0.5);
  border-radius: 40px;

  :focus::placeholder {
    color: transparent;
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
`;

const AddFormPets = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${p => p.theme.space[5]};
  grid-gap: ${p => p.theme.space[3]};
`;

const AddTextPets = styled.h3`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.normal};

  margin-top: ${p => p.theme.space[4]};
  margin-bottom: 0;

  color: ${p => p.theme.colors.black};
`;

export { AddTextPets, AddFormPets, AddLablePets, AddInputPets };
