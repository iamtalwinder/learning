import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder="E-mail"
      />

      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder="Password"
      />

      <TouchableOpacity style={styles.login}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
  },

  heading: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 40,
  },

  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 20,
    padding: 8,
    marginTop: 15,
  },

  login: {
    backgroundColor: "#e02914",
    marginTop: 15,
    padding: 8,
    borderRadius: 20,
  },

  loginText: {
    color: "white",
    textAlign: "center",
  },
});
