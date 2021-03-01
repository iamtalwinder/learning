import React, { useState } from "react";
import { FormInput, FormButton, Container, Heading, Link } from "../components";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container>
      <Heading>Register</Heading>
      <FormInput
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder="Name"
      />

      <FormInput
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="E-mail"
      />

      <FormInput
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
      />

      <Link to="/">Already have an account? Login</Link>

      <FormButton>Register</FormButton>
    </Container>
  );
}
