import Head from 'next/head';
import React from 'react';

import Title from '@sections/404Page/titleSection/Title';
import { META_SITE_NAME } from '@constants/constants';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>
          {`404 | ${META_SITE_NAME}`}
        </title>
        <meta name="description" content="Sorry this page doesn't exist" key="desc" />
      </Head>
      <Title />
    </>
  );
};

export default Custom404;
