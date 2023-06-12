import Script from 'next/script';

import { GA_ID } from '@constants/constants';

const GoogleAnalytics = () => {
  return (
    <>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
      <Script id="ga" strategy="worker">
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', ${GA_ID});`
        }
      </Script>
    </>
  );
};

export default GoogleAnalytics;
