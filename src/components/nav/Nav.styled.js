import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles';

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledNavLink = styled(NavLink)`
  font-family: ${p => theme.fonts.body};
  padding-top: 40px;
  padding-bottom: 40px;
  text-decoration: none;
  font-size: 32px;
  font-weight: ${p => theme.fontWeights.medium};
  line-height: 1.37;
  color: #181c27;

  /* margin-left: 20px;
  margin-right: 20px; */
  &.active {
    font-weight: ${p => theme.fontWeights.bold};
    color: #f59256;
    text-decoration-line: underline;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #f59256;
  }

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;
