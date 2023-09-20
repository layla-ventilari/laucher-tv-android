import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme}) => theme.COLORS.GRAY_600 };
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme}) => theme.COLORS.LAVENDER_500 };
  font-size: 32px;
`;

export const SubTitle = styled.Text`
  color: ${({ theme}) => theme.COLORS.LAVENDER_700 };
  font-size: 32px;
`;