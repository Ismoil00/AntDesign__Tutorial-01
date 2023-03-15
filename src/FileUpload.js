import React from "react";
import { Upload, Button, Spin } from "antd";

const FileUpload = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    heihgt: "100vh",
  };

  return (
    <div style={style}>
      <Upload.Dragger
        // disabled
        action={"http://localhost:3001"}
        style={{ padding: "5px 20px" }}
        multiple
        listType="picture"
        showUploadList={{
          showRemoveIcon: true,
        }}
        accept=".png, .json, .ico"
        beforeUpload={(file) => {
          console.log({ file });
          return false;
        }}
        defaultFileList={[
          {
            uid: "abc",
            name: "existing_file.png",
            status: "uploading",
            percent: 50,
            url: "https://www.google.com",
          },
        ]}
        iconRender={() => {
          return <Spin></Spin>;
        }}
        /* itemRender={(existingComp, file) => {
            return <p>{file.name}</p>
        }} */
        progress={{
          strokeWidth: 3,
          strokeColor: {
            "0%": "#f0f",
            "100%": "#ff0",
          },
          style: { top: 10 },
        }}
      >
        Drag files here OR
        <br />
        <br />
        <Button>Upload File</Button>
      </Upload.Dragger>
    </div>
  );
};

export default FileUpload;
