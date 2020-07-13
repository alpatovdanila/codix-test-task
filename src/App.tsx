import React from "react";
import "./styles/global.scss";
import { Provider } from "react-redux";
import store from "./store";
import { Index } from "./pages/index";

function App() {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
}

export default App;
