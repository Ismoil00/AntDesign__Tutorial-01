import { Steps } from "antd";
import { useState } from "react";

const StepsSection = () => {
  const items = [
    {
      title: "Finished",
      description: "This Step was Finished",
      subTitle: "done 4 hrs ago",
    },
    {
      title: "In Progress",
      description: "This Step is in progress",
      subTitle: "2 hrs left",
    },
    {
      title: "Waiting",
      description: "This Step is being Waited",
    },
  ];
  const [current, setCurrent] = useState(0);
  const [dotCur, setDotCur] = useState(0);
  const [vertCur, setVertCur] = useState(0);

  return (
    <>
      <Steps
        percent={65}
        direction="horizontal"
        current={current}
        items={items}
        labelPlacement="vertical"
        onChange={(c) => {
          setCurrent(c);
        }}
      />
      <br />
      <Steps
        current={dotCur}
        items={[
          { title: "Finished" },
          { title: "In Progress" },
          { title: "Waiting" },
        ]}
        progressDot={true}
        onChange={(c) => {
          setDotCur(c);
        }}
      />
      <br />
      <Steps
        direction="vertical"
        current={vertCur}
        status="error"
        items={[
          { title: "Finished" },
          { title: "In Progress" },
          { title: "Waiting" },
        ]}
        onChange={(c) => {
          setVertCur(c);
        }}
      />
      <br />
      <Steps
        items={[
          { status: "finish", title: "Finish" },
          { status: "error", title: "Error" },
          { status: "process", title: "Process" },
          { status: "wait", title: "Wait" },
        ]}
        labelPlacement="vertical"
      />
    </>
  );
};

export default StepsSection;
