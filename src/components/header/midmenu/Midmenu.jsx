import React from "react";
import Logo from "../../../img/logo-removeBG.png";
import { UserOutlined } from "@ant-design/icons";
function Midmenu() {
  return (
    <div className="mid-menu">
      <div className="left">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="center">
        <input
          className="input"
          placeholder="Bạn đang tìm kiếm sản phẩm nào?"
          type="text"
        />
        <button className="btn">Tìm Kiếm</button>
      </div>
      <div className="right">
        <UserOutlined />
        <p className="label">ThuanHaine</p>
      </div>
    </div>
  );
}

export default Midmenu;
