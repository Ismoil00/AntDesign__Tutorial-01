import React from "react";
import { Button, Collapse } from "antd";
import {
  FolderOpenOutlined,
  CaretRightFilled,
  ShopOutlined,
} from "@ant-design/icons";

const { Panel } = Collapse;

const CollapseExpand = () => {
  return (
    <>
      <Collapse
        accordion={true}
        expandIcon={({ isActive }) => {
          return <CaretRightFilled rotate={isActive ? 90 : 0} />;
        }}
        expandIconPosition="end"
        defaultActiveKey={[3, 4]}
        bordered={true}
        ghost={false}
      >
        <Panel
          key={1}
          header={<div>This is a Panel 1</div>}
          extra={<Button>Download</Button>}
        >
          This is the content of Panel 1
        </Panel>
        <Panel
          key={2}
          header="This is a Panel 2"
          extra={<FolderOpenOutlined />}
        >
          This is the content of Panel 2
        </Panel>
        <Panel key={3} header="This is a Panel 3" extra={<ShopOutlined />}>
          This is the content of Panel 3
        </Panel>
        <Panel key={4} header="This is a Panel 4" collapsible="disabled">
          This is the content of Panel 4
        </Panel>
      </Collapse>
    </>
  );
};

export default CollapseExpand;
