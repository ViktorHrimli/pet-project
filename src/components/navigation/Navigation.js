import { AuthNav } from 'components/authNav/AuthNav';
import { Nav } from 'components/nav/Nav';
import { UserNav } from 'components/userNav/UserNav';
import { useAuth } from 'hooks/useAuth';

import { NavMain } from 'components/navigation/Navigation.styled';
import { BurgerZone } from 'components/burger/Burger';
import { useEffect, useState } from 'react';

export const Navigation = () => {
  const { token } = useAuth();

  const [isNarrowScreen, setIsNarrowScreen] = useState(false);

  useEffect(() => {
    // set initial value
    const mediaWatcher = window.matchMedia('(max-width: 767.99px)');
    setIsNarrowScreen(mediaWatcher.matches);

    //watch for updates
    function updateIsNarrowScreen(e) {
      setIsNarrowScreen(e.matches);
    }
    mediaWatcher.addEventListener('change', updateIsNarrowScreen);

    // clean up after ourselves
    return function cleanup() {
      mediaWatcher.removeEventListener('change', updateIsNarrowScreen);
    };
  }, []);

  console.log(isNarrowScreen);

  return (
    <NavMain>
      {isNarrowScreen ? (
        <BurgerZone>
          <Nav />
          {!token ? <AuthNav /> : <UserNav />}
        </BurgerZone>
      ) : (
        <>
          {/* {isTablet ? (
            <></>
            ): (
              
            )} */}
          <BurgerZone>
            <Nav />
          </BurgerZone>
          {!token ? <AuthNav /> : <UserNav />}
        </>
      )}
    </NavMain>
  );
};
