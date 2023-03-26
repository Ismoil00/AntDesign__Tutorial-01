import React, { useState } from "react";
import { Select, Space, Typography } from "antd";

const DependentDropDowns = () => {
  const [salaryFrom, setSalaryFrom] = useState(1000);
  const [salaryTo, setSalaryTo] = useState(10000);
  const SALARY_RANGE = [
    1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
  ];
  return (
    <div>
      <Typography.Title>Select Salary Range</Typography.Title>
      <Space direction="horizontal" size={15}>
        <Typography.Text>From</Typography.Text>
        <Select
          value={salaryFrom}
          onChange={(val) => {
            setSalaryFrom(val);
          }}
          placeholder="salary from"
          options={SALARY_RANGE.map((salary) => {
            return {
              label: `$${salary}`,
              value: salary,
            };
          }).filter((salary) => salary.value <= salaryTo)}
        />
        <Typography.Text>To</Typography.Text>
        <Select
          value={salaryTo}
          onChange={(val) => {
            setSalaryTo(val);
          }}
          placeholder="salary to"
          options={SALARY_RANGE.map((salary) => {
            return {
              label: `$${salary}`,
              value: salary,
            };
          }).filter((salary) => salary.value >= salaryFrom)}
        />
      </Space>
    </div>
  );
};

export default DependentDropDowns;
