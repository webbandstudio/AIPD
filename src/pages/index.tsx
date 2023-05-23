import Delivery from "@/sections/delivery/Delivery";
import DeliveryInstruction from "@/sections/deliveryInstruction/DeliveryInstruction";
import Goods from "@/sections/goods/Goods";

const Home = () => {
  return (
    <main>
      <Delivery />
      <DeliveryInstruction />
    </main>
  );
};

export default Home;

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
