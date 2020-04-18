import styled from 'styled-components/native';

export const Image = styled.Image`
  width: ${(props) => (props.style ? props.style.size : 136)}px;
  height: ${(props) => (props.style ? props.style.size : 136)}px;
  background-color: #f4effc;
  border-radius: 68px;
  margin: 10px -10px 0 10px;
`;

export const Text = styled.Text`
  color: ${(props) => props.color};
  font-family: 'Roboto';
  text-transform: uppercase;
  font-size: ${(props) => (props.style ? props.style.font : 60)}px;
`;

export const Icon = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  background-color: ${(props) => props.bgcolor};
  width: ${(props) => (props.style ? props.style.size : 136)}px;
  height: ${(props) => (props.style ? props.style.size : 136)}px;
  border-radius: 68px;
`;
