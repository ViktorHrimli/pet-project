import styled from '@emotion/styled';
import { Field } from 'formik';

export const InputArea = styled(Field)`
  width: 100%;
  height: 40px;
  padding: 0 10px 0 10px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: ${p => p.theme.lineHeights.normal};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.background};
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.inputAuthForm};
  border-radius: ${p => p.theme.radii.big};
  outline: none;
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.ms};
    line-height: ${p => p.theme.lineHeights.max};
    height: 52px;
  }

  &:focus {
    border: ${p => p.theme.borders.medium};
    border-color: ${p => p.theme.colors.primary};
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &::placeholder {
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.xxs};
    line-height: ${p => p.theme.lineHeights.normal};
    letter-spacing: ${p => p.theme.letterSpacings.normal};
    color: ${p => p.theme.colors.muted};
    @media screen and (min-width: 768px) {
      font-size: ${p => p.theme.fontSizes.ms};
      line-height: ${p => p.theme.lineHeights.max};
    }
  }
`;

export const Message = styled.div`
  margin-bottom: 10px;
  font-size: 10px;
  color: #8b0000;
`;
