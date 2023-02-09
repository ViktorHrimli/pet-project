import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LogoEl = styled.img`
  width: 82px;

  @media screen and (min-width: 768px) {
    width: 94px;
  }
  @media screen and (min-width: 1280px) {
    width: 120px;
  }
`;

export const HomeReturnEl = styled(NavLink)`
  z-index: 100;
  @media screen and (min-width: 768px) {
    margin-right: auto;

    @media screen and (min-width: 1280px) {
      margin-right: 80px;
    }
  }
`;
