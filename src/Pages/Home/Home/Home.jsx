import useTitle from "../../../Hooks/useTitle";
import PopularInstructor from "../../PopularInstructor/PopularInstructor";
import Container from "../../Shared/Container/Container";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
  useTitle("Home");
  return (
    <>
      <Banner></Banner>
      <Container>
        <PopularClasses></PopularClasses>
        <PopularInstructor></PopularInstructor>
      </Container>
    </>
  );
};

export default Home;
