import React from "react";
import { Language } from "./constrant";
import { DownOutlined } from "@ant-design/icons";
function Topmenu() {
  return (
    <div className="top-menu">
      <p className="text">Thông tin sản phẩm trong ngày 10/01/2024</p>
      <div className="language">
        <p className="label">{Language[1].label}</p>
        <DownOutlined className="icon" />
        <ul className="list">
          {Language.map((item, index) => (
            <li className="item" key={index}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Topmenu;
