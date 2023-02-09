import logo from 'components/logo/petly-x-min.png';

import { LogoEl, HomeReturnEl } from 'components/logo/Logo.styled';

const Logo = () => {
  return (
    <HomeReturnEl to="/">
      <LogoEl src={logo} alt="Logo Petly" />
    </HomeReturnEl>
  );
};

export default Logo;
