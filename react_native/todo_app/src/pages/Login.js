import React, { useState, useContext } from "react";
import { Alert } from "react-native";
import { FormInput, FormButton, Container, Heading, Link } from "../components";
import { useHistory } from "react-router-native";
import axios from "axios";
import {
  Context as CurrentUserContext,
  actionTypes as CurrentUserActionTypes,
} from "../context/CurrentUser";
import { API_URL } from "../constants";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const CurrentUserDispatch = useContext(CurrentUserContext)[1];

  const login = async () => {
    try {
      const { data } = await axios.post(`${API_URL}/v1/user/login`, {
        email,
        password,
      });
      console.log(data);

      CurrentUserDispatch({
        type: CurrentUserActionTypes.SET_USER,
        user: data,
      });

      history.push("/home");
    } catch (e) {
      console.log(e);
      const msg = e.response
        ? e.response.data.error
        : "Something went wrong. Try again!";

      Alert.alert("Error", msg);
    }
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
