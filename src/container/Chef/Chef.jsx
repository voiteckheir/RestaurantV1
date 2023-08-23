import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app_wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse ">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant"> What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et. Adipiscing tempus ullamcorper
            lobortis odio tellus arcu volutpat.
          </p>
          <p className="p__opensans">
            Quis pharetra adipiscing ultrices vulputate posuere tristique. In
            sed odio nec aliquet eu proin mauris et. Adipiscing tempus
            ullamcorper lobortis odio tellus arcu volutpat.
          </p>
        </div>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Lupo</p>
        <p className="p__opensans"> Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
