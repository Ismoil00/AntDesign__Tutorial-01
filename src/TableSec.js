import React, { useEffect, useState } from "react";
import { Table, Tag, Button, Modal, Input } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const TableSec = () => {
  const [table1Data, setTable1Data] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [beingEdited, setBeingEdited] = useState(null);
  const [alreadySelectedKeys, setAlreadySelectedKeys] = useState(["2"]);
  const table1Column = [
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
  const [table2Data, setTable2Data] = useState([
    {
      key: 1,
      id: 1,
      name: "Sorbon",
      email: "Sorbon@gmail.com",
      grade: "A",
    },
    {
      key: 2,
      id: 2,
      name: "Somon",
      email: "Somon@gmail.com",
      grade: "B",
    },
    {
      key: 3,
      id: 3,
      name: "Ismoil",
      email: "Ismoil@gmail.com",
      grade: "C",
    },
    {
      key: 4,
      id: 4,
      name: "Umed",
      email: "Umed@gmail.com",
      grade: "A",
    },
    {
      key: 5,
      id: 5,
      name: "Bakha",
      email: "Bakha@gmail.com",
      grade: "B",
    },
    {
      key: 6,
      id: 6,
      name: "Buzurg",
      email: "Buzurg@gmail.com",
      grade: "C",
    },
  ]);
  const table2Column = [
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
      title: "Student Email",
      dataIndex: "email",
    },
    {
      key: "4",
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
    {
      key: "",
      title: "Actions",
      render: (rec) => {
        return (
          <>
            <DeleteOutlined
              style={{ color: "red", fontSize: "1.2rem", cursor: "pointer" }}
              onClick={() => deleteStudent(rec)}
            />
            <EditOutlined
              style={{
                color: "darkblue",
                marginLeft: "20px",
                fontSize: "1.2rem",
                cursor: "pointer",
              }}
              onClick={() => onEditStudent(rec)}
            />
          </>
        );
      },
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();
      setTable1Data(data.slice(0, 50));
      setLoading(false);
    };

    fetchData();
  }, []);

  const AddingNewStudent = () => {
    const names = [
      "John",
      "Jane",
      "Jack",
      "Jill",
      "Islom",
      "Ali",
      "Nasim",
      "Shohin",
      "Farukh",
      "Kahor",
      "Iso",
      "Muso",
      "Barot",
      "Sator",
      "Jovid",
      "Parviz",
      "Jonibek",
      "Jurabek",
      "Jahongir",
      "Azam",
    ];
    const grades = ["A", "B", "C"];
    const randomName = Math.floor(Math.random() * 20);
    const randomGrade = Math.floor(Math.random() * 3);
    const name = names[randomName];
    const grade = grades[randomGrade];
    const newStudent = {
      key: table2Data.length ? table2Data[table2Data.length - 1].key + 1 : 1,
      id: table2Data.length ? table2Data[table2Data.length - 1].key + 1 : 1,
      name: name,
      email: name + "@gmail.com",
      grade: grade,
    };
    setTable2Data((prev) => [...prev, newStudent]);
  };

  const deleteStudent = (rec) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setTable2Data((prev) => prev.filter((s) => s.id !== rec.id));
      },
    });
  };

  const onEditStudent = (rec) => {
    setIsEditing(true);
    setBeingEdited(rec);
  };

  return (
    <>
      <Table
        dataSource={table1Data}
        columns={table1Column}
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

      <div>
        <Button
          onClick={AddingNewStudent}
          style={{ width: "100%", margin: "0 auto" }}
        >
          Add a new Student
        </Button>
        <Table
          dataSource={table2Data}
          columns={table2Column}
          rowSelection={{
            type: "checkbox",
            selectedRowKeys: alreadySelectedKeys,
            onChange: (rec) => {
              setAlreadySelectedKeys(rec);
            },
            onSelect: (rec) => {
              console.log(rec);
            },
            getCheckboxProps: (rec) => ({
            disabled: rec.grade === "D",
          }),
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
                    return table2Data.find(
                      (each) => each.key === key && each.grade === "A"
                    );
                  });
                  setAlreadySelectedKeys(AHavers);
                },
              },
            ],
          }}
          pagination={{
            pageSize: 15,
            hideOnSinglePage: true,
          }}
        ></Table>
        <Modal
          title="Edit Student"
          open={isEditing}
          okText="Save"
          onCancel={() => {
            setIsEditing(false);
            setBeingEdited(null);
          }}
          onOk={() => {
            setTable2Data((prev) => {
              return prev.map((s) => {
                if (s.id === beingEdited.id) return beingEdited;
                return s;
              });
            });
            setIsEditing(false);
            setBeingEdited(null);
          }}
        >
          <Input
            value={beingEdited?.name}
            onChange={(e) => {
              setBeingEdited((prev) => {
                return { ...prev, name: e.target.value };
              });
            }}
          />
          <Input
            value={beingEdited?.email}
            onChange={(e) => {
              setBeingEdited((prev) => {
                return { ...prev, email: e.target.value };
              });
            }}
          />
          <Input
            value={beingEdited?.grade}
            onChange={(e) => {
              setBeingEdited((prev) => {
                return { ...prev, grade: e.target.value };
              });
            }}
          />
        </Modal>
      </div>
    </>
  );
};

export default TableSec;
