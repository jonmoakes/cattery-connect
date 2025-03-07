import useGetWindowWidth from "./use-get-window-width";

const useIsMobileDevice = () => {
  const { useWindowWidth } = useGetWindowWidth();
  const { width } = useWindowWidth();

  const isMobileDevice = () => {
    if (
      width <= 1366 &&
      window.matchMedia("(display-mode: standalone)").matches
    ) {
      return true;
    } else {
      return false;
    }
  };

  const isDesktop = () => {
    if (width > 1366) {
      return true;
    } else {
      return false;
    }
  };

  const isTinyScreen = () => {
    if (width <= 300) {
      return true;
    } else {
      return false;
    }
  };

  const isSmallScreen = () => {
    if (width > 300 && width <= 379) {
      return true;
    } else {
      return false;
    }
  };

  const isMediumScreen = () => {
    if (width > 379 && width <= 539) {
      return true;
    } else {
      return false;
    }
  };

  const isLargeScreen = () => {
    if (width > 539 && width <= 767) {
      return true;
    } else {
      return false;
    }
  };

  const isLargeTablet = () => {
    if (width > 767 && width <= 1366) {
      return true;
    } else {
      return false;
    }
  };

  const getImacImageSizeBasedOnScreen = () => {
    if (isTinyScreen()) return { width: 260, height: 200 };
    if (isSmallScreen()) return { width: 300, height: 220 };
    if (isMediumScreen()) return { width: 320, height: 250 };
    if (isLargeScreen()) return { width: 486, height: 350 };
    if (isLargeTablet()) return { width: 600, height: 450 };
    if (isDesktop()) return { width: 1000, height: 750 };
    return null;
  };

  const getPhoneImageSizeBasedOnScreen = () => {
    if (isTinyScreen()) return { width: 230, height: 250 };
    if (isSmallScreen()) return { width: 270, height: 290 };
    if (isMediumScreen()) return { width: 350, height: 400 };
    if (isLargeScreen()) return { width: 400, height: 420 };
    if (isLargeTablet()) return { width: 450, height: 420 };
    if (isDesktop()) return { width: 750, height: 800 };
    return null;
  };

  return {
    isMobileDevice,
    isDesktop,
    getImacImageSizeBasedOnScreen,
    getPhoneImageSizeBasedOnScreen,
  };
};

export default useIsMobileDevice;
