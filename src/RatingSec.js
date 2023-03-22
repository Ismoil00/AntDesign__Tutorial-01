import React from "react";
import { Rate } from "antd";
import {
  HeartFilled,
  SmileOutlined,
  MehOutlined,
  FrownOutlined,
} from "@ant-design/icons";

const smileRating = [<FrownOutlined />, <MehOutlined />, <SmileOutlined />];

const RatingSec = () => {
  const divStyle = {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  };

  return (
    <div style={divStyle}>
      <Rate defaultValue={2} count={3} />
      <Rate defaultValue={2} allowHalf allowClear={false} count={8} />
      <Rate count={6} style={{ color: "green" }} defaultValue={3} />
      <Rate style={{ color: "blue" }} defaultValue={2} character="I+M" />
      <Rate
        style={{ color: "red" }}
        defaultValue={2}
        character={<HeartFilled />}
        allowHalf
        tooltips={["Really Worse", "Bad", "Normal", "Good", "Excellent"]}
      />
      <Rate
        disabled
        defaultValue={4}
        style={{ color: "darkmagenta" }}
        tooltips={["Readonly", "Readonly", "Readonly", "Readonly", "Readonly"]}
      />
      <Rate
        defaultValue={3}
        count={3}
        style={{ color: "goldenrod" }}
        character={({ index }) => {
          return smileRating[index];
        }}
        onChange={(val) => {
          console.log(val);
        }}
      />
    </div>
  );
};

export default RatingSec;
