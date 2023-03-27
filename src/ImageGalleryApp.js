import { Typography, Input, List, Card, Image, FloatButton } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ImageGalleryApp({ setShowApp }) {
  const navigate = useNavigate();
  const [searchedText, setSearchedText] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/search?q=${searchedText}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
        setLoading(false);
      });
  }, [searchedText]);

  const goHome = () => {
    navigate("/");
    setShowApp(true);
  };

  return (
    <div className="imageGalleryParentDiv">
      <FloatButton
        description="Back"
        onClick={goHome}
        type="primary"
        style={{ left: 50, width: 80, height: 80, fontWeight: "bold" }}
      />
      <Typography.Title className="galleryTitle">
        Ismoil's Gallery
      </Typography.Title>
      <Input.Search
        allowClear
        className="imageGallerySearchBar"
        onSearch={(val) => {
          setSearchedText(val);
        }}
      ></Input.Search>
      <Typography.Text className="amountDisplayText">
        Showing results for <strong>{searchedText || "All"}</strong>
      </Typography.Text>
      <List
        loading={loading}
        grid={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6 }}
        dataSource={data}
        renderItem={(item) => {
          return (
            <Card key={item.id} className="cardStyle" hoverable>
              <Image
                src={item.thumbnail}
                preview={{ visible: false }}
                onClick={() => {
                  setPreviewImages(item.images);
                }}
              ></Image>
            </Card>
          );
        }}
      ></List>
      {previewImages.length && (
        <Image.PreviewGroup
          preview={{
            visible: previewImages.length,
            onVisibleChange: (val) => {
              if (!val) setPreviewImages([]);
            },
          }}
        >
          {previewImages.map((image) => {
            return <Image src={image} />;
          })}
        </Image.PreviewGroup>
      )}
    </div>
  );
}
