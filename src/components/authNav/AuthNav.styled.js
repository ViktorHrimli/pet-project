import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles';

export const WrapperAuthNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-right: 55px;
    margin-bottom: 0;
  }
`;

export const StyledNavLink = styled(NavLink)`
  font-family: ${p => theme.fonts.body};
  text-decoration: none;
  font-size: 14px;
  font-weight: ${p => theme.fontWeights.medium};
  color: black;
  padding: 8px 28px;
  border: 2px solid #f59256;
  border-radius: 40px;

  &.active {
    background-color: ${p => theme.colors.primary};
    color: ${p => theme.colors.white};
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: white;
    background-color: ${p => theme.colors.primary};
  }
`;
