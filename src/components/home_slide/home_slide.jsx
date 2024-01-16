import React from "react";
import BackgroundImage from "../../img/background_home_1.png";
function HomeSlide() {
  return (
    <div className="th-homeslide">
      <div className="container">
        <img className="background" alt="background" src={BackgroundImage} />
      </div>
    </div>
  );
}

export default HomeSlide;
