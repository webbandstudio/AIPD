import MainSection from "@sections/shopsPage/mainSection/MainSection";

const ShopsPage = () => {
  return (
    <>
      <MainSection />
    </>
  );
};

export default ShopsPage;

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
