import { Container, Avatar } from "./styles";
import  AvatarImg  from "../../assets/Avatar.png";

import DigitalClock from "../Clock";
import Navbar from "../Navbar";



export function Header(){
  return(
  <Container>
    <Avatar source={AvatarImg}/>
    <Navbar />
    <DigitalClock />
  </Container>
  )
}