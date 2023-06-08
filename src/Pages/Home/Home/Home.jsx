import useTitle from "../../../Hooks/useTitle";
import Container from "../../Shared/Container/Container";
import Banner from "../Banner/Banner";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../PopularInstructor/PopularInstructor";


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
