import Menu from "../../Components/Menu";
import SlidePresentation from "../../Components/Desenvolvimento/slideshow";
import { Container } from "./styles";

function Home() {
    return (
        <Container>
            <Menu />
            <SlidePresentation />    
        </Container>
    );
  };
  
  export default Home;