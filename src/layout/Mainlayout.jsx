import React from "react";
import { Footer, Header } from "../page";

const Mainlayout = ({ children }) => {
  return (
    <div className="th-mainlayout">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Mainlayout;
