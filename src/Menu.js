import React from "react";
import { Menu as AMenu, Space, Input } from "antd";
import {
  HomeOutlined,
  DashboardOutlined,
  DollarCircleOutlined,
  MoneyCollectOutlined,
  EditOutlined,
  SwitcherOutlined,
  LogoutOutlined,
  ControlOutlined,
  TableOutlined,
} from "@ant-design/icons";

const Menu = () => {
  return (
    <Space>
      <AMenu
        mode="inline"
        defaultOpenKeys={["dashboard"]}
        onClick={(info) => {
          console.log(info.key);
        }}
        items={[
          {
            label: <Input.Search allowClear placeholder="Search menu items" />,
            key: "search",
          },
          {
            label: "Home",
            key: "home",
            icon: <HomeOutlined />,
          },
          {
            label: "Dashboard",
            key: "dashboard",
            icon: <DashboardOutlined />,
            children: [
              {
                label: "Revenue",
                key: "revenue",
                icon: <DollarCircleOutlined />,
              },
              {
                label: <span style={{ color: "red" }}>Expenses</span>,
                key: "expenses",
                icon: <MoneyCollectOutlined />,
              },
            ],
          },
          {
            label: "User Management",
            key: "um",
            children: [
              {
                label: "Edit Profile",
                key: "ep",
                icon: <EditOutlined />,
              },
              {
                label: "Switch Account",
                key: "sa",
                icon: <SwitcherOutlined />,
              },
            ],
          },
          {
            label: "Admin",
            key: "ad",
            type: "group",
            children: [
              {
                label: "Admin Dashboard",
                key: "add",
                icon: <ControlOutlined />,
              },
              {
                label: "Challenges",
                key: "chll",
                icon: <TableOutlined />,
              },
            ],
          },
          {
            label: "Sign-out",
            key: "sign-out",
            danger: true,
            icon: <LogoutOutlined />,
          },
        ]}
      ></AMenu>
    </Space>
  );
};

export default Menu;
