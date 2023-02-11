import Logo from 'components/logo/Logo';

import { HeaderEl } from 'components/header/Header.styled';
import { Navigation } from 'components/navigation/Navigation';
import ContainerNav from 'components/containerNav/ContainerNav';

export const Header = () => {
  return (
    <HeaderEl>
      <ContainerNav>
        <Logo />
        <Navigation />
      </ContainerNav>
    </HeaderEl>
  );
};
