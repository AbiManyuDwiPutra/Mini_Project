import React from "react";
import { Layout } from "antd";
import HeaderComponent from "./Header/HeaderComponents";
import FooterComponent from "./Footer/FooterComponent";

const LayoutComponent = ({ children }) => {
  const { Content } = Layout;
  return (
    <>
      <HeaderComponent />
      <Content style={{}}>
        <div
          className="site-layout-content"
          style={{
            background: "#",
          }}
        >
          {children}
        </div>
      </Content>
      <FooterComponent />
    </>
  );
};

export default LayoutComponent;