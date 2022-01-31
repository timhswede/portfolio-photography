import React from "react";
import ImageSlider from "./ImageSliderBox";

const Application = () => {
    return (
      <>
        <div>
          <ImageSlider images={[
            'https://web-photography-s3.s3.us-west-1.amazonaws.com/IMG_2424.jpg',
            'https://web-photography-s3.s3.us-west-1.amazonaws.com/DSC03091.jpg', 
            'https://web-photography-s3.s3.us-west-1.amazonaws.com/DSC03462.png', 
          ]}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: "#fff",
                height: '400px',
                width: '800px',
              }}
            >
            </div>
          </ImageSlider>
        </div>
      </>
    );
  };
  
  export default Application;