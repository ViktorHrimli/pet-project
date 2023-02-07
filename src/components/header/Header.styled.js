import styled from '@emotion/styled';
import { theme } from 'styles';

export const HeaderEl = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 5;
  background-color: ${p => theme.colors.background};
  padding-top: 20px;
  padding-bottom: 15px;
  padding-left: 0;
  padding-right: 0;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;

  @media screen and (min-width: 768px) {
    padding-top: 24px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 20px;
  }
`;
