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

// Define the prop types for an individual gallery item.
type ItemProps = {
  item: ItemsData;    // Represents the data for a single item.
  onPress: () => void; // Callback function when an item is pressed.
  isFocused: boolean; // Indicates if the item is currently focused.
};

// Component for rendering an individual gallery item.
const GalleryItemComponent = ({ item, onPress, isFocused }: ItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <GalleryItem>
        {/* Display the item's image */}
        <ItemImg source={item.image} />
        
        {/* Display the item's title */}
        <ItemText>{item.title}</ItemText>
      </GalleryItem>
    </TouchableOpacity>
  );
};

// Main Gallery component
export function Gallery() {
  const [focusedIndex, setFocusedIndex] = useState(0);

  // Callback function to handle changes in focus
  const handleFocusChange = useCallback((newIndex: number) => {
    setFocusedIndex(newIndex);
  }, []);

  return (
    <Container>
      <HighlightContainer>
        <HighlightImg source={Data[focusedIndex].image}>
          <TextOverlay>
            {/* Display the title and description of the currently highlighted item */}
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
          {/* Map through the data and render each gallery item */}
          {Data.map((item, index) => {
            return (
              <GalleryItemComponent
                key={item.id}
                item={item}
                onPress={() => handleFocusChange(index)}
                isFocused={index === focusedIndex}
              />
            );
          })}
        </ScrollViewContainer>
      </GalleryContainer>
    </Container>
  );
}
