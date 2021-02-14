import React, { useState } from "react";
import { FormInput, FormButton, Container, Heading } from "../components";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
      />

      <FormButton>Login</FormButton>
    </Container>
  );
}
