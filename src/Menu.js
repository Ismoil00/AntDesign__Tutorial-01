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
              key === "/dashboard" ||
              key === "/user-management" ||
              key === "/admin"
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
              key: "/",
              icon: <HomeOutlined />,
            },
            {
              label: "Dashboard",
              key: "/dashboard",
              icon: <DashboardOutlined />,
              children: [
                {
                  label: "Revenue",
                  key: "/revenue",
                  icon: <DollarCircleOutlined />,
                },
                {
                  label: <span style={{ color: "red" }}>Expenses</span>,
                  key: "/expenses",
                  icon: <MoneyCollectOutlined />,
                },
              ],
            },
            {
              label: "User Management",
              key: "/user-management",
              children: [
                {
                  label: "Edit Profile",
                  key: "/adit-profile",
                  icon: <EditOutlined />,
                },
                {
                  label: "Switch Account",
                  key: "/switch-account",
                  icon: <SwitcherOutlined />,
                },
              ],
            },
            {
              label: "Admin",
              key: "/admin",
              type: "group",
              children: [
                {
                  label: "Admin Dashboard",
                  key: "/admin-dashboard",
                  icon: <ControlOutlined />,
                },
                {
                  label: "Challenges",
                  key: "/challenges",
                  icon: <TableOutlined />,
                },
              ],
            },
            {
              label: "Sign-out",
              key: "/sign-out",
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
        <Route path="/" /* element={<App />} */ />;
        <Route path="/revenue" element={<div>Revenue Page</div>} />;
        <Route path="/expenses" element={<div>Expenses Page</div>} />;
        <Route path="/adit-profile" element={<div>Edit Profile Page</div>} />;
        <Route
          path="/switch-account"
          element={<div>Switch Account Page</div>}
        />
        ;
        <Route
          path="/admin-dashboard"
          element={<div>Admin Dashboard Page</div>}
        />
        ;
        <Route path="/challenges" element={<div>Challenges Page</div>} />;
        <Route path="/sign-out" element={<SignOut />} />;
      </Routes>
    </div>
  );
};

const SignOut = () => {
  return <div>This is the Sign-Out Page!</div>;
};
