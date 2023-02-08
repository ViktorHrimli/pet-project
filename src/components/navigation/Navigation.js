import { AuthNav } from 'components/authNav/AuthNav';
import { Nav } from 'components/nav/Nav';
import { UserNav } from 'components/userNav/UserNav';
import { useAuth } from 'hooks/useAuth';

import { NavMain } from 'components/navigation/Navigation.styled';
import { BurgerZone } from 'components/burger/Burger';

import { useBreakpoint } from 'hooks/useBreakpoint';
import React from 'react';

export const Navigation = () => {
  const { token } = useAuth();
  const { isMobileScreen, isTabletScreen } = useBreakpoint();

  const [open, setOpen] = React.useState(false);

  return (
    <NavMain>
      {isMobileScreen ? (
        <BurgerZone setOpen={setOpen} open={open}>
          <Nav setOpen={setOpen} />
          {!token ? (
            <AuthNav setOpen={setOpen} />
          ) : (
            <UserNav setOpen={setOpen} />
          )}
        </BurgerZone>
      ) : (
        <>
          {isTabletScreen ? (
            <>
              <BurgerZone setOpen={setOpen} open={open}>
                <Nav setOpen={setOpen} />
              </BurgerZone>
              {!token ? <AuthNav /> : <UserNav />}
            </>
          ) : (
            <>
              <Nav />
              {!token ? <AuthNav /> : <UserNav />}
            </>
          )}
        </>
      )}
    </NavMain>
  );
};
