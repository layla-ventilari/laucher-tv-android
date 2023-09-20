import { Container, Logo } from "./styles";
import  LogoImg  from "../../assets/Logo.png";
import { Navbar } from "../Navbar";
import DigitalClock from "../Clock";



export function Header(){
  return(
  <Container>
    <Logo source={LogoImg}/>
    <Navbar />
    <DigitalClock />
  </Container>
  )
}