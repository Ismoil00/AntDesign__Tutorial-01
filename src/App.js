import { Button, Input, Select } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  PoweroffOutlined,
  PauseCircleTwoTone,
  LayoutFilled,
} from "@ant-design/icons";
import { useRef, useState } from "react";
import Password from "antd/es/input/Password";

function App() {
  const [loading, setLoading] = useState(false);
  const btnStyle = {
    height: "auto",
    padding: "0 50px",
    fontSize: "2rem",
  };
  const selectStyle = {
    width: "250px",
    textAlign: "center",
  };
  const fruits = ["Apple", "Banana", "Watermelon", "Melon", "Pear", "Peach"];

  const btnClicked = (e) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="App">
      {/* ////////////////////////////////////// */}
      {/* Buttons */}
      <Button
        type="primary"
        size="large"
        style={btnStyle}
        onClick={btnClicked}
        loading={loading}
        icon={<PoweroffOutlined />}
      >
        Button
      </Button>
      {/* ////////////////////////////////////// */}
      {/* Inputs */}
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
      {/* ////////////////////////////////////// */}
      {/* Selector */}
      <Select
        mode="multiple"
        maxTagCount={2}
        placeholder="Choose a fruit!"
        style={selectStyle}
        allowClear
      >
        {fruits.map((f, i) => {
          return (
            <Select.Option key={i} value={f}>
              {f}
            </Select.Option>
          );
        })}
      </Select>
    </div>
  );
}

export default App;
