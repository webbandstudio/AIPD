import Delivery from '@sections/delivery/Delivery';
import Shops from '@sections/shops/Shops';
import Calculator from '@sections/calculator/Calculator';

const Home = () => {
  return (
    <>
      <Delivery />
      <Shops />
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
