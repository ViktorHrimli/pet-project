import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ButtonBack = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  padding: 8px 37px;
  width: 100%;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.normal};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  color: ${p => p.theme.colors.text};

  border: ${p => p.theme.borders.medium};
  border-color: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.big};

  cursor: pointer;
  transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.white};
    background-color: ${p => p.theme.colors.primary};
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  @media (min-width: 768px) {
    padding: 10px 28px;
    height: 48px;
  }
`;

export const Submit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 44px;
  padding: 8px 37px;

  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.lineHeights.normal};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  color: ${p => p.theme.colors.white};
  background-color: ${p => p.theme.colors.primary};
  border: none;
  border-radius: ${p => p.theme.radii.big};

  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.focus};
  }

  @media (min-width: 768px) {
    padding: 10px 28px;
    height: 48px;
  }
`;

export const WrapperText = styled.div`
  display: flex;
  margin-top: 40px;
`;
export const TextForm = styled.p`
  font-size: ${p => p.theme.fontSizes.xxxs};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.min};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  margin: 0;
  color: ${p => p.theme.colors.muted};
`;
export const LinkOnLogin = styled(NavLink)`
  font-size: ${p => p.theme.fontSizes.xxxs};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.min};
  letter-spacing: ${p => p.theme.letterSpacings.normal};
  margin-left: 5px;
  text-decoration-line: underline;
  color: ${p => p.theme.colors.secondary};
`;

export const Register1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 498px) {
    width: 458px;
  }
`;

export const Register2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  width: 100%;
  @media screen and (min-width: 498px) {
    width: 458px;
  }
`;
