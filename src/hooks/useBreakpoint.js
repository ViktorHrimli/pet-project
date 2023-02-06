import { useEffect, useState } from 'react';

export const useBreakpoint = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(false);
  const [isTabletScreen, setIsTabletScreen] = useState(false);
  const [isDesktopScreen, setIsDesktopScreen] = useState(false);

  useEffect(() => {
    // set initial value
    const mediaWatcherForMobile = window.matchMedia('(max-width: 767px)');
    setIsMobileScreen(mediaWatcherForMobile.matches);

    const mediaWatcherForTablet = window.matchMedia(
      '(min-width: 768px) and (max-width: 1279px)'
    );
    setIsTabletScreen(mediaWatcherForTablet.matches);

    const mediaWatcherForDesktop = window.matchMedia('(min-width: 1280px)');
    setIsDesktopScreen(mediaWatcherForDesktop.matches);

    //watch for updates
    function updateIsNarrowScreen(e) {
      // console.log('e: ', e);
      setIsMobileScreen(mediaWatcherForMobile.matches);
      setIsTabletScreen(mediaWatcherForTablet.matches);
      setIsDesktopScreen(mediaWatcherForDesktop.matches);
    }

    mediaWatcherForMobile.addEventListener('change', updateIsNarrowScreen);
    mediaWatcherForTablet.addEventListener('change', updateIsNarrowScreen);
    mediaWatcherForDesktop.addEventListener('change', updateIsNarrowScreen);

    // clean up
    return function cleanup() {
      mediaWatcherForMobile.removeEventListener('change', updateIsNarrowScreen);
      mediaWatcherForTablet.removeEventListener('change', updateIsNarrowScreen);
      mediaWatcherForDesktop.removeEventListener(
        'change',
        updateIsNarrowScreen
      );
    };
  }, []);

  return { isMobileScreen, isTabletScreen, isDesktopScreen };
};
