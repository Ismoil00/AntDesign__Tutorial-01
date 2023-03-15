import React from "react";
import { Form, Alert, Input, Button, message } from "antd";
import { useState } from "react";

const Forms = () => {
  const formStyle = {
    width: "400px",
    padding: "20px 20px 0 20px",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid lightblue",
    borderRadius: "10px",
  };
  const [alert, setAlert] = useState(false);

  const onFinish = (e) => {
    console.log(e);
    setTimeout(() => {
      message.error("Login failed");
      setAlert(true);
    }, 2000);
  };

  return (
    <>
      {alert && (
        <Alert
          type="error"
          message="Error"
          description="There was an error while logging!"
          closable
        />
      )}
      <Form style={formStyle} onFinish={onFinish}>
        <Form.Item style={{ width: "100%" }} label="User Name:" name="username">
          <Input
            placeholder="your user name!"
            type="text"
            required
            allowClear
          />
        </Form.Item>
        <Form.Item style={{ width: "100%" }} label="Password:" name="password">
          <Input.Password placeholder="your password!" required allowClear />
        </Form.Item>
        <Form.Item style={{ width: "100%" }}>
          <Button type="primary" htmlType="submit" block>
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Forms;
