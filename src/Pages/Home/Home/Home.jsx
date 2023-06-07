import useTitle from "../../../Hooks/useTitle";
import Container from "../../Shared/Container/Container";

const Home = () => {
    useTitle('Home')
    return (
        <Container>
            <p>This is home</p>
        </Container>
    );
};

export default Home;