// import { LinkBasic } from 'components/Button/Button.styled';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

// export const ButtonStyles = `display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 10px 28px;
//   font-size: 14px;
//   letter-spacing: 0.04em;
//   line-height: 1.35;
//   border: 2px solid #f59256;
//   border-radius: 40px;
//   cursor: pointer;
//   transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
//   transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
//    `;

export const ListAuthEl = styled.ul`
  display: flex;

  justify-content: space-between;
  order: 2;

  @media screen and (max-width: 767px) {
    & > ul {
      display: none;
    }
  }
`;

export const ListAuthItem = styled.li`
  width: 180px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-family: ${p => p.theme.fonts.body};
  background-color: ${p => p.theme.colors.white};
  :hover,
  :focus {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.active {
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.white};
  }

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 28px;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 1.35;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
  /* transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1); */
  height: 35px;

  &:not(:first-of-type) {
    margin-left: 12px;

    @media screen and (min-width: 1280px) {
      margin-left: 20px;
    }
  }
  @media screen and (min-width: 768px) {
    height: 47px;
  }
`;

export const ButtonAuth = styled(NavLink)`
  background-color: ${prop =>
    prop.primary ? prop.theme.colors.primary : prop.theme.colors.white};
  color: ${prop =>
    prop.primary ? prop.theme.colors.white : prop.theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
