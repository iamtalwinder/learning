import React from "react";
import { Login, Register, Home } from "./pages";
import { NativeRouter, Route } from "react-router-native";

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/home" component={Home} />
    </NativeRouter>
  );
}
