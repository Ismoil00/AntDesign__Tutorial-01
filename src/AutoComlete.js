import React from "react";
import { AutoComplete } from "antd";

const AutoComlete = () => {
  const options = [
    {
      label: "One",
      value: "One",
    },
    {
      label: "Two",
      value: "Two",
    },
    {
      label: "Three",
      value: "Three",
    },
    {
      label: "Four",
      value: "Four",
    },
    {
      label: "Five",
      value: "Five",
    },
  ];

  return (
    <div>
      <AutoComplete
        style={{ width: 300 }}
        placeholder="Type here to auto-complete"
        options={options}
        filterOption={true}
        onSelect={(val) => {
          console.log("The selected value is: ",val);
        }}
        onSearch={(val) => {
          console.log("The searched text is: ",val);
        }}
      />
    </div>
  );
};

export default AutoComlete;
