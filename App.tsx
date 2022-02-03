import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import Navigation from "./navigations/Navigation";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <StatusBar animated={true} backgroundColor="rgba(29, 29, 29, 0.94)" barStyle="light-content" showHideTransition="slide" hidden={false} />
    </Provider>
  );
}
