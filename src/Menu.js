import React from "react";
import { Menu as AMenu, Space, Input } from "antd";
import {
  HomeOutlined,
  DashboardOutlined,
  DollarCircleOutlined,
  MoneyCollectOutlined,
  EditOutlined,
  SwitcherOutlined,
  PoweroffOutlined,
  ControlOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { Route, Routes, useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();
  const curPath = window.location.pathname;

  return (
    <>
      <h5>Menu contains Routing!</h5>
      <Space>
        <AMenu
          mode="inline"
          defaultOpenKeys={[curPath]}
          onClick={({ key }) => {
            if (
              key === "/rest-elements/dashboard" ||
              key === "/rest-elements/user-management" ||
              key === "/rest-elements" ||
              key === "/rest-elements/admin"
            ) {
              console.log(key);
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              label: (
                <Input.Search allowClear placeholder="Search menu items" />
              ),
              key: "search",
            },
            {
              label: "Home",
              key: "/rest-elements",
              icon: <HomeOutlined />,
            },
            {
              label: "Dashboard",
              key: "/rest-elements/dashboard",
              icon: <DashboardOutlined />,
              children: [
                {
                  label: "Revenue",
                  key: "/rest-elements/revenue",
                  icon: <DollarCircleOutlined />,
                },
                {
                  label: <span style={{ color: "red" }}>Expenses</span>,
                  key: "/rest-elements/expenses",
                  icon: <MoneyCollectOutlined />,
                },
              ],
            },
            {
              label: "User Management",
              key: "/rest-elements/user-management",
              children: [
                {
                  label: "Edit Profile",
                  key: "/rest-elements/adit-profile",
                  icon: <EditOutlined />,
                },
                {
                  label: "Switch Account",
                  key: "/rest-elements/switch-account",
                  icon: <SwitcherOutlined />,
                },
              ],
            },
            {
              label: "Admin",
              key: "/rest-elements/admin",
              type: "group",
              children: [
                {
                  label: "Admin Dashboard",
                  key: "/rest-elements/admin-dashboard",
                  icon: <ControlOutlined />,
                },
                {
                  label: "Challenges",
                  key: "/rest-elements/challenges",
                  icon: <TableOutlined />,
                },
              ],
            },
            {
              label: "Sign-out",
              key: "/rest-elements/sign-out",
              danger: true,
              icon: <PoweroffOutlined />,
            },
          ]}
        ></AMenu>
        <Content />
      </Space>
    </>
  );
}

const Content = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/rest-elements/revenue"
          element={<div>Revenue Page</div>}
        />
        ;
        <Route
          path="/rest-elements/expenses"
          element={<div>Expenses Page</div>}
        />
        ;
        <Route
          path="/rest-elements/adit-profile"
          element={<div>Edit Profile Page</div>}
        />
        ;
        <Route
          path="/rest-elements/switch-account"
          element={<div>Switch Account Page</div>}
        />
        ;
        <Route
          path="/rest-elements/admin-dashboard"
          element={<div>Admin Dashboard Page</div>}
        />
        ;
        <Route
          path="/rest-elements/challenges"
          element={<div>Challenges Page</div>}
        />
        ;
        <Route path="/rest-elements/sign-out" element={<SignOut />} />;
      </Routes>
    </div>
  );
};

const SignOut = () => {
  return <div>This is the Sign-Out Page!</div>;
};
