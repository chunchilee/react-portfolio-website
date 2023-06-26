import React from "react";

const Info = ({ items, Heading }) => {
  const renderItems = items.map((val, i) => {
    return (
      <div className="about_details_content_box" key={i}>
        <div className="icon">
          <span>{val.icon}</span>
        </div>
        <div className="about_details_content_box_text">
          <h4>{val.text}</h4>
          <span>{val.value}</span>
        </div>
      </div>
    );
  });

  return (
    <>
      <Heading title="about info" />
      <div className="about_details_content">{renderItems}</div>
    </>
  );
};

export default Info;
