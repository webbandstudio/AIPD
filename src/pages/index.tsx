import Delivery from '@sections/mainPage/delivery/Delivery';
import Shops from '@sections/mainPage/shops/Shops';
import DeliveryInstruction from '@sections/mainPage/deliveryInstruction/DeliveryInstruction';

const Home = () => {
  return (
    <>
      <Delivery />
      <Shops />
      <DeliveryInstruction />
    </>
  );
};

export default Home;

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
