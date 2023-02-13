import styled from '@emotion/styled';

import { Field } from 'formik';

import { FormGlobal } from 'components/modalAddNotice/GlobalForm.styled';

const AddStepTwoFormPets = styled(FormGlobal)`
  margin-top: 20px;
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

export { NoticeAddPhotoConteiner, AddStepTwoFormPets, AddComments };
