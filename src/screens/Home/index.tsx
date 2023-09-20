import { Header } from "../../components/Header";
import { ImageGallery } from "../../components/ImageGallery";

import { Container} from "./styles";


export function Home(){
    return(
        <Container>
            <Header />
            <ImageGallery />
        </Container>
    )
}