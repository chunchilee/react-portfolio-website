import React from "react";
import { BiLockOpen } from "react-icons/bi"

const Price = ({ items, Heading }) => {
  const renderItems = items.map((val) => {
    return (
      <div className="cards" key={val.id}>
        <i>{val.icon}</i>
        <h3>{val.title}</h3>
        <p>val.desc</p>
        <h1>${val.pri}</h1>
        <p>per price</p>
        <button className="button">
          <BiLockOpen className="icons"/>
          <span>Let's start</span>
        </button>
      </div>
    );
  });

  return (
    <>
      <div className="about_price">
        <Heading title="Fair Price" />
        <div className="about_price_content">{renderItems}</div>
      </div>
    </>
  );
};

export default Price;
