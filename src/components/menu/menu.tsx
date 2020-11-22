import React, { FunctionComponent } from "react";
import Styles from "./menu.styles";
import home from "../../assets/images/home.svg";

const Menu: FunctionComponent = () => (
  <Styles.Container>
    <Styles.MenuItem.Container>
      <Styles.MenuItem.Icon src={home} alt="Accueil" />
      <Styles.MenuItem.Text>Accueil</Styles.MenuItem.Text>
    </Styles.MenuItem.Container>
  </Styles.Container>
);

export default Menu;
