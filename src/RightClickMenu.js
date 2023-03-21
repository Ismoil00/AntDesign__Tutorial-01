import React from "react";
import { Dropdown } from "antd";
import {
  CopyOutlined,
  ShareAltOutlined,
  ReloadOutlined,
  DeleteOutlined,
  InstagramOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const RightClickMenu = () => {
  const field = {
    width: "300px",
    height: "300px",
    backgroundColor: "rgb(240, 240, 2440)",
    border: "1px solid lightgray",
    borderRadius: "20px",
    fontSize: "2rem",
    display: "grid",
    placeContent: "center",
  };
  const items = [
    {
      label: (
        <p>
          <CopyOutlined style={{ marginRight: "20px" }} /> Copy
        </p>
      ),
      key: "1",
      onClick: (val) => {console.log(val)}
    },
    {
      label: (
        <p>
          <ShareAltOutlined style={{ marginRight: "20px" }} /> Share
        </p>
      ),
      key: "2",
      children: [
        {
          label: (
            <p>
              <InstagramOutlined style={{ marginRight: "20px" }} /> Instagram
            </p>
          ),
          key: "2_1",
          onClick: (val) => {console.log(val)}
        },
        {
          label: (
            <p>
              <FacebookOutlined style={{ marginRight: "20px" }} /> FaceBook
            </p>
          ),
          key: "2_2",
          onClick: (val) => {console.log(val)}
        },
      ],
    },
    {
      label: (
        <p>
          <ReloadOutlined style={{ marginRight: "20px" }} /> Reload
        </p>
      ),
      key: "3",
      onClick: (val) => {console.log(val)}
    },
    {
      label: (
        <p>
          <DeleteOutlined style={{ marginRight: "20px" }} /> Delete
        </p>
      ),
      key: "4",
      danger: true,
      onClick: (val) => {console.log(val)}
    },
  ];
  return (
    <Dropdown
      menu={{ items }}
      trigger={["contextMenu"]}
      onOpenChange={(bool) => console.log(bool)}
    >
      <div style={field}>Right Click Here!</div>
    </Dropdown>
  );
};

export default RightClickMenu;
