import React, { useState } from "react";
import { Menu, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function ResponsiveLeftMenu({ setShowApp }) {
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

  const navigate = useNavigate();

  function goBack() {
    setShowApp(true);
    navigate("/");
  }

  return (
    <div className="ResponsiveLeftMenu">
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
              goBack();
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
    </div>
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
            goBack();
          },
        },
      ]}
    />
  );
};
