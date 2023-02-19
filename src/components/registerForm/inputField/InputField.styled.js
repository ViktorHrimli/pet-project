import styled from '@emotion/styled';
import { Field } from 'formik';

export const InputArea = styled(Field)`
  width: 100%;
  height: 40px;
  padding: 0 14px;
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

  transition-property: border-color;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    font-size: ${p => p.theme.fontSizes.ms};
    line-height: ${p => p.theme.lineHeights.max};
    height: 52px;
  }

  &:hover,
  &:focus {
    border: ${p => p.theme.borders.medium};
    border-color: ${p => p.theme.colors.primary};
    transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
    ::placeholder {
      color: ${p => p.theme.colors.background};
    }
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

  /* &:focus {
    ::placeholder {
      color: ${p => p.theme.colors.background};
    }
  } */
`;

export const Message = styled.span`
  position: absolute;
  bottom: -15px;
  left: 32px;
  margin: 0px;
  font-size: 10px;
  line-height: calc(1.5);
  color: red;

  /* position: absolute;
  width: 100%;
  bottom: -16px;
  font-size: 10px;
  color: #8b0000; */
`;
