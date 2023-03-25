import React from "react";
import { FloatButton } from "antd";
import {
  MessageFilled,
  PlusOutlined,
  UserAddOutlined,
  FileAddOutlined,
} from "@ant-design/icons";

const FloatButtons = () => {
  return (
    <div>
      <FloatButton
        icon={<MessageFilled />}
        shape="circle"
        type="primary"
        // description="sms"
        tooltip="Message us!"
      />
      <FloatButton.Group
        icon={<PlusOutlined />}
        shape="square"
        style={{ right: 80 }}
        trigger="hover"
      >
        <FloatButton icon={<UserAddOutlined />} tooltip="add a user" />
        <FloatButton
          icon={<FileAddOutlined />}
          tooltip="add a file"
          type="primary"
        />
      </FloatButton.Group>
    </div>
  );
};

export default FloatButtons;
