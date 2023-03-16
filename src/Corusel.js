import React, { useRef } from "react";
import { Carousel, Button } from "antd";

const Corusel = () => {
  const ref = useRef();

  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        textAlign: "center",
      }}
    >
      <Carousel
        autoplay
        autoplaySpeed={5000}
        dotPosition="bottom"
        dots={true}
        pauseOnHover={true}
        pauseOnDotsHover={true}
        draggable={true}
        effect="scrollx"
        ref={ref}
      >
        <div>
          <h1
            style={{
              color: "white",
              fontSize: "1.5rem",
              lineHeight: "300px",
              backgroundColor: "green",
            }}
          >
            Slide 1
          </h1>
        </div>
        <div>
          <h1
            style={{
              color: "white",
              fontSize: "1.5rem",
              lineHeight: "300px",
              backgroundColor: "purple",
            }}
          >
            Slide 2
          </h1>
        </div>
        <div>
          <h1
            style={{
              color: "white",
              fontSize: "1.5rem",
              lineHeight: "300px",
              backgroundColor: "orange",
            }}
          >
            Slide 3
          </h1>
        </div>
        <div>
          <h1
            style={{
              color: "white",
              fontSize: "1.5rem",
              lineHeight: "300px",
              backgroundColor: "blue",
            }}
          >
            Slide 4
          </h1>
        </div>
        <div>
          <h1
            style={{
              color: "white",
              fontSize: "1.5rem",
              lineHeight: "300px",
              backgroundColor: "red",
            }}
          >
            Slide 5
          </h1>
        </div>
      </Carousel>
      <Button
        onClick={() => {
          ref.current.prev();
        }}
      >
        Prev
      </Button>
      <Button
        onClick={() => {
          ref.current.goTo(0);
        }}
      >
        Rese
      </Button>
      <Button
        onClick={() => {
          ref.current.next();
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default Corusel;
