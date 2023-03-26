import React, { useState } from "react";
import { Button, QRCode, Space } from "antd";
import { QrcodeOutlined } from "@ant-design/icons";

export default function QRCodes() {
  const status = ["loading", "active", "expired"];
  const [codeStatus, setCodeStatus] = useState("loading");
  const [num, setNum] = useState(0);

  const changeStatus = () => {
    if (num < 2) {
      setNum((p) => p + 1);
      setCodeStatus(status[num]);
    } else if (num === 2) {
      setNum(0);
      setCodeStatus(status[num]);
    }
  };

  return (
    <Space direction="vertical" align="center">
      <QRCode
        value="code with Ismoil"
        size={300}
        icon={<QrcodeOutlined />}
        iconSize={20}
        color="darkgreen"
        bordered={true}
        status={codeStatus}
        onRefresh={() => {
          console.log("On Refresh");
        }}
      />
      <Button type="primary" onClick={changeStatus}>
        Change the Status of QRCode
      </Button>
    </Space>
  );
}
