import Delivery from "@/sections/delivery/Delivery";

const Home = () => {
  return (
    <>
      <Delivery />
    </>
  );
};

export default Home;

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
