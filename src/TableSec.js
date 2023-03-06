import React, { useEffect, useState } from "react";
import { Table } from "antd";

const TableSec = () => {
  const [datasource, setDatasource] = useState([]);
  const [loading, setLoading] = useState(true);
  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "User ID",
      dataIndex: "userId",
      sorter: (rec1, rec2) => {
        return rec1.userId > rec2.userId;
      },
    },
    {
      key: "3",
      title: "Status",
      dataIndex: "completed",
      render: (completed) => {
        return <p>{completed ? "Complete" : "In Progress"}</p>;
      },
      filters: [
        { text: "Complete", value: true },
        { text: "In Progress", value: false },
      ],
      onFilter: (value, record) => {
        return record.completed === value;
      },
    },
    {
      key: "4",
      title: "Title",
      dataIndex: "title",
      render: (title) => {
        return <p>{title.slice(0, 20)}...</p>;
      },
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setDatasource(data.slice(0, 50));
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>Table Section</h1>
      <Table
        dataSource={datasource}
        columns={columns}
        loading={loading}
        pagination={{
          pageSize: 5,
          hideOnSinglePage: true,
        }}
      ></Table>
    </>
  );
};

export default TableSec;
