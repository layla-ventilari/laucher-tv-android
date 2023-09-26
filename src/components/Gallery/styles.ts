import styled from 'styled-components/native';
import { theme } from '../../themes/theme';

export const Container = styled.View`
  flex: 1;
  padding: 48px;
  margin: 48px;
  align-items: center;
`;

export const HighlightContainer = styled.View`
  aspect-ratio: 16/9;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 48px;
  align-items: center;
  justify-content: center;
  border: 2px solid ${theme.COLORS.LAVENDER_700};
`;

export const HighlightImg = styled.ImageBackground`
  width: 100%;
  height: 100%; /* Defina uma altura fixa para o destaque */
  position: relative;
`;

export const TextOverlay = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 8px 16px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;


export const Title = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-size: 24px;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-size: 16px;
`;

export const HighlightTitle = styled.Text`
  position: absolute;
  top: 8px;
  left: 16px;
  color: ${theme.COLORS.WHITE};
  background-color: ${theme.COLORS.GRAY_700};
  padding: 4px 8px;
  border-radius: 4px;
  z-index: 1;
  font-size: 24px;
`;

export const GalleryContainer = styled.View`
  margin-bottom: 96px;
  align-items: center;
`;

export const ScrollViewContainer = styled.ScrollView`
  margin-bottom: 16px;
  /* Adicione overflow-x para lidar com possíveis problemas de layout */
  overflow-x: scroll;
`;

export const GalleryItem = styled.View<{ isFocused: boolean }>`
  border-radius: 8px;
  margin-right: 16px;
  width: 200px; /* Largura fixa */
  overflow: hidden; /* Evita que o texto ultrapasse o card */
  background-color: ${({ isFocused }) =>
    isFocused ? theme.COLORS.LAVENDER_700 : theme.COLORS.GRAY_300}; /* Altere as cores de acordo com o foco */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ItemImg = styled.Image`
  width: 100%;
  height: 80px; /* Defina uma altura fixa para a imagem */
`;

export const ItemText = styled.Text`
  color: ${theme.COLORS.WHITE};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  /* Adicione z-index para garantir que o texto esteja acima da imagem */
  z-index: 1;
`;
