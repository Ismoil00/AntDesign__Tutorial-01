import React from "react";
import { Upload, Button, Spin, Space, Form, message, Input } from "antd";
import axios from "axios";

export default function FileUpload() {
  const handleFileUpload = ({ file }) => {
    axios.post("http://localhost:8000/", file, {
      onUploadProgress: (event) => {
        console.log(event);
      },
    });
  };

  return (
    <div className="fileUpload">
      <Space direction="vertical" size={70} align="center">
        <Upload multiple customRequest={handleFileUpload}>
          <Button>Click to Upload</Button>
        </Upload>
        <SimpleFileUpload />
        <FileUploadRules />
      </Space>
    </div>
  );
}

const SimpleFileUpload = (req, res) => {
  return (
    <Space direction="vertical" size={10} align="center">
      <h3 style={{ color: "darkred" }}>Simple File Upload:</h3>
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
    </Space>
  );
};

const FileUploadRules = () => {
  const onFinish = (val) => {
    console.log(val);
  };

  return (
    <Form onFinish={onFinish}>
      <Space direction="vertical" align="center">
        <h3 style={{ color: "darkred" }}>File Upload with Restrictions:</h3>
        <Form.Item label="Full Name" name={"fullName"}>
          <Input placeholder="Please, provide your full name!" />
        </Form.Item>
        <Form.Item
          label="Profile Picture"
          name="profile-picture"
          valuePropName="files"
          getValueFromEvent={(eve) => {
            return eve?.files;
          }}
          rules={[
            {
              required: true,
              message: "Please, upload your profile picture",
            },
            {
              validator(_, files) {
                // console.log(files);
                return new Promise((resolve, reject) => {
                  if (files && files[0].size > 900000) {
                    reject("The file exceeded!");
                  } else {
                    resolve("Success!");
                  }
                });
              },
            },
          ]}
        >
          <Upload
            maxCount={1}
            beforeUpload={(file) => {
              return new Promise((resolve, reject) => {
                if (file.size > 900000) {
                  reject("The file exceeded!");
                  message.error("The file exceeded!");
                } else {
                  resolve("Success!");
                }
              });
            }}
          >
            <Button>Upload Profile Picture</Button>
          </Upload>
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Space>
    </Form>
  );
};
