import Delivery from '@sections/delivery/Delivery';
import Shops from '@sections/shops/Shops';
import DeliveryInstruction from '@sections/deliveryInstruction/DeliveryInstruction';
import Goods from '@sections/goods/Goods';
import Calculator from '@sections/calculator/Calculator';
import Feedbacks from '@sections/feedbacks/Feedbacks';
import Faq from '@sections/faq/Faq';

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
