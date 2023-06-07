import Head from 'next/head';
import React from 'react';

import MainSection from '@sections/shopsPage/mainSection/MainSection';
import { META_SITE_NAME } from '@constants/constants';

const ShopsPage = () => {
  return (
    <>
      <Head>
        <title>
          {`Stores from which we deliver goods | ${META_SITE_NAME}`}
        </title>
        <meta name="description" content="Polish stores from which our company delivers goods to customers" key="desc" />
      </Head>
      <MainSection />
    </>
  );
};

export default ShopsPage;

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
