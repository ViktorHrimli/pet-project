import { StyledNavLink, AvatarIconEl } from 'components/userNav/UserNav.styled';
import { useBreakpoint } from 'hooks/useBreakpoint';

import avatarIcon from '../../images/noImage/noImage.jpg';

export const UserNav = ({ setOpen }) => {
  const { isMobileScreen } = useBreakpoint();
  return (
    <StyledNavLink
      to="/user"
      onClick={() => {
        if (isMobileScreen) {
          setOpen(false);
        }
      }}
    >
      <AvatarIconEl src={avatarIcon} alt="avatar" />
      Account
    </StyledNavLink>
  );
};
