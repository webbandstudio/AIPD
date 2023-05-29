import Delivery from '@sections/delivery/Delivery';
import Shops from '@sections/shops/Shops';
import DeliveryInstruction from '@sections/deliveryInstruction/DeliveryInstruction';
import Goods from '@sections/goods/Goods';

const Home = () => {
  return (
    <>
      <Delivery />
      <Shops />
      <DeliveryInstruction />
      <Goods />
    </>
  );
};

export default Home;

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
