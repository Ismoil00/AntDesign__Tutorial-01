import React, { useState } from "react";
import { Card, Menu, Space, Tag, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import {
  ShopOutlined,
  HomeOutlined,
  ApiOutlined,
  StepBackwardOutlined,
  UserOutlined,
  TeamOutlined,
  FullscreenExitOutlined,
  FullscreenOutlined,
  AppleOutlined,
  AndroidOutlined,
  MobileOutlined,
  LaptopOutlined,
  DatabaseOutlined,
  BulbOutlined,
} from "@ant-design/icons";

export default function MegaMenu({ setShowApp }) {
  const navigate = useNavigate();

  const goBack = () => {
    setShowApp(true);
    navigate("/");
  };

  return (
    <div className="megaMenu">
      <Menu
        mode="horizontal"
        items={[
          {
            label: "Fashion",
            key: "fashion",
            icon: <ShopOutlined />,
            children: [
              {
                label: "Men",
                key: "men",
                icon: <UserOutlined />,
              },
              {
                label: "Women",
                key: "women",
                icon: <UserOutlined />,
              },
              {
                label: "Kids",
                key: "kids",
                icon: <TeamOutlined />,
              },
            ],
          },
          {
            label: "Home Decor",
            key: "home_decor",
            icon: <HomeOutlined />,
            children: [
              {
                label: "Interior Decor",
                key: "interior_decor",
                icon: <FullscreenExitOutlined />,
              },
              {
                label: "Exterior Decor",
                key: "exterior_decor",
                icon: <FullscreenOutlined />,
              },
            ],
          },
          {
            label: "Electronics",
            key: "electronics",
            icon: <ApiOutlined />,
            children: [
              {
                label: <MegaMenuItem />,
                key: "mega_menu",
                style: {
                  height: "fit-content",
                  padding: 0,
                  backgroundColor: "white",
                },
              },
            ],
          },
          {
            label: "Go Back",
            key: "go_back",
            onClick: () => {
              goBack();
            },
            icon: <StepBackwardOutlined />,
          },
        ]}
      />
    </div>
  );
}

const MegaMenuItem = () => {
  const [selectedKeys, setSelectedKeys] = useState([]);
  const parentStyle = {
    backgroundColor: "white",
    padding: "0 20px",
  };

  const onMenuItemSelected = (item) => {
    setSelectedKeys([item.key]);
  };

  return (
    <div style={parentStyle}>
      <Typography.Title level={2}>Mega Menu Items</Typography.Title>
      <Space direction="horizontal" size={15}>
        <Tag color="red">Sale for 50%</Tag>
        <Space direction="horizontal">
          <Menu
            style={{ boxShadow: "none", border: "none" }}
            selectedKeys={selectedKeys}
            onClick={onMenuItemSelected}
            items={[
              {
                label: "Mobile",
                key: "mobile",
                type: "group",
              },
              {
                label: "Aplle",
                key: "apple",
                icon: <AppleOutlined />,
              },
              {
                label: "Android",
                key: "android",
                icon: <AndroidOutlined />,
              },
              {
                label: "Other Mobile",
                key: "other_mobile",
                icon: <MobileOutlined />,
              },
              {
                label: "Laptop",
                key: "laptop",
                type: "group",
              },
              {
                label: "Laptop 1",
                key: "laptop1",
                icon: <LaptopOutlined />,
              },
              {
                label: "Laptop 2",
                key: "laptop2",
                icon: <LaptopOutlined />,
              },
              {
                label: "Laptop 3",
                key: "laptop3",
                icon: <LaptopOutlined />,
              },
              {
                label: "Laptop 4",
                key: "laptop4",
                icon: <LaptopOutlined />,
              },
              {
                label: "Laptop 5",
                key: "laptop5",
                icon: <LaptopOutlined />,
              },
            ]}
          />
          <Menu
            style={{ boxShadow: "none", border: "none" }}
            selectedKeys={selectedKeys}
            onClick={onMenuItemSelected}
            items={[
              {
                label: "Refrigerator",
                key: "refrigerator",
                type: "group",
              },
              {
                label: "Refrigerator 1",
                key: "refrigerator1",
                icon: <DatabaseOutlined />,
              },
              {
                label: "Refrigerator 2",
                key: "refrigerator2",
                icon: <DatabaseOutlined />,
              },
              {
                label: "Refrigerator 3",
                key: "refrigerator3",
                icon: <DatabaseOutlined />,
              },
              {
                label: "Refrigerator 4",
                key: "refrigerator4",
                icon: <DatabaseOutlined />,
              },
              {
                label: "Refrigerator 5",
                key: "refrigerator5",
                icon: <DatabaseOutlined />,
              },
              {
                label: "Refrigerator 6",
                key: "refrigerator6",
                icon: <DatabaseOutlined />,
              },
              {
                label: "Washing Machine",
                key: "washing_machine",
                type: "group",
              },
              {
                label: "Washing Machine 1",
                key: "washing_machine1",
                icon: <ApiOutlined />,
              },
              {
                label: "Washing Machine 2",
                key: "washing_machine2",
                icon: <ApiOutlined />,
              },
            ]}
          />
          <Menu
            style={{ boxShadow: "none", border: "none" }}
            selectedKeys={selectedKeys}
            onClick={onMenuItemSelected}
            items={[
              {
                label: "Bulb",
                key: "bulb",
                type: "group",
              },
              {
                label: "Bulb 1",
                key: "bulb1",
                icon: <BulbOutlined />,
              },
              {
                label: "LED Bulb",
                key: "led_bulb",
                icon: <BulbOutlined />,
              },
              {
                label: "Energy Saver",
                key: "energy_saver",
                icon: <BulbOutlined />,
              },
              {
                label: "Misc. Items",
                key: "misc_items",
                type: "group",
              },
              {
                label: "Misc. Items 1",
                key: "misc_item1",
                icon: <ApiOutlined />,
              },
              {
                label: "Misc. Items 2",
                key: "misc_item2",
                icon: <ApiOutlined />,
              },
              {
                label: "Misc. Items 3",
                key: "misc_item3",
                icon: <ApiOutlined />,
              },
              {
                label: "Misc. Items 4",
                key: "misc_item4",
                icon: <ApiOutlined />,
              },
              {
                label: "Misc. Items 5",
                key: "misc_item5",
                icon: <ApiOutlined />,
              },
            ]}
          />
        </Space>
        <Card title="Mega Menu Card">
          This section contains the details of this menu!
        </Card>
      </Space>
    </div>
  );
};
