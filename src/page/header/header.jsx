import React from "react";
import { Bottommenu, Midmenu, Topmenu } from "../../components";

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
