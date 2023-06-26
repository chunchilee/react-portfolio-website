import React from "react";

const Bio = ({ items, Heading }) => {
  const renderBio = items.map((val) => {
    return (
      <div className="about_details_bio_box" key={val.para1}>
        <div className="about_details_bio_box_item">
          <p>{val.para1}</p>
        </div>
        <div className="about_details_bio_box_item">
          <p>{val.para2}</p>
        </div>
        <div className="about_details_bio_box_item">
          <p>{val.para3}</p>
        </div>
        <div className="about_details_bio_box_item">
          <img src={val.images} alt="bio" />
        </div>
      </div>
    );
  });

  return (
    <>
      <Heading title="Short Bio" id='Bio'/>
      <div className="about_details_bio">{renderBio}</div>
    </>
  );
};

export default Bio;
