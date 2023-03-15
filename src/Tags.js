import React from "react";
import { Tag, Space, Button } from "antd";
import { TagFilled } from "@ant-design/icons";

const Tags = () => {
  const TagStyle = {
    fontSize: "1.5rem",
    padding: "5px 10px",
    width: "auto",
    height: "auto",
  };
  const SpaceStyle = {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <Space direction="vertical" size={2} style={SpaceStyle}>
      <Tag color="gold" style={TagStyle}>
        <TagFilled /> Filled-Tag
      </Tag>
      <Tag
        style={TagStyle}
        color={"green"}
        closable
        onClose={() => {
          alert("Tag2 is closed!");
        }}
        closeIcon={
          <Button danger type="text" style={{ fontSize: "1.5rem " }}>
            X
          </Button>
        }
      >
        Tag2
      </Tag>
    </Space>
  );
};

export default Tags;
