import React from "react";
import { Avatar as AVatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Avatar = () => {
  const Style1 = {
    backgroundColor: "black",
    color: "white",
    width: "50px",
    height: "50px",
    fontSize: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const Style2 = {
    width: "50px",
    height: "50px",
  };
  return (
    <>
      <AVatar shape="square" style={Style1}>
        S A
      </AVatar>
      <AVatar shape="circle" style={Style1}>
        C A
      </AVatar>
      <AVatar src={"./favicon.ico"} style={Style2} />
      <AVatar icon={<UserOutlined />} />

      <AVatar.Group
        maxCount={4}
        maxPopoverTrigger="click"
        maxPopoverPlacement="bottom"
        maxStyle={{cursor: "pointer"}}
      >
        <AVatar shape="square" src={"./logo512.png"} />
        <AVatar shape="circle" src={"./favicon.ico"} />
        <AVatar src={"./logo192.png"} />
        <AVatar icon={<UserOutlined />} />
        <AVatar shape="square" src={"./logo512.png"} />
        <AVatar shape="circle" src={"./favicon.ico"} />
        <AVatar src={"./logo192.png"} />
        <AVatar icon={<UserOutlined />} />
      </AVatar.Group>
    </>
  );
};

export default Avatar;
