import styled from 'styled-components/native';
import { theme } from '../../themes/theme';

export const Container = styled.View`
  flex: 1;
 
  padding: 16px; 
`;

export const HighlightTitle = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-size: ${theme.FONT_SIZE.LG}px;
  font-weight: ${theme.FONT_FAMILY.BOLD};
  margin-bottom: 16px;
`;

export const Gallery = styled.FlatList`
  flex-grow: 0;
  flex-shrink: 0;
  height: auto; 
  flex-direction: row;
`;

export const HighlightItem = styled.View`
  width: 100%;
  padding: 16px;
  background-color: ${theme.COLORS.GRAY_600}; 
  border-radius: 8px; 
`;

export const ItemImg = styled.Image`
  width: 100%;
  height: 300px;
  aspect-ratio: 2/3; 
  border-radius: 4px;
  border: 2px solid  ${theme.COLORS.LAVENDER_500};
`;

export const HighlightImg = styled.Image`
  width: 100%;
  height: 500px;
  aspect-ratio: 2/3; 
  border-radius: 16px;
  border: 2px solid  ${theme.COLORS.LAVENDER_500};
`;


export const ItemTitle = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-size: ${theme.FONT_SIZE.MD}px;
  margin-top: 16px;
 
`;
