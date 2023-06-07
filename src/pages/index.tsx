import Delivery from '@sections/mainPage/delivery/Delivery';
import Shops from '@sections/mainPage/shops/Shops';
import DeliveryInstruction from '@sections/mainPage/deliveryInstruction/DeliveryInstruction';
import Goods from '@sections/mainPage/goods/Goods';
import Calculator from '@sections/mainPage/calculator/Calculator';
import Feedbacks from '@sections/mainPage/feedbacks/Feedbacks';
import Faq from '@sections/mainPage/faq/Faq';

const Home = () => {
  return (
    <>
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
