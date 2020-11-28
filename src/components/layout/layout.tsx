import React, { FunctionComponent } from "react";
import Header from "../header/header";
import Styles from "./layout.styles";
import Menu from "../menu/menu";

const Layout: FunctionComponent = ({ children }) => (
  <>
    <Header />
    <Styles.Body>
      <Menu />
      {children}
    </Styles.Body>
  </>
);

export default Layout;
