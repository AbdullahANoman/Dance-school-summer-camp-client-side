import useTitle from "../../../Hooks/useTitle";
import Container from "../../Shared/Container/Container";
import Banner from "../Banner/Banner";
import Dance from "../Dance/Dance";
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
        <Dance></Dance>
      </Container>
    </>
  );
};

export default Home;
