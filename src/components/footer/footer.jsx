import React from "react";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  ArrowUpOutlined,
} from "@ant-design/icons";
function footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="th-footer">
      <div className="left">
        <p>Copyright &copy; 2024 Fruit and Vegetable. All rights reserved.</p>
      </div>
      <div className="right">
        <div className="item">
          <FacebookOutlined className="icon" />
          <TwitterOutlined className="icon" />
          <LinkedinOutlined className="icon" />
        </div>
        <div className="scroll">
          <span className="title">Back to Top</span>
          <ArrowUpOutlined className="btn" onClick={scrollTop} />
        </div>
      </div>
    </div>
  );
}

export default footer;
