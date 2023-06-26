import React, { Fragment, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Slider = ({ items, Heading }) => {
  const [data, setData] = useState(items);
  const [curSlide, setCurSlide] = useState(0);
  console.log(setData);
  console.log(curSlide);

  const checkIndex = (position) => {
    if (position > data.length - 1) {
      return 0;
    } else if (position < 0) {
      return data.length - 1;
    }
    return position;
  };

  const prevSlide = () => {
    setCurSlide(() => {
      let newSlide = curSlide - 1;
      return checkIndex(newSlide);
    });
  };

  const nextSlide = () => {
    setCurSlide(() => {
      let newSlide = curSlide + 1;
      return checkIndex(newSlide);
    });
  };

  const renderSlider = data.map((slide, index) => {
    return (
      <Fragment key={slide.id}>
        {/* 輪播效果 */}
        {index === curSlide && (
          <div className="card">
            <div className="img">
              <img src={slide.cover} alt="" />
            </div>
            <div className="text">
              <p>{slide.desc}</p>
              <h3>{slide.name}</h3>
              <label>{slide.link}</label>
            </div>
          </div>
        )}
      </Fragment>
    );
  });

  return (
    <>
      <div className="about_slider">
        <Heading title="What They Says?" />
        <div className="about_slider_content">
          {renderSlider}
          <div className="about_slider_content_sliderButton">
            <button className="icon" onClick={nextSlide}>
              <BsArrowRight />
            </button>
            <button className="icon" onClick={prevSlide}>
              <BsArrowLeft />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Slider;
