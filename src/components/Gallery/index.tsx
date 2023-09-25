import React, { useState, useCallback } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Data, ItemsData } from '../../utils/ItemsData';

import {
  Container,
  HighlightContainer,
  HighlightImg,
  HighlightTitle,
  GalleryContainer,
  GalleryItem,
  ItemImg,
  ItemText,
  ScrollViewContainer,
  TextOverlay,
  Description,
  Title,
} from './styles';

type ItemProps = {
  item: ItemsData;
  onPress: () => void;
  isFocused: boolean;
};

const GalleryItemComponent = ({ item, onPress, isFocused }: ItemProps) => {
  console.log(`Item ${item.title} isFocused: ${isFocused}`);
  return (
    <TouchableOpacity onPress={onPress}>
      <GalleryItem>
      {/* Exibe a imagem do item */}
      <ItemImg source={item.image} />
  
      {/* Exibe o título do item */}
      <ItemText>{item.title}</ItemText>
    </GalleryItem>
    </TouchableOpacity>
  )
}
;
  
  

export function Gallery() {
  const [focusedIndex, setFocusedIndex] = useState(0);

  const handleFocusChange = useCallback((newIndex: number) => {
    setFocusedIndex(newIndex);
    console.log(newIndex);
  }, []);

  return (
    <Container>
      <HighlightContainer>
      <HighlightImg source={Data[focusedIndex].image}>
        <TextOverlay>
            <Title>{Data[focusedIndex].title}</Title>
            <Description>{Data[focusedIndex].description}</Description>
        </TextOverlay>
      </HighlightImg>
        <HighlightTitle>Favorites</HighlightTitle>
      </HighlightContainer>

      <GalleryContainer>
        <ScrollViewContainer
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {Data.map((item, index) => {
            console.log(`Item ${index} isFocused: ${index === focusedIndex}`)
            return(
              <GalleryItemComponent
              key={item.id}
              item={item}
              onPress={() => handleFocusChange(index)}
              isFocused={index === focusedIndex}
            />
          )
          })}
        </ScrollViewContainer>
      </GalleryContainer>
    </Container>
  );
}
