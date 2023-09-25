import styled from 'styled-components/native';
import { theme } from '../../themes/theme';

export const ClockContainer = styled.View`
  padding: 10px 50px;
  border-radius: 5px;
  border: 2px solid ${theme.COLORS.LAVENDER_700};
`;

export const ClockText = styled.Text`
  color: white; 
  font-size: 24px;
`;
