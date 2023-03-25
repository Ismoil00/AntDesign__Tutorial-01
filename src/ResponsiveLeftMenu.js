import React, { useState } from "react";
import { Menu, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

export default function ResponsiveLeftMenu({ goBack }) {
  const menuStyle = {
    backgroundColor: "orange",
    fontSize: 24,
    color: "white",
    border: "none",
  };
  const menuStyleTwo = {
    backgroundColor: "orange",
    height: 60,
    padding: "12px 0 0 12px",
  };
  const menuIconStyle = {
    color: "white",
    fontSize: 30,
  };
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div style={menuStyleTwo} className="mobileView">
        <MenuOutlined
          style={menuIconStyle}
          onClick={() => {
            setOpenMenu(true);
          }}
        />
      </div>
      <Menu
        className="tabletView"
        style={menuStyle}
        mode="horizontal"
        items={[
          {
            label: "Home",
            key: "home",
          },
          {
            label: "Contact Us",
            key: "contact",
          },
          {
            label: "About Us",
            key: "about",
          },
          {
            label: "Go Back",
            key: "go-back",
            onClick: () => {
              goBack(false);
            },
          },
        ]}
      />
      <Drawer
        open={openMenu}
        closable={false}
        onClose={() => {
          setOpenMenu(false);
        }}
        bodyStyle={{ backgroundColor: "orange" }}
        placement="left"
      >
        <AppMenu mode={"inline"} style={menuStyle} goBack={goBack} />
      </Drawer>
    </>
  );
}

const AppMenu = ({ mode, style, goBack }) => {
  return (
    <Menu
      mode={mode}
      style={style}
      items={[
        {
          label: "Home",
          key: "home",
        },
        {
          label: "Contact Us",
          key: "contact",
        },
        {
          label: "About Us",
          key: "about",
        },
        {
          label: "Go Back",
          key: "go-back",
          onClick: () => {
            goBack(false);
          },
        },
      ]}
    />
  );
};
