import React, { Fragment } from "react";
import Heading from "../../common/Heading";
import { about } from "../../data/data";
import Bio from "./Bio";
import Info from "./Info";
import Price from "./Price";
import Service from "./Service";
import Slider from "./Slider";

const About = () => {
  const renderAbout = about.map((items, i) => {
    return (
      <Fragment key={i}>
        <div className="about_details">
          <Info items={items.details} Heading={Heading} />
          <Bio items={items.bio} Heading={Heading} />
        </div>
        <Service items={items.services} Heading={Heading} />
        <Slider items={items.review} Heading={Heading} />
        <Price items={items.price} Heading={Heading} />
      </Fragment>
    );
  });
  // console.log(renderAbout);
  return (
    <section className="about">
      <div className="container">{renderAbout}</div>
    </section>
  );
};

export default About;
