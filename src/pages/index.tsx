import Delivery from '@sections/delivery/Delivery';
import Shops from '@sections/shops/Shops';
import DeliveryInstruction from '@sections/deliveryInstruction/DeliveryInstruction';
import Calculator from '@sections/calculator/Calculator';

const Home = () => {
  return (
    <>
      <Delivery />
      <Shops />
      <DeliveryInstruction />
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
