import React from "react";
import { Layout, Row } from "antd";
import { Link } from "react-router-dom";
// import { Navbar } from "../../../assets/index";
import "./headerComponent.css";
import { useState } from "react";
import { Menu } from "antd";
import { MENU_ITEM } from "../constans";

const HeaderComponents = () => {
  const { Header } = Layout;
  const path = window.location.pathname;
  const [current, setCurrent] = useState(path);
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          backgroundColor: "white",
          height: "auto",
          paddingTop: "18px",
          // boxShadow: "0px 0px 3px 0px ",
        }}
      >
        <Row justify="space-between">
          <Link to="/">
            <div
              className="logo"
              style={{
                float: "left",
                width: 120,
                height: 31,
                margin: "16px 24px 16px 0",
                background: "rgba(255, 255, 255, 0.2)",
              }}
              onClick={() => setCurrent("")}
            />
            EduArt
          </Link>

          <Menu
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={MENU_ITEM}
            disabledOverflow
            onClick={onClick}
            selectedKeys={[current]}
          />
        </Row>
      </Header>
      {/* <div className="header-layout">
          <div className="headerWrapper">
            <Link to="/">
              <div
                style={{
                
                  float: "left",
                  width: 120,
                  height: 31,
                  margin: "16px 24px 16px 0",
                  background: "rgba(255, 255, 255, 0.2)",
                }}
              />
              EduArt
            </Link>
            <div className="menu">
              <Link to="/course" className="link">
                Course
              </Link>
              <Link className="link">Product</Link>
              <Link className="link">Our Culture</Link>
              <Link to="/kamis" className="link">
                Kamis
              </Link>
              <Link className="link">Careers</Link>
            </div>
            <div className="button">
              <Button>Admin</Button>
            </div>
          </div>
        </div> */}
    </>
  );
};

export default HeaderComponents;
