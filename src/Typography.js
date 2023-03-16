import React, { useState } from "react";
import { Typography } from "antd";
import { SmileFilled, CheckOutlined } from "@ant-design/icons";

const Typographies = () => {
  const { Link, Paragraph, Text, Title } = Typography;
  const [text1, setText1] = useState("Editable Paragraph");
  const [text2, setText2] = useState("Editable Paragraph");

  return (
    <>
      <Title level={1}>Level 1 Title</Title>
      <Title level={2}>Level 2 Title</Title>
      <Title level={3}>Level 3 Title</Title>
      <Title level={4}>Level 4 Title</Title>
      <Title level={5}>Level 5 Title</Title>
      <Text strong>Stronged Text</Text>
      <Text underline>Underlined Text</Text>
      <Text mark>Marked Text</Text>
      <Text disabled>Disabled Text</Text>
      <Text type="success">Type = Success</Text>
      <Text type="danger">Type = Danger</Text>
      <Text type="secondary">Type = Secondary</Text>
      <Text type="warning">Type = Warning</Text>
      <Link href="https://google.com" target={"_blank"} underline>
        Underlined Link
      </Link>
      <Paragraph underline mark strong>
        Underlined Marked Stronged Paragraph
      </Paragraph>
      <Paragraph
        editable={{
          onChange: (val) => {
            setText1(val);
          },
          triggerType: "icon|text",
          tooltip: "Click to edit text!",
        }}
      >
        {text1}
      </Paragraph>
      <Paragraph
        editable={{
          onChange: (val) => {
            setText2(val);
          },
          triggerType: "icon|text",
          tooltip: "Click to edit text!",
          icon: <SmileFilled />,
          enterIcon: <CheckOutlined />,
        }}
      >
        {text2}
      </Paragraph>
      <Paragraph
        copyable={{
          tooltips: ["Click to copy", "Done"],
          text: "Different Text Coppied!",
        }}
      >
        Copyable Text
      </Paragraph>
      <Paragraph
        style={{ width: "300px" }}
        ellipsis={{
          rows: 3,
          expandable: true,
          symbol: "Show more"
        }}
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English
      </Paragraph>
      <Paragraph
        style={{ width: "300px" }}
        ellipsis={{
          rows: 3,
          expandable: true,
          symbol: "Show more",
          suffix: "Eliipsis Text",
        }}
      >
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here', making it
        look like readable English
      </Paragraph>
    </>
  );
};

export default Typographies;
