import React, { useState } from "react";
import {
  Button,
  Input,
  ConfigProvider,
  Select,
  Checkbox,
  Radio,
  Space,
  Switch,
  theme,
} from "antd";

export default function DynamicTheme() {
  const [curTheme, setCurTheme] = useState("light");
  const LightTheme = {
    colorPrimary: "green",
    colorTextBase: "green",
    colorTextLightSolid: "black",
  };
  const DarkTheme = {
    colorPrimary: "black",
    colorTextBase: "black",
    colorTextLightSolid: "white",
    fontFamily: "cursive",
  };

  return (
    <ConfigProvider
      theme={{
        token: curTheme === "light" ? LightTheme : DarkTheme,
        components: {
          Checkbox: {
            colorPrimary: "orange",
          },
        },
      }}
    >
      <Space direction="vertical" size={20} align="center">
        <Radio.Group
          value={curTheme}
          onChange={(e) => {
            setCurTheme(e.target.value);
          }}
        >
          <Radio value={"light"}>Light</Radio>
          <Radio value={"dark"}>Dark</Radio>
        </Radio.Group>
        <h3>With Theme</h3>
        <Select
          placeholder="Select"
          options={[
            {
              label: "Option1",
              value: "Option1",
            },
            {
              label: "Option2",
              value: "Option2",
            },
          ]}
        />
        <Button type="primary">Theme Button</Button>
        <Checkbox>Checkbox</Checkbox>
        <Radio>Radio</Radio>
        <Switch unCheckedChildren="off" checkedChildren="on" />
        <Input placeholder="Type here..." />
        <UseTokenTheme />
        <ConfigProvider
          theme={{
            inherit: false,
          }}
        >
          <Space direction="vertical" size={20} align="center">
            <h3>Without Theme</h3>
            <Button type="primary">Button</Button>
            <Checkbox>Checkbox </Checkbox>
            <Radio>Radio</Radio>
          </Space>
        </ConfigProvider>
        <ConfigProvider
          theme={{
            inherit: false,
            token: {
              colorPrimary: "purple",
              colorTextBase: "purple",
            },
          }}
        >
          <Space direction="vertical" size={20} align="center">
            <h3>Without Child Theme</h3>
            <Button type="primary">Button</Button>
            <Checkbox>Checkbox </Checkbox>
            <Radio>Radio</Radio>
          </Space>
        </ConfigProvider>
      </Space>
    </ConfigProvider>
  );
}

const UseTokenTheme = () => {
  const { token } = theme.useToken();
  return (
    <h2 style={{ color: token.colorPrimary }}>Text is using Theme Token</h2>
  );
};
