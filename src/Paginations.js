import React from "react";
import { Pagination } from "antd";
import { useState } from "react";

const Paginations = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <>
      <Pagination
        total={200}
        /* pageSize={5} */
        defaultCurrent={2}
        showSizeChanger
        pageSizeOptions={[1, 5, 10, 20, 33, 50, 100]}
        hideOnSinglePage
        showQuickJumper
        simple={false}
      />
      <Pagination
        total={50}
        defaultCurrent={3}
        itemRender={(page, type) => {
          if (type === "next") return <a>NEXT</a>;
          if (type === "prev") return <a>PREV</a>;
          if (type === "page") return <a>Page: {page}</a>;
        }}
        current={currentPage}
        onChange={(page) => {
          setCurrentPage(page);
          // YOU CAN MAKE API CALLS
        }}
      />
      <div style={{ color: "gray", fontWeight: "bold" }}>
        The current Page is {currentPage}
      </div>
    </>
  );
};

export default Paginations;
