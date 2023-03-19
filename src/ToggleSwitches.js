import React from "react";
import { Switch, Space } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";

const ToggleSwitches = () => {
  return (
    <Space size={20} direction="vertical">
      <Switch
        disabled={true}
      />
      <Switch
        disabled={true}
        defaultChecked={true}
      />
      <Switch
        defaultChecked={false}
        checkedChildren="гирёнай"
        unCheckedChildren="куштагияй"
      />
      <Switch
        defaultChecked={true}
        checkedChildren="on"
        unCheckedChildren="off"
      />
      <Switch
        defaultChecked={true}
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
        onChange={(checked) => {
            console.log(checked)
        }}
      />
      <Switch
        defaultChecked={true}
        loading={true}
      />
      <Switch
        defaultChecked={false}
        loading={true}
      />
    </Space>
  );
};

export default ToggleSwitches;
