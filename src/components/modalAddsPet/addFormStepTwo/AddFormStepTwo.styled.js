import styled from '@emotion/styled';

import { Field } from 'formik';

import { FormGlobal } from 'components/modalAddNotice/GlobalForm.styled';

const AddStepTwoFormPets = styled(FormGlobal)`
  margin-top: 20px;
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

export { AddComments, AddStepTwoFormPets, AddStepTwoParagraph };
