import Delivery from '@sections/delivery/Delivery';
import Shops from '@sections/shops/Shops';
import DeliveryInstruction from '@sections/deliveryInstruction/DeliveryInstruction';
import Faq from '@sections/faq/Faq';

const Home = () => {
  return (
    <>
      <Delivery />
      <Shops />
      <DeliveryInstruction />
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
