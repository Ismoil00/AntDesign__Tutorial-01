import React from "react";
import { Table } from "antd";

const TableSec = () => {
  const data = [
    {
      name: "Ismoil",
      age: 24,
      status: "married",
      occupation: "Front-end Developer",
      // key: 1,
    },
    {
      name: "Sorbon",
      age: 25,
      status: "married",
      occupation: "Businessman",
      // key: 2,
    },
    {
      name: "Somon",
      age: 24,
      status: "married",
      occupation: "Civil Engineer",
      // key: 3,
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      // key: "key",
      render: (test) => {
        return <h3>{test}</h3>;
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      // key: "key",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Status",
      dataIndex: "status",
      // key: "key",
    },
    {
      title: "Occupation",
      dataIndex: "occupation",
      // key: "key",
    },
    {
      title: "Graduated",
      render: (payload) => {
        return payload.age >= 20 ? "true" : "false";
      },
    },
  ];
  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>Table Section</h1>
      <Table dataSource={data} columns={columns}></Table>
    </>
  );
};

export default TableSec;
