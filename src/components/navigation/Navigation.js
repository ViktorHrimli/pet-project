import { AuthNav } from 'components/authNav/AuthNav';
import { Nav } from 'components/nav/Nav';
import { UserNav } from 'components/userNav/UserNav';
import { useAuth } from 'hooks/useAuth';

import { NavMain } from 'components/navigation/Navigation.styled';
import { BurgerZone } from 'components/burger/Burger';

import { useBreakpoint } from 'hooks/useBreakpoint';
// import { useEffect, useState } from 'react';

export const Navigation = () => {
  const { token } = useAuth();
  const { isMobileScreen, isTabletScreen } = useBreakpoint();

  return (
    <NavMain>
      {isMobileScreen ? (
        <BurgerZone>
          <Nav />
          {!token ? <AuthNav /> : <UserNav />}
        </BurgerZone>
      ) : (
        <>
          {isTabletScreen ? (
            <>
              <BurgerZone>
                <Nav />
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
