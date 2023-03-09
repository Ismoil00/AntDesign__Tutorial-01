import React, { useEffect, useState } from "react";
import { Table, Tag } from "antd";

const TableSec = () => {
  const [datasource, setDatasource] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alreadySelectedKeys, setAlreadySelectedKeys] = useState(["2"]);
  const columnTab1 = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
      filters: [{ text: "10", value: 10 }],
      onFilter: (value, record) => {
        return record.id === value;
      },
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
  const columnTab2 = [
    {
      key: "1",
      title: "Student ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Student Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Student Grade",
      dataIndex: "grade",
      render: (tag) => {
        const color = tag.includes("A")
          ? "green"
          : tag.includes("B")
          ? "blue"
          : "red";
        return <Tag color={color}>{tag}</Tag>;
      },
    },
  ];
  const Students = [
    {
      key: "1",
      id: "1",
      name: "Sorbon",
      grade: "A",
    },
    {
      key: "2",
      id: "2",
      name: "Somon",
      grade: "B",
    },
    {
      key: "3",
      id: "3",
      name: "Ismoil",
      grade: "C",
    },
    {
      key: "4",
      id: "4",
      name: "Umed",
      grade: "A",
    },
    {
      key: "5",
      id: "5",
      name: "Bakha",
      grade: "B",
    },
    {
      key: "6",
      id: "6",
      name: "Buzurg",
      grade: "C",
    },
    {
      key: "7",
      id: "7",
      name: "Azam",
      grade: "A",
    },
    {
      key: "8",
      id: "8",
      name: "Parviz",
      grade: "B",
    },
    {
      key: "9",
      id: "9",
      name: "Jahongir",
      grade: "C",
    },
    {
      key: "10",
      id: "10",
      name: "Jonibek",
      grade: "A",
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
      <Table
        dataSource={datasource}
        columns={columnTab1}
        loading={loading}
        pagination={{
          pageSize: 5,
          hideOnSinglePage: true,
        }}
        rowSelection={{
          type: "checkbox",
          onSelect: (rec) => {
            console.log(rec);
          },
          hideSelectAll: true,
        }}
      ></Table>
      <Table
        dataSource={Students}
        columns={columnTab2}
        rowSelection={{
          type: "checkbox",
          selectedRowKeys: alreadySelectedKeys,
          onChange: (rec) => {
            setAlreadySelectedKeys(rec);
          },
          onSelect: (rec) => {
            console.log(rec);
          },
          /* getCheckboxProps: (rec) => ({
            disabled: rec.grade === "C",
          }), */
          selections: [
            Table.SELECTION_NONE,
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            {
              key: "even",
              text: "Select Even Rows",
              onSelect: (allKeys) => {
                const selectedKeys = allKeys.filter((key) => {
                  return key % 2 === 0;
                });
                setAlreadySelectedKeys(selectedKeys);
              },
            },
            {
              key: "A grade",
              text: "A - grade Owners",
              onSelect: (records) => {
                const AHavers = records.filter((key) => {
                  return Students.find(
                    (each) => each.key === key && each.grade === "A"
                  );
                });
                setAlreadySelectedKeys(AHavers);
              },
            },
          ],
        }}
      ></Table>
    </>
  );
};

export default TableSec;
