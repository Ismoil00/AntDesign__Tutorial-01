import React from "react";
import { Tabs } from "antd";
import {
  AppleOutlined,
  PaperClipOutlined,
  AppstoreOutlined,
  CloseSquareTwoTone,
  AppstoreAddOutlined
} from "@ant-design/icons";
import { useState } from "react";

const Tab = () => {
  const items = [
    {
      key: 1,
      label: [<AppleOutlined />, "Main Page"],
      children: "This is Main Page",
      disabled: true,
    },
    {
      key: 2,
      label: [<PaperClipOutlined />, "Save"],
      children: "Your Saved Data",
    },
    {
      key: 3,
      label: [<AppstoreOutlined />, "App Store"],
      children: "This is App Store",
    },
  ];
  const [tab2, setTab2] = useState([
    {
      label: "Amazon",
      key: 1,
      children: "Amazon Page",
      closable: false,
    },
    {
      label: "Facebook",
      key: 2,
      children: "Facebook Page",
      closeIcon: <CloseSquareTwoTone />
    },
    {
      label: "Instagram",
      key: 3,
      children: "Instagram Page",
      closeIcon: <CloseSquareTwoTone />
    },
  ]);
  const socialMedia = [
    "Instagram",
    "FaceBook",
    "YouTube",
    "TickTock",
    "Google",
    "Bing",
    "Twitter",
    "Pinterest",
    "WhatsApp",
    "Telegram",
    "Viber",
    "IMO",
    "SnapChat",
    "Skype",
    "Zoom",
    "Gmail",
    "Vkontakte",
    "Yandex",
    "Yahoo",
    "LinkedIn",
  ];

  const onEdit = (tabKey, action) => {
    if (action === "remove") {
      setTab2((prev) => [...prev.filter((tab) => tab.key !== tabKey)]);
    } else if (action === "add") {
      const randomNum = Math.floor(Math.random()*20);
      const key = tab2.length ? tab2[tab2.length - 1].key + 1 : 1;
      const name = socialMedia[randomNum];
      const newTab = { label: name, key: key, children: `${name} Page` };
      setTab2((prev) => [...prev, newTab]);
    }
  };

  return (
    <>
      <Tabs items={items} defaultActiveKey={2} tabPosition="left" type="card" />
      <br />
      <Tabs
        items={tab2}
        defaultActiveKey="1"
        tabPosition="top"
        type="editable-card"
        onEdit={onEdit}
        addIcon={<AppstoreAddOutlined />}
      />
    </>
  );
};

export default Tab;
