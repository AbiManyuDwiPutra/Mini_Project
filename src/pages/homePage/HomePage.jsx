import { Button, Col, Row, Card } from "antd";
import React from "react";
import "./homePage.css";
import { Cover1, Mentoring, Offline, Online, Toga } from "../../assets/index";
import { Typography } from "antd";
import {
  ClockCircleOutlined,
  FileSearchOutlined,
  FileTextOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import { cardsData } from "./constants";

const HomePage = () => {
  const { Meta } = Card;
  const { Title } = Typography;
  return (
    <>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} xl={12}>
          <div className="homepage-title">
            <h1>Dapatkan Edukasi Melalui Remedial</h1>
            <p>
              Memberi Anda sistem pembelajaran online dan offline yang membantu
              pengetahuan Seni Anda
            </p>
            <Button>Get Started</Button>
          </div>
        </Col>
        <Col xs={24} xl={12}>
          <div className="img">
            <img src={Cover1} alt="Cover" />
          </div>
        </Col>
      </Row>
      <Row justify="center">
        <Col>
          <div className="murid">
            <img src={Toga} alt="" className="toga" />
            <p className="text">
              100+ <br /> Total Murid
            </p>
          </div>
        </Col>
        <Col>
          <div className="kursus">
            <img src={Mentoring} alt="" className="mentoring" />
            <p className="text2">
              100+ <br /> Total Murid
            </p>
          </div>
        </Col>
      </Row>
      {/* </div> */}
      <div className="produk">
        <h1>Produk kelas kami</h1>
        <p>
          Kami menyediakan kursus online dan offline yang dirancang untuk
          membantu Anda mengembangkan keahlian dan keterampilan baru
        </p>
      </div>
      <div className="card-product">
        <Row justify="center" gutter={[16]}>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <Card
              hoverable
              style={{ width: "100%", margin: "16px" }}
              cover={<img alt="example" src={Online} />}
              // title = "Online Class"
            >
              <Title>Online Class</Title>
              <hr />
              <div className="content-class">
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <ClockCircleOutlined />
                    {"  "}
                    Waktu Fleksibel
                  </li>
                  <li>
                    <FileTextOutlined />
                    {"  "}
                    Modul Online
                  </li>
                  <li>
                    <ProjectOutlined />
                    {"  "}
                    Kuis
                  </li>
                  <li>
                    <FileSearchOutlined />
                    {"  "}
                    Belajar Mandiri
                  </li>
                </ul>
                <h3>Rp.20.000</h3>
              </div>
              <Button style={{ marginTop: "16px" }}>Mulai</Button>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6} xl={6}>
            <Card
              hoverable
              style={{ width: "100%", margin: "16px" }}
              cover={<img alt="example" src={Offline} />}
            >
              <Title>Offline Class</Title>
              <hr />
              <div className="content-class">
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <ClockCircleOutlined />
                    {"  "}
                    Waktu Fleksibel
                  </li>
                  <li>
                    <FileTextOutlined />
                    {"  "}
                    Modul Online
                  </li>
                  <li>
                    <ProjectOutlined />
                    {"  "}
                    Kuis
                  </li>
                  <li>
                    <FileSearchOutlined />
                    {"  "}
                    Belajar Mandiri
                  </li>
                </ul>
                <h3>Rp.50.000</h3>
              </div>
              <Button style={{ marginTop: "16px", justify: "center" }}>
                Mulai
              </Button>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="artikel">
        <h1>Artikel Kami</h1>
        <Row gutter={[16, 16]} justify="center">
          {cardsData.map((card, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                hoverable
                style={{ width: 400, height: 750,  }}
                cover={<img alt={card.title} src={card.cover} />}
                actions={[
                  <Button type="primary" style={{ backgroundColor: "orange" }}>
                    Read More
                  </Button>,
                ]}
              >
                <Meta title={card.title} description={card.description} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <div>
        <h1>Apa Kata Mereka?</h1>
      </div>
    </>
  );
};

export default HomePage;
