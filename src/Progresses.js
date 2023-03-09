import React from "react";
import { Progress } from "antd";

const Progresses = () => {
  return (
    <>
      <Progress
        style={{ marginTop: "20px" }}
        percent="40"
        strokeWidth={20}
        status="active"
      />
      <Progress
        style={{ marginTop: "20px" }}
        percent="40"
        strokeWidth={10}
        status="normal"
        steps={50}
      />
      <Progress
        style={{ marginTop: "20px" }}
        percent="40"
        type="circle"
        strokeColor="green"
        status="success"
      />
      <Progress
        style={{ marginTop: "20px" }}
        percent="40"
        type="dashboard"
        strokeColor="red"
        strokeWidth={10}
        status="exception"
      />
    </>
  );
};

export default Progresses;
