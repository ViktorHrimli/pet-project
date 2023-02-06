import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles';

export const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
  width: 164px;
  font-family: ${p => theme.fonts.body};
  text-decoration: none;
  font-size: 14px;
  font-weight: ${p => theme.fontWeights.medium};
  color: white;
  padding: 8px 37px;
  border: 2px solid #f59256;
  border-radius: 40px;
  background-color: ${p => theme.colors.primary};

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => theme.colors.black};
  }

  @media screen and (min-width: 768px) {
    margin-right: 55px;
    margin-bottom: 0;
  }
`;

export const AvatarIconEl = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;
