import { Statistic } from "antd";
import { FieldTimeOutlined, DollarCircleFilled } from "@ant-design/icons";

const { Countdown } = Statistic;

export default function TimerSec() {
  const countDownStyle = {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "center",
  };
  const divStyle = {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
  };
  const preSufStyle = {
    color: "black",
    margin: "0 20px",
  };

  return (
    <div style={divStyle}>
      <Countdown
        title={
          <p style={{ color: "blue" }}>
            <FieldTimeOutlined /> Count Down Timer
          </p>
        }
        value={new Date().setMinutes(new Date().getMinutes() + 2)}
        valueStyle={{ color: "blue" }}
        style={countDownStyle}
        // format={"HH:mm:ss:SSS"}
        onFinish={() => {
          console.log("It is Finished");
        }}
      />
      <Countdown
        title={
          <p style={{ color: "gray" }}>
            <DollarCircleFilled /> Sales of the Week
          </p>
        }
        value={new Date().setMinutes(new Date().getMinutes() + 5)}
        valueStyle={{ color: "gray" }}
        style={countDownStyle}
        prefix={<p style={preSufStyle}>Sale ending in</p>}
        suffix={<p style={preSufStyle}>Hurry up!</p>}
      />
    </div>
  );
}
