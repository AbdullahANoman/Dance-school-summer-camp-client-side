import useTitle from "../../../Hooks/useTitle";
import Container from "../../Shared/Container/Container";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Dance from "../Dance/Dance";
import GetWithDanceSchool from "../GetWithDanceSchool/GetWithDanceSchool";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import Prices from "../Prices/Prices";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Banner></Banner>

      <Container>
        <Welcome></Welcome>
        <About></About>
        <PopularClasses></PopularClasses>
        <GetWithDanceSchool/>
        <Prices></Prices>
        <PopularInstructor></PopularInstructor>
        <Dance></Dance>

      </Container>
    </>
  );
};

export default Home;
