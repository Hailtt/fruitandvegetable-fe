import React from "react";
import { MENU_BOTTOM } from "./constrant";
import _ from "lodash";
function Bottommenu() {
  return (
    <div className="bottom-menu">
      <ul className="list">
        {MENU_BOTTOM.map((item, index) => (
          <li className="item" key={index}>
            {item.label}

            <ul className="sublist">
              {_.map(item.subs, (item, index) => (
                <li className="item" key={index}>
                  {item.label}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bottommenu;
