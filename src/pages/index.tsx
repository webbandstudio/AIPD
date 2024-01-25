import React from 'react';
import Head from 'next/head';

import Delivery from '@sections/mainPage/delivery/Delivery';
import Shops from '@sections/mainPage/shops/Shops';
import DeliveryInstruction from '@sections/mainPage/deliveryInstruction/DeliveryInstruction';
import Goods from '@sections/mainPage/goods/Goods';
import Calculator from '@sections/mainPage/calculator/Calculator';
import Feedbacks from '@sections/mainPage/feedbacks/Feedbacks';
import Faq from '@sections/mainPage/faq/Faq';
import { META_SITE_NAME } from '@constants/constants';

const Home = () => {
  return (
    <>
      <Head>
        <title>
          {`Polish delivery site | ${META_SITE_NAME}`}
        </title>
        <meta
          name="description"
          content="Polish delivery site on which you can see how we work, calculate how profitable it is and learn more about us"
          key="desc"
        />
        {/*TODO: create better logo*/}
        {/*<link rel="icon" href="/logo.ico" />*/}
      </Head>
      <Delivery />
      <Shops />
      <DeliveryInstruction />
      <Goods />
      <Calculator />
      <Feedbacks />
      <Faq />
    </>
  );
};

export default Home;

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
