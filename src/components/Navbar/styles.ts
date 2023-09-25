import styled from 'styled-components/native';
import { theme } from '../../themes/theme';


interface TabLabelProps {
  focused: boolean;
}

export const NavbarContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 32px 48px;
`;

export const TabsContainer = styled.View`
  flex-direction: row;
  
`;

export const TabButton = styled.TouchableOpacity`
  padding: 16px;
  background-color: transparent;
  //border-bottom-width: 2px;
  //border-bottom-color: transparent;
`;

export const FocusedTabButton = styled(TabButton)`
  border-bottom-color: ${theme.COLORS.GRAY_200};
`;

export const TabLabel = styled.Text<TabLabelProps>`
  color: ${props => (props.focused ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_200)};
  font-size: 32px;
  font-weight: ${props => (props.focused ? 'bold' : 'normal')};
`;