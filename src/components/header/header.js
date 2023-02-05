import Logo from 'components/logo/Logo';

import Container from 'components/container/Container';
import { HeaderEl } from 'components/Header/Header.styled';
import { Navigation } from 'components/navigation/Navigation';

export const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <Logo />
        <Navigation />
      </Container>
    </HeaderEl>
  );
};
