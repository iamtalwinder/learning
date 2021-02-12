import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setText(text)}
        value={text}
        placeholder="Email"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: "10px",
  },

  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: "20px",
    padding: "5px",
    outline: "none",
  },
});
