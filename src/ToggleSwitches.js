import React, { useState } from "react";
import { Switch, Space, Popconfirm } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  QuestionCircleFilled,
} from "@ant-design/icons";

export default function ToggleSwitches() {
  return (
    <Space size={20} direction="vertical" align="center">
      <Switch disabled={true} />
      <Switch disabled={true} defaultChecked={true} />
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
          console.log(checked);
        }}
      />
      <Switch defaultChecked={true} loading={true} />
      <Switch defaultChecked={false} loading={true} />
      <ConfirmSwitch />
    </Space>
  );
}

const ConfirmSwitch = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Popconfirm
      title="Alert!!!"
      description="Are you sure to change the switch state?"
      okText="Ова"
      cancelText="Нея"
      icon={<QuestionCircleFilled />}
      onConfirm={() => {
        setChecked((prev) => !prev);
      }}
      disabled={checked}
    >
      <Space direction="vertical" size={15} align="center">
        <h3>This Switch is using Confirmation Popup!</h3>
        <Switch
          checked={checked}
          onClick={() => {
            if (checked) {
              setChecked(false);
            }
          }}
        />
      </Space>
    </Popconfirm>
  );
};
