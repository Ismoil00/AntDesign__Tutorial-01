import React from "react";
import { Form, Checkbox, Button, Input, Select, DatePicker } from "antd";

const ValidationForm = () => {
  const FormStyle = {
    border: "1px solid lightblue",
    borderRadius: "10px",
    margin: "20px 0",
    padding: "20px",
  };

  return (
    <Form
      style={FormStyle}
      labelCol={{ span: 10 }}
      autoComplete="off"
      onFinish={(values) => {
        console.log({ values });
      }}
      onFinishFailed={(err) => {
        console.log({ err });
      }}
    >
      <Form.Item
        name="full-name"
        label="Full Name: "
        rules={[
          {
            required: true,
            message: "Please, enter your name!",
          },
          {
            whitespace: true,
            message: "Please, don't leave this field empty!",
          },
          {
            min: 3,
            message: "Please, type 3 characters at least!",
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Type your name!" />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email: "
        rules={[
          {
            required: true,
            message: "Please, enter your email!",
          },
          {
            type: "email",
            message: "It is not a valid email!",
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Type your email!" />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password: "
        rules={[
          {
            required: true,
            message: "Please, enter your password!",
          },
          { min: 6, message: "Password must be at least 6 characters" },
          {
            validator: (_, value) =>
              value && value.includes("A")
                ? Promise.resolve()
                : Promise.reject("Password does not match criteria!"),
          },
        ]}
        hasFeedback
      >
        <Input.Password id="password2" placeholder="Type your password!" />
      </Form.Item>

      <Form.Item
        name="password-confirm"
        label="Confirm Password: "
        dependencies={["password"]}
        rules={[
          {
            required: true,
            message: "Please, enter your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject("Passwords do not match!");
            },
          }),
        ]}
        hasFeedback
      >
        <Input.Password
          id="password-confirm"
          placeholder="Confirm your password!"
        />
      </Form.Item>

      <Form.Item
        name="gender"
        label="Gender: "
        requiredMark="optional"
        hasFeedback
      >
        <Select placeholder="Select your gender!">
          <Select.Option value="male">Male</Select.Option>
          <Select.Option value="female">Female</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="date-of-birth"
        label="Date of Birth: "
        rules={[
          {
            required: true,
            message: "Date of Birth is Required!",
          },
        ]}
        hasFeedback
      >
        <DatePicker
          style={{ width: "100%" }}
          picker="date"
          placeholder="Choose your date of birth!"
        />
      </Form.Item>

      <Form.Item
        name="website"
        label="Website: "
        requiredMark="optional"
        rules={[
          {
            type: "url",
            message: "It is not a valid URL!",
          },
        ]}
        hasFeedback
      >
        <Input placeholder="Add your website URL!" />
      </Form.Item>

      <Form.Item
        name="our-terms-and-conditions"
        style={{ textAlign: "center" }}
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject("Please, agree to our Terms and Conditions!"),
          },
        ]}
      >
        <Checkbox>
          Agree to our <a href="#">Terms and Conditions</a>
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ValidationForm;
