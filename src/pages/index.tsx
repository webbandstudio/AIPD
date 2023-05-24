import Delivery from '@sections/delivery/Delivery';
import Shops from '@sections/shops/Shops';

const Home = () => {
  return (
    <>
      <Delivery />
      <Shops />
    </>
  );
};

export default Home;

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
