import React, { useState } from "react";
import Logo from "../../../img/logo-removeBG.png";
import { Button, Drawer, Radio, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { MENU_BOTTOM } from "../bottommenu/constrant";
import _ from "lodash";
function Midmenu() {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <div className="mid-menu">
      <Drawer
        title="Fruit and Vegetable"
        className="title"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <ul className="list">
          {MENU_BOTTOM.map((item, index) => (
            <li className="item" key={index}>
              {item.label}
            </li>
          ))}
        </ul>
      </Drawer>
      <button className="submenu" onClick={showDrawer}>
        <span className="icon"></span>
        <span className="icon"></span>
        <span className="icon"></span>
      </button>
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
