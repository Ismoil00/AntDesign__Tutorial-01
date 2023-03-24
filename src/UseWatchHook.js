import React from "react";
import { Form, Input, Select } from "antd";

const UseWatchHook = () => {
  const [formOne] = Form.useForm();
  const name = Form.useWatch("myName", formOne);
  const expertise = Form.useWatch("expertise", formOne);
  console.log(expertise);

  return (
    <div>
      <h1 style={{ marginBottom: "20px" }}>Welcom {name}</h1>
      <Form form={formOne}>
        <Form.Item label="Name" name={"myName"}>
          <Input placeholder="Enter name!" />
        </Form.Item>
        <Form.Item label="Expertise" name={"expertise"}>
          <Select
            placeholder="Select your Expertise"
            options={[
              {
                label: "JavaScript",
                value: "JavaScript",
              },
              {
                label: "React JS",
                value: "React JS",
              },
              {
                label: "Ant Design",
                value: "Ant Design",
              },
              {
                label: "Others",
                value: "Others",
              },
            ]}
          />
        </Form.Item>
        {expertise === "Others" && (
          <Form.Item>
            <Form.Item label="Others" name={"others"}>
              <Input placeholder="Type other expertise" />
            </Form.Item>
          </Form.Item>
        )}
      </Form>
    </div>
  );
};

export default UseWatchHook;
