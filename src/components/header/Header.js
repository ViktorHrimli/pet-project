import Logo from 'components/logo/Logo';

import Container from 'components/container/Container';
import { HeaderEl } from 'components/header/Header.styled';
import { Navigation } from 'components/navigation/Navigation';
import ContainerNav from 'components/containerNav/ContainerNav';

export const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <ContainerNav>
          <Logo />
          <Navigation />
        </ContainerNav>
      </Container>
    </HeaderEl>
  );
};
