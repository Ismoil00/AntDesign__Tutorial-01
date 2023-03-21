import React from "react";
import { Form, Alert, Input, Button, message } from "antd";
import { useState } from "react";

export default function Forms() {
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
      <CustomForm />
    </>
  );
}

const CustomForm = () => {
  const formStyle = {
    width: "400px",
    padding: "20px",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid lightblue",
    borderRadius: "10px",
  };

  const onFinish = (val) => {
    console.log(val);
  };

  const onFailedFinished = (err) => {
    console.log(err);
  };

  return (
    <Form
      style={formStyle}
      onFinish={onFinish}
      onFinishFailed={onFailedFinished}
      initialValues={{playerScores: 0, adminEmail: "admin@gmail.com"}}
    >
      <Form.Item
        name={"playerName"}
        label="Player Name"
        rules={[
          {
            required: true,
            message: "Please, provide 'Player Name!'",
          },
        ]}
        placeholder="type player name"
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={"playerScores"}
        label="Player Scores"
        rules={[{
          validator(rule, value) {
            return new Promise((resolve, reject) => {
              if (value >= 0) {
                resolve()
              } else {
                reject("The Score value should be greater zero!")
              }
            })
          }
        }]}
      >
        <PlayerScores />
      </Form.Item>
      <Form.Item
        name={"adminEmail"}
        label="Admin Email"
        rules={[
          {
            type: "email",
            message: "It is not a valid email!"
          },
          {
          validator(rule, value) {
            return new Promise((resolve, reject) => {
              if (String(value).startsWith("admin")) {
                resolve()
              } else {
                reject("This is not Admin Email!")
              }
            })
          }
        }]}
      >
        <Input />
      </Form.Item>
      <Button htmlType="submit" type="primary">
        Submit
      </Button>
    </Form>
  );
};

const PlayerScores = ({ value, onChange }) => {
  return (
    <>
      <Button
        onClick={() => {
          onChange(value - 1);
        }}
      >
        -
      </Button>
      <span>{value}</span>
      <Button
        onClick={() => {
          onChange(value + 1);
        }}
      >
        +
      </Button>
    </>
  );
};
