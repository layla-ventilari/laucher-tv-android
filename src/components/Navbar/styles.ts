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
  padding: 24px;
  background-color: transparent;
`;



export const FocusedTabButton = styled(TabButton)`
   ${(props: any) =>
    props.focused &&
    `
    background-color: ${theme.COLORS.LAVENDER_500}; 
  `}
`;

export const TabLabel = styled.Text<TabLabelProps>`
    color: ${(props) => (props.focused ? theme.COLORS.GRAY_100 : theme.COLORS.GRAY_200)};
    font-size: ${(props) => (props.focused ? '36px' : '32px')}; 
    opacity: ${(props) => (props.focused ? '1' : '0.7')}; 
    font-weight: ${(props) => (props.focused ? 'bold' : 'normal')};
`;