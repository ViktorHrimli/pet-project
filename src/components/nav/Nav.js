import { NAV_LIST } from './constants';
import { StyledNavLink, NavigationWrapper } from 'components/nav/Nav.styled';

export const Nav = () => {
  return (
    <NavigationWrapper>
      {NAV_LIST.map(item => (
        <StyledNavLink to={`/${item.link}`} key={item.label}>
          {item.label}
        </StyledNavLink>
      ))}
    </NavigationWrapper>
  );
};
