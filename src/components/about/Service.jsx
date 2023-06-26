import React from "react";

const Service = ({ items, Heading }) => {
  const renderService = items.map((item) => {
    return (
      <div className="card" key={item.id}>
        <div className="icon">
          <span>{item.icon}</span>
        </div>
        <div className="text">
          <h3>{item.title}</h3>
          <label> {item.text}</label>
          <p>{item.decs}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="about_services">
      <Heading title="What I Do?" />
      <div className="about_services_box">{renderService}</div>
    </div>
  );
};

export default Service;
