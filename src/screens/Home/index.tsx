import { Header } from "../../components/Header";
import { Gallery } from "../../components/Gallery";
import { Container, StyledImageBackground} from "./styles";

const backgroundImage = require('../../assets/gradient-purple.png');

export function Home(){
    return(
        <StyledImageBackground source={backgroundImage} resizeMode="cover">
          <Container>
            <Header />
            <Gallery />
        </Container>  
        </StyledImageBackground>
        
    )
}