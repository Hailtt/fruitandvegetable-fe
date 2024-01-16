import React from "react";
import Topmenu from "./topmenu/Topmenu";
import Midmenu from "./midmenu/Midmenu";
import Bottommenu from "./bottommenu/Bottommenu";

function Header() {
  return (
    <div className="th-header">
      <div className="th-container">
        <Topmenu />
        <Midmenu />
        <Bottommenu />
      </div>
    </div>
  );
}

export default Header;
