import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[2]};
  margin-bottom: 30px;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (min-width: 768px) {
    width: 480px;
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: ${p => p.theme.space[9]};
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
  } ;
`;

export const ButtonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[2]};
`;
export const ButtonUserList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${p => p.theme.space[2]};
`;

export const ButtonItem = styled.li`
  display: flex;
  @media screen and (max-width: 1279px) {
    &:nth-of-type(1) {
      order: 3;
    }
    &:nth-of-type(2) {
      order: 1;
    }
    &:nth-of-type(3) {
      order: 2;
    }
  }
`;
export const OnlineItem = styled.li`
  display: flex;
`;

export const Button = styled(NavLink)`
  color: ${p => p.theme.colors.text};
  padding-top: ${p => p.theme.space[2]};
  padding-bottom: ${p => p.theme.space[2]};
  padding-left: ${p => p.theme.space[5]};
  padding-right: ${p => p.theme.space[5]};
  border-radius: ${p => p.theme.radii.big};
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.xxs};
  line-height: ${p => p.theme.lineHeights.normal};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  background-color: ${p => p.theme.colors.white};
  border: 2px solid ${p => p.theme.colors.primary};

  transition-property: background-color, color;
  transition-duration: 0.25s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }
`;
