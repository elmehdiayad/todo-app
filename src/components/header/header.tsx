import React, { FunctionComponent } from "react";
import Styles from "./header.styles";
import logo from "../../assets/images/logo.svg";

const Header: FunctionComponent = () => (
  <Styles.Container>
    <Styles.Logo src={logo} alt="Nimbleways" />
  </Styles.Container>
);

export default Header;
