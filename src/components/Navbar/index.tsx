import React from 'react';
import { AvatarImage, NavbarContainer, TabButton, TabsContainer } from './styles';
import { SubTitle, Title } from '../../screens/Home/styles';


export const Navbar = () => {
    return (
        <NavbarContainer>
        <TabsContainer>
          <TabButton><SubTitle>Home</SubTitle></TabButton>
          <TabButton><SubTitle>Categories</SubTitle></TabButton>
          <TabButton><SubTitle>Movies</SubTitle></TabButton>
          <TabButton><SubTitle>Shows</SubTitle></TabButton>
          <TabButton><SubTitle>Favorites</SubTitle></TabButton>
        </TabsContainer>
      </NavbarContainer>
        
    );
  }
  