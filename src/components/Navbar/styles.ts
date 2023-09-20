import styled from 'styled-components/native';
import { theme } from '../../themes/theme';

export const NavbarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;

export const TabsContainer = styled.View`
  flex-direction: row;
`;

export const TabButton = styled.TouchableOpacity`
  padding: 8px 16px;
  margin-right: 16px;
  background-color: transparent;
  border-bottom-width: 2px;
  border-bottom-color: transparent;
`;

export const TabText = styled.Text`
  color: ${theme.COLORS.WHITE};
`;

export const FocusedTabButton = styled(TabButton)`
  border-bottom-color: ${theme.COLORS.GRAY_200};
`;
