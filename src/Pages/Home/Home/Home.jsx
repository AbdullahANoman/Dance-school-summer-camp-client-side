import useTitle from "../../../Hooks/useTitle";
import Container from "../../Shared/Container/Container";
import Banner from "../Banner/Banner";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Banner></Banner>
      <Container></Container>
    </>
  );
};

export default Home;
