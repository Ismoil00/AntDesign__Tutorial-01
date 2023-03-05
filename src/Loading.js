import React from "react";
import {
  UserOutlined,
  PoweroffOutlined,
  PauseCircleTwoTone,
  LayoutFilled,
} from "@ant-design/icons";
import { Button, Input, Spin } from "antd";
import { useState } from "react";

function Loading() {
  const btnStyle = {
    height: "auto",
    padding: "0 50px",
    fontSize: "2rem",
  };

  const [loading, setLoading] = useState(false);

  const LoadingFunc = (e) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>Loading Section</h1>
      <Spin spinning={loading}>Loading Text</Spin>

      <Button
        type="primary"
        size="large"
        style={btnStyle}
        onClick={LoadingFunc}
        loading={loading}
        icon={<PoweroffOutlined />}
      >
        Loading
      </Button>

      <Input.Search
        placeholder="type your name"
        maxLength={50}
        type="text"
        prefix={
          <>
            <UserOutlined />
            <PauseCircleTwoTone />
          </>
        }
        suffix={<LayoutFilled />}
        allowClear
        disabled={loading}
      />
    </>
  );
}

export default Loading;
