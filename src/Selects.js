import React from "react";
import { Select } from "antd";

const Selects = () => {
  const selectStyle = {
    width: "250px",
    textAlign: "center",
    cursor: "pointer",
  };
  const fruits = ["Apple", "Banana", "Watermelon", "Melon", "Pear", "Peach"];
  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>Selects Section</h1>
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
    </>
  );
};

export default Selects;
