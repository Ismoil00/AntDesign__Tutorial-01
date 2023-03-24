import React from "react";
import { Card, Button } from "antd";
import {
  FacebookFilled,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeFilled,
} from "@ant-design/icons";

const CardSec = () => {
  const cardStyle = {
    width: "30vw",
    textAlign: "center",
  };
  const CardDivStyle = {
    height: "150px",
    width: "100%",
    backgroundColor: "lightblue",
    color: "white",
    fontSize: "2rem",
    padding: "20px",
    fontFamily: "cursive",
  };
  return (
    <div>
      <Card
        title="Ant Design Card"
        extra={<Button type="primary">Learn more</Button>}
        hoverable
        style={cardStyle}
        actions={[
          <FacebookFilled
            style={{ color: "blue" }}
            onClick={(e) => console.log(e)}
          />,
          <TwitterOutlined style={{ color: "skyblue" }} />,
          <InstagramOutlined style={{ color: "purple" }} />,
          <YoutubeFilled style={{ color: "red" }} />,
          <p>TEXT</p>,
        ]}
      >
        <div style={CardDivStyle}>Ant Design Card</div>
        <p>This is the content of card</p>
      </Card>
    </div>
  );
};

export default CardSec;
