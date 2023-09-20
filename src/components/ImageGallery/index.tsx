import React, { useState } from 'react';
import { Container, Gallery, HighlightImg, HighlightItem, HighlightTitle, ItemImg } from './styles';
import { Image, TouchableOpacity } from 'react-native';

// Define o tipo de dado para os itens da galeria.
type ItemData = {
  id: string;
  title: string;
  description: string;
  image: any;
};

// Mock de dados para os itens da galeria.
const Data: ItemData[] = [
  {
    id: '1',
    title: 'Title 1',
    description: 'Description 1',
    image: require('../../assets/Filme1.png')
  },
  {
    id: '2',
    title: 'Title 2',
    description: 'Description 2',
    image: require('../../assets/Filme2.png')
  },
  {
    id: '3',
    title: 'Title 3',
    description: 'Description 3',
    image: require('../../assets/Filme3.png')
  },
  {
    id: '4',
    title: 'Title 4',
    description: 'Description 4',
    image: require('../../assets/Filme4.png')
  },
];

// Define o tipo de propriedades para um item da galeria.
type ItemProps = {
  item: ItemData;
  onPress: () => void;
};

// Componente para um item da galeria.
const GalleryItem = ({ item, onPress }: ItemProps) => (
  <TouchableOpacity onPress={onPress}>
    <ItemImg source={item.image} /> 
    <HighlightTitle>{item.title}</HighlightTitle>
  </TouchableOpacity>
);

// Componente principal da galeria.
export function ImageGallery() {
  const [focusedIndex, setFocusedIndex] = useState(0); // Estado para controlar o índice do item em foco.

  // Função para lidar com a mudança de foco ao pressionar um item da galeria.
  const handleFocusChange = (newIndex: number) => {
    setFocusedIndex(newIndex); // Atualize o índice do item em foco.
  };

  return (
    <Container>
      <HighlightItem>
        <HighlightImg source={Data[focusedIndex].image} /> 
      </HighlightItem>
      <HighlightTitle>Destaques</HighlightTitle>
      <Gallery
        data={Data} // Use o array Data diretamente
        renderItem={({ item, index }) => (
          <GalleryItem
            key={item.id}
            item={item}
            onPress={() => handleFocusChange(index)}
          />
        )}
        horizontal={true}
      />
      
    </Container>
  );
}
