import {
  Button,
  Form,
  Input,
  Typography,
  FloatButton,
  Divider,
  message,
} from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  GoogleOutlined,
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

export default function LoginPage({ setShowApp }) {
  const navigate = useNavigate();

  const goBack = () => {
    setShowApp(true);
    navigate("/");
  };

  const goLogin = () => {
    message.success("Successful Login");
  };

  return (
    <div className="loginPage">
      <FloatButton
        description="Back"
        onClick={goBack}
        type="default"
        style={{ left: 50, width: 80, height: 80, fontWeight: "bold" }}
      />
      <Form className="loginForm" onFinish={goLogin}>
        <Typography.Title>Welcome back!</Typography.Title>
        <Form.Item
          label="Email"
          name={"loginName"}
          rules={[
            {
              required: true,
              type: "email",
              message: "Please, enter valid email!",
            },
          ]}
        >
          <Input placeholder="Enter your name!" />
        </Form.Item>
        <Form.Item
          label="Password"
          name={"passwordName"}
          rules={[
            {
              required: true,
              message: "Please, provide your password!",
            },
          ]}
        >
          <Input.Password placeholder="Enter your password!" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block>
          Login
        </Button>
        <Divider style={{ borderColor: "black" }}>or Login with</Divider>
        <div className="socialLogin">
          <GoogleOutlined onClick={goLogin} />
          <FacebookOutlined onClick={goLogin} style={{ color: "blue" }} />
          <TwitterOutlined
            onClick={goLogin}
            style={{ color: "rgb(61, 184, 255)" }}
          />
          <InstagramOutlined onClick={goLogin} style={{ color: "red" }} />
        </div>
      </Form>
    </div>
  );
}
