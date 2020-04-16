import styled from 'styled-components';

export const Image = styled.Image`
  width: 136px;
  height: 136px;
  background-color: #f4effc;
  background-color: ${(props) => props.bgcolor};
  border-radius: 68px;
`;

export const Text = styled.Text`
  color: ${(props) => props.color || '#a28fd0'};
  font-family: 'Roboto';
  text-transform: uppercase;
  font-size: 80px;
`;

export const Icon = styled.View`
  width: 136px;
  height: 136px;
  border-radius: 68px;
  background-color: #f4effc;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
