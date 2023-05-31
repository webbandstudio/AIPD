import Delivery from '@sections/mainPage/delivery/Delivery';
import Shops from '@sections/mainPage/shops/Shops';
import DeliveryInstruction from '@sections/mainPage/deliveryInstruction/DeliveryInstruction';
import Goods from '@sections/mainPage/goods/Goods';
import Calculator from '@sections/mainPage/calculator/Calculator';

const Home = () => {
  return (
    <>
      <Delivery />
      <Shops />
      <DeliveryInstruction />
      <Goods />
      <Calculator />
    </>
  );
};

export default Home;

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
