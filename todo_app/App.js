import React from "react";
import Login from "./pages/login";
import { NativeRouter, Route } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={Login} />
    </NativeRouter>
  );
}
