import React, { useState } from "react";
import { Drawer, Button } from "antd";

const DrawerSec = () => {
  const [drawer1, setDrawer1] = useState(false);

  return (
    <>
      <Drawer
        open={drawer1}
        closable={true}
        maskClosable={true}
        onClose={() => setDrawer1(false)}
        title="Drawer Title"
        footer="Drawer Footer"
        placement="left"
      >
        <Button onClick={() => setDrawer1(false)}>Close Drawer</Button>
        <br />
        <br />
        <p>This is the Content of Drawer</p>
      </Drawer>
      <Button onClick={() => setDrawer1(true)}>Open Drawer</Button>
    </>
  );
};

export default DrawerSec;
