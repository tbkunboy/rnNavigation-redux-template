import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import { createStore } from "redux";

import * as ScreenRegister from "./";
import rootReducer from "../redux/reducers";
import _ from "lodash";

let store = createStore(rootReducer);
const reduxStoreWrapper = (Component, ...props) => {
  return class App extends React.Component {
    render() {
      return (
        <Provider store={store}>
          <Component />
        </Provider>
      );
    }
  };
};
export const registerScreens = () => {
  _.map(ScreenRegister, (v, k) => {
    Navigation.registerComponent(k, () => reduxStoreWrapper(v));
  });
};
