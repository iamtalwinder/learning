import React from "react";
import { Login, Register, Home } from "./src/pages";
import { NativeRouter, Route } from "react-router-native";
import { ContextProvider as CurrentUserConstextProvider } from "./src/context/CurrentUser";

export default function App() {
  return (
    <NativeRouter>
      <Route exact path="/register" component={Register} />
      <CurrentUserConstextProvider>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
      </CurrentUserConstextProvider>
    </NativeRouter>
  );
}
