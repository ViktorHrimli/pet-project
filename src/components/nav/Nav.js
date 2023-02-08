import { NAV_LIST } from './constants';
import { StyledNavLink, NavigationWrapper } from 'components/nav/Nav.styled';

export const Nav = ({ setOpen }) => {
  return (
    <NavigationWrapper>
      {NAV_LIST.map(item => (
        <StyledNavLink
          to={`/${item.link}`}
          key={item.label}
          onClick={() => setOpen(false)}
        >
          {item.label}
        </StyledNavLink>
      ))}
    </NavigationWrapper>
  );
};
