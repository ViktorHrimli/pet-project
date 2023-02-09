import { NAV_LIST } from './constants';
import { StyledNavLink, NavigationWrapper } from 'components/nav/Nav.styled';
import { useBreakpoint } from 'hooks/useBreakpoint';

export const Nav = ({ setOpen }) => {
  const { isMobileScreen, isTabletScreen } = useBreakpoint();
  return (
    <NavigationWrapper>
      {NAV_LIST.map(item => (
        <StyledNavLink
          to={`/${item.link}`}
          key={item.label}
          onClick={() => {
            if (isMobileScreen || isTabletScreen) {
              setOpen(false);
            }
          }}
        >
          {item.label}
        </StyledNavLink>
      ))}
    </NavigationWrapper>
  );
};
