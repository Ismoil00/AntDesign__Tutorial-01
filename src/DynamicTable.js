import React, { useEffect, useState } from "react";
import { FloatButton, Table, Tag } from "antd";
import { BackwardFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function DynamicTable({ setShowApp }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [columns, setColumns] = useState([]);
  const [dataType, setDataType] = useState("quotes");

  useEffect(() => {
    fetch(`https://dummyjson.com/${dataType}`)
      .then((res) => res.json())
      .then((result) => {
        const list = result[dataType] || [];
        const firstObj = list[0] || {};
        const cols = [];
        for (const key in firstObj) {
          let render = (val) => <span>{String(val)}</span>;
          if (typeof firstObj[key] === "object") {
            if (Array.isArray(firstObj[key])) {
              render = (val) => (
                <span>
                  {val.map((v) => (
                    <Tag>{v}</Tag>
                  ))}
                </span>
              );
            } else {
              render = (val) => (
                <span>
                  {Object.keys(val).map((key) => (
                    <p>
                      {key}: {val[key]}
                    </p>
                  ))}
                </span>
              );
            }
          }
          cols.push({
            title: String(key).charAt(0).toUpperCase() + String(key).slice(1),
            dataIndex: key,
            key: key,
            render: render,
          });
        }
        setColumns(cols);
        setData(list);
      });
  }, [dataType]);

  const changeTableData = (val) => {
    setDataType(val);
  };

  const goBack = () => {
    setShowApp(true);
    navigate("/");
  };

  return (
    <div>
      <FloatButton
        icon={<BackwardFilled />}
        shape="square"
        type="primary"
        style={{ left: 50, width: 60, height: 60 }}
        description="Back"
        onClick={goBack}
      />
      <FloatButton
        style={{ left: 120, width: 60, height: 60 }}
        description="Posts"
        onClick={() => changeTableData("posts")}
      />
      <FloatButton
        style={{ left: 190, width: 60, height: 60 }}
        description="Todos"
        onClick={() => changeTableData("todos")}
      />
      <FloatButton
        style={{ left: 260, width: 60, height: 60 }}
        description="Quotes"
        onClick={() => changeTableData("quotes")}
      />
      <FloatButton
        style={{ left: 330, width: 70, height: 70 }}
        description="Comments"
        onClick={() => changeTableData("comments")}
      />
      <Table columns={columns} dataSource={data} scroll={{ y: 480 }} />
    </div>
  );
}
