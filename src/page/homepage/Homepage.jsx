import React from "react";
import { Banner, Home_Slide, Newproductslide } from "../../components";
import { RightOutlined } from "@ant-design/icons";
function Homepage() {
  return (
    <div className="th-homepage">
      <Banner />
      <section className="th-container newproductslide">
        <div className="header">
          <h2 className="title">Sản Phẩm Mới</h2>

          <div className="viewmore">
            <a className="link" href="#">
              Xem thêm
            </a>
            <RightOutlined className="icon" />
          </div>
        </div>
        <Newproductslide />
      </section>
    </div>
  );
}

export default Homepage;
