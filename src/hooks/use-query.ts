import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useQuery = () => {
  const [isClient, setIsClient] = useState<boolean>(false);
  const isSmMobile = useMediaQuery({ maxWidth: 368 });
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTablet = useMediaQuery({ maxWidth: 768 });
  const isSmallTablet = useMediaQuery({ maxWidth: 820 });
  const isLgTablet = useMediaQuery({ maxWidth: 890 });
  const isTabletDesktop = useMediaQuery({ maxWidth: 960 });
  const isSmDesktop = useMediaQuery({ maxWidth: 1080 });
  const isDesktop = useMediaQuery({ maxWidth: 1281 });
  const isLgDesktop = useMediaQuery({ maxWidth: 1441 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsClient(true);
    }
  }, [setIsClient]);

  if (!isClient) {
    return {
      isSmMobile: false,
      isMobile: false,
      isTablet: false,
      isSmallTablet: false,
      isLgTablet: false,
      isTabletDesktop: false,
      isSmDesktop: false,
      isDesktop: false,
      isLgDesktop: false,
    };
  } else {
    return {
      isSmMobile: isSmMobile,
      isMobile: isMobile,
      isTablet: isTablet,
      isSmallTablet: isSmallTablet,
      isLgTablet: isLgTablet,
      isTabletDesktop: isTabletDesktop,
      isSmDesktop: isSmDesktop,
      isDesktop: isDesktop,
      isLgDesktop: isLgDesktop,
    };
  }
};
