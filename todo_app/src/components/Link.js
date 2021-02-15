import React from "react";
import styled from "styled-components/native";
import { Link as RouterLink } from "react-router-native";

const Button = styled.TouchableOpacity`
  background-color: none;
  padding: 8px;
  margin-top: 15px;
  border-radius: 20px;
`;

const Text = styled.Text`
  color: #0095f6;
  text-align: center;
`;

export default function Link({ children, to }) {
  return (
    <Button as={RouterLink} to={to}>
      <Text>{children}</Text>
    </Button>
  );
}
