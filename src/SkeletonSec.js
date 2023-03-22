import React from "react";
import { Skeleton } from "antd";

const SkeletonSec = () => {
  const divStyle = {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  };

  return (
    <div style={divStyle}>
      <Skeleton
        loading={true}
        active
        avatar={{ shape: "square" }}
        title={{ width: 300 }}
        paragraph={{
          rows: 4,
          width: [350, 400, 450, 500],
        }}
      >
        <h1>Data is ready!</h1>
      </Skeleton>
      <Skeleton.Avatar active shape="circle" />
      <Skeleton.Button active block shape="round" />
      <Skeleton.Image active />
      <Skeleton.Input active />
      <Skeleton.Node active>
        <h5>Loading...</h5>
      </Skeleton.Node>
    </div>
  );
};

export default SkeletonSec;
