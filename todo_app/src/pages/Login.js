import React, { useState } from "react";
import { FormInput, FormButton, Container, Heading, Link } from "../components";
import { useHistory } from "react-router-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const login = () => {
    history.push("/home");
  };

  return (
    <Container>
      <Heading>Login</Heading>
      <FormInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="E-mail"
      />

      <FormInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />

      <Link to="/register">Don't have an account? Register</Link>

      <FormButton onPress={login}>Login</FormButton>
    </Container>
  );
}
