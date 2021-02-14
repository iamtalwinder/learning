import React from "react";
import styled from "styled-components/native";

const Button = styled.TouchableOpacity`
  background-color: #e02914;
  margin-top: 15px;
  padding: 8px;
  border-radius: 20px;
`;

const Text = styled.Text`
  color: white;
  text-align: center;
`;

export default function FormButton({ children, onPress }) {
  return (
    <Button onPress={onPress}>
      <Text>{children}</Text>
    </Button>
  );
}
