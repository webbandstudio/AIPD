import Delivery from "@/sections/delivery/Delivery";
import Calculator from "@/sections/calculator/Calculator";

const Home = () => {
  return (
    <main>
      <Delivery />
      <Calculator />
    </main>
  );
};

export default Home;

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
