import { Watermark } from "antd";
import React from "react";

export default function WaterMark() {
  return (
    <Watermark
      content={["The Work is", "Watermarked!"]}
      className="watermark"
      gap={[60, 60]}
      offset={[0, 0]}
      rotate={-33}
      font={{
        color: "darkgray",
        fontSize: 10,
        fontFamily: "Cursive"
      }}
    >
      <div style={{ width: "100vw", height: "100vh" }}>
        This is the content of watermark!
      </div>
    </Watermark>
  );
}
