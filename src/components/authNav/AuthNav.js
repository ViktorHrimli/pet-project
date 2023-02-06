import {
  WrapperAuthNav,
  StyledNavLink,
} from 'components/authNav/AuthNav.styled';

export const AuthNav = () => {
  return (
    <WrapperAuthNav>
      <StyledNavLink to="/login">Login</StyledNavLink>

      <StyledNavLink to="/register">Registration</StyledNavLink>
    </WrapperAuthNav>
  );
};
