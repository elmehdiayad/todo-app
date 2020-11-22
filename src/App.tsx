import React, { FunctionComponent } from "react";
import Styles from "./App.styles";
import Header from "./components/header/header";
import Home from "./components/home/home";
import Menu from "./components/menu/menu";

const App: FunctionComponent = () => (
  <>
    <Header />
    <Styles.Body>
      <Menu />
      <Home />
    </Styles.Body>
  </>
);
export default App;
