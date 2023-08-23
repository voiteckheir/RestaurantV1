import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Chase The New Flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante
        ligula, rutrum vitae velit vitae, pharetra molestie diam. Duis
        condimentum pretium ornare. Nulla eu libero vitae ante maximus vehicula.
        Sed imperdiet purus in posuere laoreet. Nunc suscipit iaculis turpis ac
        gravida.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
