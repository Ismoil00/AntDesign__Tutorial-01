import React, { useState, useEffect } from "react";
import { Steps, Form, Input, Button } from "antd";
import {
  LoginOutlined,
  ProfileOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

export default function MultiStepForm() {
  const style = {
    width: "80vw",
    margin: "40px 0",
  };
  const divStyle = {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  };

  const [current, setCurrent] = useState(0);
  const [stepOneDisable, setStepOneDisable] = useState(true);
  const [stepTwoDisable, setStepTwoDisable] = useState(true);
  const [loginValue, setLoginValue] = useState("");
  const [profileValue, setProfileValue] = useState("");
  const items = [
    {
      title: "Login",
      icon: <LoginOutlined />,
    },
    {
      title: "Profile",
      icon: <ProfileOutlined />,
      disabled: stepOneDisable,
    },
    {
      title: "Finish",
      icon: <CheckCircleOutlined />,
      disabled: stepTwoDisable,
    },
  ];

  useEffect(() => {
    setStepOneDisable(loginValue ? false : true);
    setStepTwoDisable(profileValue ? false : true);
  }, [loginValue, profileValue]);

  const LoginOnFinish = (val) => {
    setLoginValue(val);
    setCurrent(1);
  };

  const ProfileOnFinish = (val) => {
    setProfileValue(val);
    setCurrent(2);
  };

  const forms = [
    <LoginForm onFinish={LoginOnFinish} initialValues={loginValue} />,
    <ProfileForm onFinish={ProfileOnFinish} initialValues={profileValue} />,
    <FinishForm />,
  ];

  return (
    <div style={divStyle}>
      <Steps
        style={style}
        direction="horizontal"
        current={current}
        items={items}
        labelPlacement="vertical"
        onChange={setCurrent}
      />
      {forms[current]}
    </div>
  );
}

const LoginForm = ({ onFinish, initialValues }) => {
  const FormStyle = {
    width: "50vw",
    textAlign: "center",
  };

  return (
    <Form onFinish={onFinish} initialValues={initialValues} style={FormStyle}>
      <Form.Item
        label="Email"
        name={"email"}
        rules={[
          {
            required: true,
            type: "email",
            message: "Please, provide valid email address!",
          },
        ]}
      >
        <Input placeholder="Type your email" id={"email-second"} />
      </Form.Item>
      <Form.Item
        label="Password"
        name={"password"}
        rules={[
          {
            required: true,
            message: "Please, provide your password!",
          },
        ]}
      >
        <Input.Password placeholder="Type your password" id={"password-second"} />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Continue
      </Button>
    </Form>
  );
};

const ProfileForm = ({ onFinish, initialValues }) => {
  const FormStyle = {
    width: "50vw",
    textAlign: "center",
  };

  return (
    <Form onFinish={onFinish} initialValues={initialValues} style={FormStyle}>
      <Form.Item
        label="First Name"
        name={"name"}
        rules={[
          {
            required: true,
            message: "Please, provide your name!",
          },
        ]}
      >
        <Input placeholder="Type your name" id={"name"} />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name={"lastName"}
        rules={[
          {
            required: true,
            message: "Please, provide your last-name!",
          },
        ]}
      >
        <Input placeholder="Type your last-name" id={"lastName"} />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Continue
      </Button>
    </Form>
  );
};

const FinishForm = () => {
  return (
    <>
      <h1>Your Data was saved!</h1>
      <Button type="primary">Finish</Button>
    </>
  );
};
