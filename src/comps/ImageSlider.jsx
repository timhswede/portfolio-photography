import React from "react";
import ImageSlider from "./ImageSliderBox";

const Application = () => {
    return (
      <>
        <div>
          <ImageSlider images={[
            'https://web-photography-s3.s3.us-west-1.amazonaws.com/HomeImage1.jpg',
            'https://web-photography-s3.s3.us-west-1.amazonaws.com/HomeImage2.jpg', 
            'https://web-photography-s3.s3.us-west-1.amazonaws.com/HomeImage3.jpg', 
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