import { StyledNavLink, AvatarIconEl } from 'components/userNav/UserNav.styled';

import avatarIcon from 'images/svg/default-avatar.png';

export const UserNav = () => {
  return (
    <StyledNavLink to="/user">
      <AvatarIconEl src={avatarIcon} alt="avatar" />
      Account
    </StyledNavLink>
  );
};
