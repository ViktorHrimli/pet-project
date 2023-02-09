import {
  WrapperAuthNav,
  StyledNavLink,
} from 'components/authNav/AuthNav.styled';
import { useBreakpoint } from 'hooks/useBreakpoint';

export const AuthNav = ({ setOpen }) => {
  const { isMobileScreen } = useBreakpoint();
  return (
    <WrapperAuthNav>
      <StyledNavLink
        to="/login"
        onClick={() => {
          if (isMobileScreen) {
            setOpen(false);
          }
        }}
      >
        Login
      </StyledNavLink>

      <StyledNavLink
        to="/register"
        onClick={() => {
          if (isMobileScreen) {
            setOpen(false);
          }
        }}
      >
        Registration
      </StyledNavLink>
    </WrapperAuthNav>
  );
};