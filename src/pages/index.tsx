import Delivery from "@/sections/delivery/Delivery";

const Home = () => {
  return (
    <main>
      <Delivery />
    </main>
  );
};

export default Home;

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
