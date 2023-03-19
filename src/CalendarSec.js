import React from "react";
import { Calendar } from "antd";

const CalendarSec = () => {
  return (
    <>
      <Calendar
        onSelect={(date) => {
          console.log(date);
        }}
        disabledDate={(date) => {
          if (new Date(date).getDate() > 22) {
            return true;
          } else {
            return false;
          }
        }}
        dateCellRender={(data) => {
          if (new Date(data).getDate() === new Date().getDate()) {
            return <h3>Current Date</h3>;
          }
        }}
        monthCellRender={(data) => {
          if (new Date(data).getMonth() === new Date().getMonth()) {
            return <h3>Current Month</h3>;
          }
        }}
      />
    </>
  );
};

export default CalendarSec;
