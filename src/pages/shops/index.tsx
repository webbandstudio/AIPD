import ShopsHeader from "@sections/shopsPage/shopsHeader/ShopsHeader";

const ShopsPage = () => {
  return (
    <>
      <ShopsHeader />
    </>
  );
};

export default ShopsPage;

export const getServerSideProps = () => {
  return {
    props: {},
  };
};
