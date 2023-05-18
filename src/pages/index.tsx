import Delivery from "@/sections/delivery/Delivery";
import FaqElement from "@/components/faqElement/FaqElement";

const Home = () => {
  return (
    <main>
      <Delivery />
      <FaqElement title="Как долго ждать доставку" text="Очень долго :)))))" />
    </main>
  );
};

export default Home;

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
